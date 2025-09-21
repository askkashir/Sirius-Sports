import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {CheckCircle2, AlertTriangle, Activity} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const preDeploymentChecklist = [
  'Test build locally (`npm run build && npm run preview`)',
  'Check bundle size for unexpected increases',
  'Validate Firebase configuration with a preview deploy (`firebase hosting:channel:deploy preview`)',
  'Test on different devices for responsiveness',
  'Verify fast loading speed',
  'Ensure all navigation and core functionality works',
];

const postDeploymentChecklist = [
  'Website loads correctly at the live URL',
  'All routes work as expected (React Router)',
  'Mobile and desktop designs are fully responsive',
  'Page loading times are under 3 seconds',
  'No errors in the browser console',
  'Theme (e.g., dark mode) renders properly',
  'Dynamic pages like product showcases function correctly',
  'Forms (e.g., contact form) submit successfully',
  'SEO meta tags are present in the page source',
];

const troubleshooting = [
  {
    issue: 'Build fails unexpectedly',
    solution:
      'Delete `node_modules` and `package-lock.json`, then run `npm install` to get fresh dependencies.',
  },
  {
    issue: 'Routes return a 404 error on the live site',
    solution:
      'Ensure the "rewrites" configuration in `firebase.json` correctly points all sources to `/index.html`.',
  },
  {
    issue: 'Assets (images, CSS) are not loading (404s)',
    solution:
      'Check that the "public" directory in `firebase.json` is set to your build output folder (e.g., "dist").',
  },
  {
    issue: 'Website feels slow to load',
    solution:
      'Enable GZIP compression and set aggressive caching headers for static assets in `firebase.json`.',
  },
  {
    issue: 'Changes are not appearing after a new deployment',
    solution:
      'You might be seeing a cached version. Check your `Cache-Control` headers for `index.html` (should be `no-cache`) and try a hard refresh (Ctrl+Shift+R).',
  },
];

export default function ValidatePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Testing & Validation</h1>
        <p className="text-muted-foreground">
          Ensure a smooth and successful deployment with these checklists and
          troubleshooting tips.
        </p>
      </div>

      <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3']}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            Pre-deployment Checklist
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-3">
              {preDeploymentChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Post-deployment Verification
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <ul className="space-y-3">
              {postDeploymentChecklist.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            Troubleshooting Common Issues
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            {troubleshooting.map((item, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-amber-500" />
                  <CardTitle className="text-base">{item.issue}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {item.solution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
