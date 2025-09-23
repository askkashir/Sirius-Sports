'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, MessageSquare, Send, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { chat } from '@/ai/flows/chat-flow';
import { captureLead } from '@/ai/flows/lead-capture-flow';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
import { Textarea } from './ui/textarea';

export const LeadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
});

type LeadFormValues = z.infer<typeof LeadSchema>;

type Message = {
  id: string;
  text: string | React.ReactNode;
  role: 'user' | 'assistant';
};

enum ChatState {
  MainMenu,
  ProductCategories,
  CustomOrders,
  FreeText,
  LeadCapture,
}

const customOrderQuestions = [
  'What product do you want to customize?',
  'Do you have your own design/logo?',
  'Which fabric/material do you prefer?',
  'How many pieces do you need?',
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatState, setChatState] = useState<ChatState>(ChatState.MainMenu);
  const [customOrderStep, setCustomOrderStep] = useState(0);
  const [customOrderAnswers, setCustomOrderAnswers] = useState<string[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const leadForm = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { name: '', email: '' },
  });

  const resetChat = useCallback(() => {
    setMessages([
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: '👋 Hello! Welcome to Sirius Sports – your trusted partner in Sportswear, Streetwear, Workwear & Hosiery. I’m here to assist you. Please choose one of the options below:',
      },
    ]);
    setChatState(ChatState.MainMenu);
    setCustomOrderStep(0);
    setCustomOrderAnswers([]);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      resetChat();
    }
  };

  const addMessage = (text: string | React.ReactNode, role: 'user' | 'assistant') => {
    const newMessage = { id: crypto.randomUUID(), text, role };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleMenuClick = (text: string, response: string | React.ReactNode, nextState?: ChatState) => {
    addMessage(text, 'user');
    setTimeout(() => {
      addMessage(response, 'assistant');
      if (nextState !== undefined) {
        setChatState(nextState);
      }
    }, 500);
  };
  
  const handleLeadCapture = () => {
    addMessage("✨ Before you leave, may I have your email or WhatsApp number so we can share our latest catalog & offers with you?", 'assistant');
    setChatState(ChatState.LeadCapture);
  }

  const handleLeadFormSubmit = async (values: LeadFormValues) => {
    setIsLoading(true);
    try {
      await captureLead(values);
      addMessage('Thanks! Our team will review your message and get back to you soon.', 'assistant');
      leadForm.reset();
      setTimeout(resetChat, 2000);
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
  
  const handleCustomOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const answer = formData.get('message') as string;
    
    if (!answer.trim()) return;

    addMessage(answer, 'user');
    const newAnswers = [...customOrderAnswers, answer];
    setCustomOrderAnswers(newAnswers);
    event.currentTarget.reset();
    
    if (customOrderStep < customOrderQuestions.length - 1) {
      setCustomOrderStep(customOrderStep + 1);
       setTimeout(() => {
        addMessage(customOrderQuestions[customOrderStep + 1], 'assistant');
      }, 500);
    } else {
      setIsLoading(true);
       setTimeout(async () => {
         const leadDetails = {
           name: 'Custom Order Lead',
           email: 'N/A', // Or prompt for email separately
           details: customOrderQuestions.map((q, i) => `${q}: ${newAnswers[i]}`).join('\n')
         };
         try {
           await captureLead({name: leadDetails.name, email: leadDetails.details});
           addMessage('✍ Thank you! Our production team will reply within 12–24 hours with a quote.', 'assistant');
           handleLeadCapture();
         } catch (error) {
            toast({
              title: 'Error',
              description: 'Could not save your custom order request.',
              variant: 'destructive',
            });
         } finally {
            setIsLoading(false);
         }
      }, 1000);
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

    try {
      const response = await chat(userInput);
      addMessage(response, 'assistant');
      handleLeadCapture();
    } catch (error) {
      addMessage('Sorry, I am having trouble connecting. Please try again later.', 'assistant');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderCurrentState = () => {
    switch (chatState) {
      case ChatState.MainMenu:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="p-4 border-t space-y-2"
          >
            <Button variant="outline" className="w-full justify-start" onClick={() => handleMenuClick('View Our Product Categories', '👉 Please select a category:', ChatState.ProductCategories)}>⿡ View Our Product Categories</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => handleMenuClick('Custom Orders / OEM Production', `✍ Please answer a few quick questions so we can assist you better:\n\n- ${customOrderQuestions[0]}`, ChatState.CustomOrders)}>⿢ Custom Orders / OEM Production</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Shipping & Delivery Information', '📦 We offer worldwide delivery!\n- Standard Shipping: 7–12 business days\n- Express Shipping: 3–5 business days\n- Tracking ID shared after dispatch\n\n(Would you like to know estimated shipping cost to your country?)'); handleLeadCapture(); }}>⿣ Shipping & Delivery Information</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Payment Methods', '💳 We accept:\n- Bank Transfer (International)\n- PayPal\n- Western Union\n- Secure Payment Gateways\n\n(Which payment method do you prefer?)'); handleLeadCapture(); }}>⿤ Payment Methods</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Minimum Order Quantity (MOQ)', '📌 Our MOQ depends on the product:\n- Hosiery: 500 pairs per design\n- T-Shirts / Hoodies: 50–100 pcs per design\n- Jackets: 30–50 pcs per design\n- Custom Orders: negotiable depending on style & fabric'); handleLeadCapture(); }}>⿥ Minimum Order Quantity (MOQ)</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Sizing & Fabric Details', '📐 Sizes Available: XS – 5XL (Custom sizes also available)\n👕 Fabrics: Cotton, Polyester, Fleece, Lycra, Spandex, Blends\n\n(Would you like to receive our Fabric Catalog?)'); handleLeadCapture(); }}>⿦ Sizing & Fabric Details</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => handleMenuClick('Contact Support / Talk to a Person', '💬 Please type your message below. Our representative will connect with you shortly.', ChatState.FreeText)}>⿧ Contact Support / Talk to a Person</Button>
          </motion.div>
        );
      case ChatState.ProductCategories:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="p-4 border-t space-y-2"
          >
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Hosiery', 'Great choice! We have a wide range of socks, leggings, and undergarments. What specifically are you looking for?'); handleLeadCapture(); }}>🧦 Hosiery</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Streetwear', 'Our streetwear collection includes trendy T-shirts, hoodies, and tracksuits.'); handleLeadCapture(); }}>👕 Streetwear</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Jackets & Workwear', 'We offer durable and stylish jackets and workwear for all seasons.'); handleLeadCapture(); }}>🧥 Jackets & Workwear</Button>
            <Button variant="outline" className="w-full justify-start" onClick={() => { handleMenuClick('Sportswear', 'Our sportswear is designed for peak performance, including gymwear and training kits.'); handleLeadCapture(); }}>🏋 Sportswear</Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setChatState(ChatState.MainMenu)}>‹ Back to Main Menu</Button>
          </motion.div>
        );
      case ChatState.LeadCapture:
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="p-4 border-t"
          >
            <Form {...leadForm}>
              <form onSubmit={leadForm.handleSubmit(handleLeadFormSubmit)} className="space-y-4">
                <FormField control={leadForm.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Name or WhatsApp</FormLabel><FormControl><Input placeholder="Your Name / Number" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={leadForm.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? <Loader2 className="animate-spin" /> : 'Submit'}</Button>
              </form>
            </Form>
          </motion.div>
        );
      case ChatState.CustomOrders:
         return (
           <div className="p-4 border-t">
             <form onSubmit={handleCustomOrderSubmit} className="flex gap-2">
               <Input name="message" placeholder="Your answer..." className="flex-1" autoComplete="off" disabled={isLoading} autoFocus />
               <Button type="submit" size="icon" disabled={isLoading}><Send /></Button>
             </form>
           </div>
         );
      case ChatState.FreeText:
        return (
          <div className="p-4 border-t">
            <form onSubmit={handleFreeTextSubmit} className="flex gap-2">
              <Textarea name="message" placeholder="Type your message..." className="flex-1" autoComplete="off" disabled={isLoading} />
              <Button type="submit" size="icon" disabled={isLoading}><Send /></Button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="icon" className="rounded-full w-16 h-16 shadow-lg active:scale-95" onClick={handleToggle} aria-label="Toggle chatbot">
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-full max-w-sm"
          >
            <div className="bg-card border shadow-xl rounded-lg flex flex-col h-[70vh]">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">Sirius Support</h3>
                <Button variant="ghost" size="sm" onClick={resetChat}>Reset</Button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.role === 'assistant' && <Avatar className="w-8 h-8"><AvatarFallback>SS</AvatarFallback></Avatar>}
                      <div className={`whitespace-pre-wrap max-w-[80%] rounded-lg px-3 py-2 text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex justify-start gap-2">
                        <Avatar className="w-8 h-8"><AvatarFallback>SS</AvatarFallback></Avatar>
                        <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                           <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <AnimatePresence>
                {renderCurrentState()}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
