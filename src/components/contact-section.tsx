import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Mail, Phone} from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Questions? We’re here to help. Fill out the form below.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 "
            >
              Name
            </label>
            <div className="mt-2.5">
              <Input type="text" name="name" id="name" autoComplete="name" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 "
            >
              Email
            </label>
            <div className="mt-2.5">
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 "
            >
              Message
            </label>
            <div className="mt-2.5">
              <Textarea name="message" id="message" rows={4} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" className="w-full active:scale-95">
            Send Message
          </Button>
        </div>
      </form>
      <div className="mt-16 flex justify-center space-x-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <a href="mailto:support@siriussports.com">
            support@siriussports.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <a href="tel:+923001234567">+92 300 1234567</a>
        </div>
      </div>
    </section>
  );
}
