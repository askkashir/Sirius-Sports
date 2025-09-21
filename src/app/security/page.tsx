import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {CodeBlock} from '@/components/code-block';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Info} from 'lucide-react';

const firebasercConfig = `
{
  "projects": {
    "default": "your-project-id"
  },
  "targets": {
    "your-project-id": {
      "hosting": {
        "production": ["peakwear-sportswear"]
      }
    }
  }
}
`.trim();

const performanceConfig = `
"hosting": {
  // ...other hosting config
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "type": 301
    }
  ]
}
`.trim();

export default function SecurityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Security & Performance</h1>
        <p className="text-muted-foreground">
          Fine-tune your Firebase setup for better security and faster loading
          times.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">.firebaserc</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              This file specifies your project aliases. It's useful for
              managing multiple deployment environments (e.g., staging,
              production).
            </p>
            <CodeBlock code={firebasercConfig} language="json" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Performance Optimizations
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Add these settings to the `hosting` section of your
              `firebase.json` to improve SEO and user experience.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>
                <strong className="font-semibold">cleanUrls:</strong> Removes
                `.html` from URLs (e.g., `/about.html` becomes `/about`).
              </li>
              <li>
                <strong className="font-semibold">trailingSlash:</strong>{' '}
                Removes trailing slashes from URLs (e.g., `/about/` becomes
                `/about`).
              </li>
              <li>
                <strong className="font-semibold">redirects:</strong> Sets up
                301 redirects for permanently moved pages.
              </li>
            </ul>
            <CodeBlock code={performanceConfig} language="json" />
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                These settings should be added inside the existing `hosting`
                object in your `firebase.json` file.
              </AlertDescription>
            </Alert>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
