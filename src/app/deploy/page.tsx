import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {CodeBlock} from '@/components/code-block';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Rocket, Terminal} from 'lucide-react';

const buildCommands = `
# Optional: Clean previous build artifacts and dependencies
rm -rf dist node_modules package-lock.json

# Reinstall dependencies
npm install

# Create production build
npm run build
`.trim();

const deployCommands = `
# Deploy to Firebase Hosting
firebase deploy

# Or use the custom script from package.json
npm run deploy
`.trim();

const otherCommands = `
# Deploy with a specific message
firebase deploy -m "Professional UI update"

# Deploy only hosting, ignoring other services like functions
firebase deploy --only hosting

# Deploy to a preview channel instead of live
firebase hosting:channel:deploy preview

# List your Firebase projects
firebase projects:list
`.trim();

export default function DeployPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Build & Deploy</h1>
        <p className="text-muted-foreground">
          The final steps to get your project live on Firebase Hosting.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Build Your React Project</CardTitle>
          <CardDescription>
            Before deploying, you need to create a production-ready build of
            your application. This bundles and optimizes your code.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={buildCommands} language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deploy to Firebase</CardTitle>
          <CardDescription>
            Once your build is ready, deploy the `dist` folder to Firebase
            Hosting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={deployCommands} language="bash" />
          <Alert>
            <Rocket className="h-4 w-4" />
            <AlertTitle>Deployment Complete!</AlertTitle>
            <AlertDescription>
              Your website should be live at `https://your-project-id.web.app`
              or your custom domain.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Essential Firebase Commands</CardTitle>
          <CardDescription>
            A handy reference for other useful deployment commands.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code={otherCommands} language="bash" />
        </CardContent>
      </Card>
    </div>
  );
}
