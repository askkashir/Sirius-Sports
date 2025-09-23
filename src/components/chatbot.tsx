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
  text?: string;
  component?: React.ReactNode;
  role: 'user' | 'assistant';
};

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
  
  const [isAwaitingUserInput, setIsAwaitingUserInput] = useState(false);
  const [currentAction, setCurrentAction] = useState<string | null>(null);
  const [customOrderStep, setCustomOrderStep] = useState(0);
  const [customOrderAnswers, setCustomOrderAnswers] = useState<string[]>([]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  const addMessage = (message: Omit<Message, 'id'>) => {
    const newMessage = { ...message, id: crypto.randomUUID() };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (messages.length === 0) {
      resetChat();
    }
  };

  // Main Menu component
  const MainMenu = ({ onSelect }: { onSelect: (option: string) => void }) => {
    const [selectionMade, setSelectionMade] = useState(false);
    const options = [
      '⿡ View Our Product Categories',
      '⿢ Custom Orders / OEM Production',
      '⿣ Shipping & Delivery Information',
      '⿤ Payment Methods',
      '⿥ Minimum Order Quantity (MOQ)',
      '⿦ Sizing & Fabric Details',
      '⿧ Contact Support / Talk to a Person',
    ];

    const handleClick = (option: string) => {
      setSelectionMade(true);
      onSelect(option);
    };

    return (
      <div className="flex flex-col items-start space-y-2">
        {options.map((option) => (
          <Button key={option} variant="outline" size="sm" onClick={() => handleClick(option)} disabled={selectionMade}>
            {option}
          </Button>
        ))}
      </div>
    );
  };
  
  // Product Categories Menu component
  const ProductCategoriesMenu = ({ onSelect }: { onSelect: (category: string) => void }) => {
    const [selectionMade, setSelectionMade] = useState(false);
    const categories = [
      '🧦 Hosiery',
      '👕 Streetwear',
      '🧥 Jackets & Workwear',
      '🏋 Sportswear'
    ];

    const handleClick = (category: string) => {
      setSelectionMade(true);
      onSelect(category);
    };

    return (
      <div className="flex flex-col items-start space-y-2">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm" onClick={() => handleClick(category)} disabled={selectionMade}>
            {category}
          </Button>
        ))}
         <Button variant="ghost" size="sm" onClick={() => handleClick('Back')} disabled={selectionMade}>
            ‹ Back to Main Menu
        </Button>
      </div>
    );
  };

  const resetChat = useCallback(() => {
    setIsLoading(false);
    setIsAwaitingUserInput(false);
    setCurrentAction(null);
    setCustomOrderStep(0);
    setCustomOrderAnswers([]);
    setMessages([]);
    
    setTimeout(() => {
        addMessage({
            role: 'assistant',
            text: '👋 Hello! Welcome to Sirius Sports – your trusted partner in Sportswear, Streetwear, Workwear & Hosiery. I’m here to assist you. Please choose one of the options below:',
        });
        addMessage({
            role: 'assistant',
            component: <MainMenu onSelect={handleMenuSelection} />,
        });
    }, 200);
  }, []);

  const handleMenuSelection = async (selection: string) => {
    addMessage({ role: 'user', text: selection });
    setIsLoading(true);

    // A map of selections to functions that handle them
    const selectionHandlers: { [key: string]: () => void } = {
      '⿡ View Our Product Categories': () => {
        addMessage({ role: 'assistant', text: '👉 Please select a category:' });
        addMessage({ role: 'assistant', component: <ProductCategoriesMenu onSelect={handleCategorySelection} /> });
      },
      '⿢ Custom Orders / OEM Production': () => {
        addMessage({ role: 'assistant', text: `✍ Please answer a few quick questions so we can assist you better:\n\n- ${customOrderQuestions[0]}` });
        setIsAwaitingUserInput(true);
        setCurrentAction('custom_order');
        setCustomOrderStep(0);
        setCustomOrderAnswers([]);
      },
      '⿣ Shipping & Delivery Information': () => handleGenericResponse('Shipping & Delivery Information'),
      '⿤ Payment Methods': () => handleGenericResponse('Payment Methods'),
      '⿥ Minimum Order Quantity (MOQ)': () => handleGenericResponse('Minimum Order Quantity (MOQ)'),
      '⿦ Sizing & Fabric Details': () => handleGenericResponse('Sizing & Fabric Details'),
      '⿧ Contact Support / Talk to a Person': () => {
        addMessage({ role: 'assistant', text: '💬 Please type your message below. Our representative will connect with you shortly.' });
        setIsAwaitingUserInput(true);
        setCurrentAction('free_text');
      },
    };
    
    setTimeout(() => {
        const handler = selectionHandlers[selection];
        if (handler) {
            handler();
        } else {
            addMessage({ role: 'assistant', text: "I'm sorry, I didn't understand that selection." });
        }
        setIsLoading(false);
    }, 500);
  };
  
  const handleCategorySelection = (category: string) => {
    addMessage({ role: 'user', text: category });
    if (category === 'Back') {
      addMessage({ role: 'assistant', text: 'Please choose one of the options below:' });
      addMessage({ role: 'assistant', component: <MainMenu onSelect={handleMenuSelection} /> });
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
        const responses: { [key: string]: string } = {
            '🧦 Hosiery': 'Great choice! We have a wide range of socks, leggings, and undergarments. What specifically are you looking for?',
            '👕 Streetwear': 'Our streetwear collection includes trendy T-shirts, hoodies, and tracksuits.',
            '🧥 Jackets & Workwear': 'We offer durable and stylish jackets and workwear for all seasons.',
            '🏋 Sportswear': 'Our sportswear is designed for peak performance, including gymwear and training kits.',
        };
        addMessage({ role: 'assistant', text: responses[category] || 'Please specify what you are looking for.' });
        setIsAwaitingUserInput(true);
        setCurrentAction('free_text');
        setIsLoading(false);
    }, 500);
  };

  const handleGenericResponse = async (topic: string) => {
      try {
        const response = await chat(topic);
        addMessage({ role: 'assistant', text: response });
        promptForLeadCapture();
      } catch (error) {
        addMessage({ role: 'assistant', text: 'Sorry, I am having trouble connecting. Please try again later.' });
      }
  };
  
  const promptForLeadCapture = () => {
    addMessage({ role: 'assistant', text: '✨ Before you leave, may I have your email or WhatsApp number so we can share our latest catalog & offers with you?' });
    addMessage({ role: 'assistant', component: <LeadCaptureForm /> });
  };
  
  const handleUserInput = async (input: string) => {
    addMessage({ role: 'user', text: input });
    setIsLoading(true);
    setIsAwaitingUserInput(false);
    
    const action = currentAction;
    setCurrentAction(null);

    switch (action) {
        case 'custom_order':
            await handleCustomOrderInput(input);
            break;
        case 'free_text':
        default:
            try {
                const response = await chat(input);
                addMessage({ role: 'assistant', text: response });
                promptForLeadCapture();
            } catch (error) {
                addMessage({ role: 'assistant', text: 'Sorry, I am having trouble connecting. Please try again later.' });
            }
            break;
    }
    setIsLoading(false);
  };
  
  const handleCustomOrderInput = async (answer: string) => {
    const newAnswers = [...customOrderAnswers, answer];
    setCustomOrderAnswers(newAnswers);

    const nextStep = customOrderStep + 1;
    setCustomOrderStep(nextStep);

    if (nextStep < customOrderQuestions.length) {
      addMessage({ role: 'assistant', text: customOrderQuestions[nextStep] });
      setIsAwaitingUserInput(true);
      setCurrentAction('custom_order');
    } else {
      // End of custom order questions
      const leadDetails = {
           name: 'Custom Order Lead',
           email: 'N/A',
           details: customOrderQuestions.map((q, i) => `${q}: ${newAnswers[i]}`).join('\n')
      };
      try {
        await captureLead({name: leadDetails.name, email: leadDetails.details});
        addMessage({ role: 'assistant', text: '✍ Thank you! Our production team will reply within 12–24 hours with a quote.' });
        promptForLeadCapture();
      } catch (error) {
         toast({
           title: 'Error',
           description: 'Could not save your custom order request.',
           variant: 'destructive',
         });
      }
    }
  };

  const LeadCaptureForm = () => {
    const leadForm = useForm<LeadFormValues>({
        resolver: zodResolver(LeadSchema),
        defaultValues: { name: '', email: '' },
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleLeadFormSubmit = async (values: LeadFormValues) => {
        setIsLoading(true);
        setSubmitted(true);
        try {
            await captureLead(values);
            addMessage({ role: 'user', text: `Name: ${values.name}, Email: ${values.email}` });
            addMessage({ role: 'assistant', text: 'Thanks! Our team will review your message and get back to you soon.'});
            setTimeout(resetChat, 3000);
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

    if (submitted) {
      return null;
    }

    return (
        <div className="p-4 bg-muted/50 rounded-lg">
            <Form {...leadForm}>
              <form onSubmit={leadForm.handleSubmit(handleLeadFormSubmit)} className="space-y-3">
                <FormField control={leadForm.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel className="text-xs">Name or WhatsApp</FormLabel><FormControl><Input placeholder="Your Name / Number" {...field} className="h-8" /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={leadForm.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel className="text-xs">Email</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} className="h-8"/></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" size="sm" className="w-full" disabled={isLoading}>{isLoading ? <Loader2 className="animate-spin" /> : 'Submit'}</Button>
              </form>
            </Form>
        </div>
    );
  };
  
  const UserInputForm = () => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;
        handleUserInput(inputValue);
        setInputValue('');
    };

    const placeholder = isAwaitingUserInput
        ? 'Your answer...'
        : 'Type your message...';

    return (
        <div className="p-4 border-t">
             <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                    name="message"
                    placeholder={placeholder}
                    className="flex-1"
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    autoFocus
                />
               <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}><Send /></Button>
             </form>
        </div>
    )
  }

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
                    <div key={message.id} className={`flex gap-2.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.role === 'assistant' && <Avatar className="w-8 h-8"><AvatarFallback>SS</AvatarFallback></Avatar>}
                      <div className={`whitespace-pre-wrap max-w-[85%] rounded-lg px-3 py-2 text-sm ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        {message.text}
                        {message.component}
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
              <UserInputForm />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
