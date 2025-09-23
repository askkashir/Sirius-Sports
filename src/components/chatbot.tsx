'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, MessageSquare, Send, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { chat } from '@/ai/flows/chat-flow';
import { captureLead, LeadSchema } from '@/ai/flows/lead-capture-flow';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

type LeadFormValues = z.infer<typeof LeadSchema>;

type Message = {
  id: string;
  text: string;
  role: 'user' | 'assistant';
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { name: '', email: '' },
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Show initial welcome message
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          text: 'Hi there! How can I help you today?',
        },
      ]);
      setShowLeadForm(false);
    }
  };

  const addMessage = (text: string, role: 'user' | 'assistant') => {
    const newMessage = { id: Date.now().toString(), text, role };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const handleMenuClick = (text: string, response: string) => {
    addMessage(text, 'user');
    setTimeout(() => {
      addMessage(response, 'assistant');
      setShowLeadForm(false);
    }, 500);
  };

  const handleTalkToAgent = () => {
    addMessage('I want to talk to an agent', 'user');
    setTimeout(() => {
      addMessage(
        'Please provide your name and email, and an agent will get back to you shortly.',
        'assistant'
      );
      setShowLeadForm(true);
    }, 500);
  };

  const handleFormSubmit = async (values: LeadFormValues) => {
    setIsLoading(true);
    try {
      await captureLead(values);
      addMessage(
        'Thanks! Our team will review your message and get back to you soon.',
        'assistant'
      );
      setShowLeadForm(false);
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFreeTextSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userInput = formData.get('message') as string;
    if (!userInput.trim()) return;

    addMessage(userInput, 'user');
    event.currentTarget.reset();
    setIsLoading(true);
    setShowLeadForm(false);

    try {
      const response = await chat(userInput);
      addMessage(response, 'assistant');
    } catch (error) {
      addMessage('Sorry, I am having trouble connecting. Please try again later.', 'assistant');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const isInitialState = messages.length === 1 && messages[0].id === 'welcome';

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg active:scale-95"
          onClick={handleToggle}
          aria-label="Toggle chatbot"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-full max-w-sm"
          >
            <div className="bg-card border shadow-xl rounded-lg flex flex-col h-[60vh]">
              <div className="p-4 border-b">
                <h3 className="font-bold text-lg">Sirius Support</h3>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && !showLeadForm && (
                     <div className="flex justify-start gap-2">
                        <Avatar className="w-8 h-8">
                           <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                           <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <AnimatePresence>
                {isInitialState && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 border-t space-y-2"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleMenuClick('What are your shipping times?', 'We offer worldwide shipping. Standard shipping takes 5-7 business days.')}
                    >
                      What are your shipping times?
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleMenuClick('What is your return policy?', 'We have a 30-day return policy. Items must be in their original condition.')}
                    >
                      What is your return policy?
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={handleTalkToAgent}
                    >
                      Talk to an agent
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showLeadForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 border-t"
                  >
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(handleFormSubmit)}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                          {isLoading ? <Loader2 className="animate-spin" /> : 'Submit'}
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showLeadForm && !isInitialState && (
                <div className="p-4 border-t">
                  <form onSubmit={handleFreeTextSubmit} className="flex gap-2">
                    <Input
                      name="message"
                      placeholder="Type your message..."
                      className="flex-1"
                      autoComplete="off"
                      disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading}>
                      <Send />
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
