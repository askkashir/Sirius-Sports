import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 "
            >
              First name
            </label>
            <div className="mt-2.5">
              <Input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 "
            >
              Last name
            </label>
            <div className="mt-2.5">
              <Input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
              />
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
            Let&apos;s talk
          </Button>
        </div>
      </form>
    </div>
  );
}
