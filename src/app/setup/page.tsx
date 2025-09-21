import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {CodeBlock} from '@/components/code-block';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Info, Terminal} from 'lucide-react';

const firebaseInitAnswers = `
# Project Setup
? Please select an option: Use an existing project
? Select a default Firebase project: peakwear-sportswear (your-project-id)

# Hosting Setup  
? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File dist/index.html already exists. Overwrite? No
`.trim();

export default function SetupPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Firebase Setup</h1>
        <p className="text-muted-foreground">
          Initialize your Firebase project and prepare for deployment.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. Firebase CLI Installation</CardTitle>
          <CardDescription>
            Install the Firebase Command Line Interface (CLI) globally on your
            machine.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={`npm install -g firebase-tools`} language="bash" />
          <p className="text-sm text-muted-foreground">
            Verify the installation by checking the version:
          </p>
          <CodeBlock code={`firebase --version`} language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Login to Firebase</CardTitle>
          <CardDescription>
            Log in to your Google account using the Firebase CLI.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code={`firebase login`} language="bash" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3. Create a Firebase Project</CardTitle>
          <CardDescription>
            If you don't have a project yet, create one in the Firebase
            Console.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>
              Go to the{' '}
              <a
                href="https://console.firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Firebase Console
              </a>
              .
            </li>
            <li>Click "Create a project" or "Add project".</li>
            <li>Follow the on-screen instructions to create your project.</li>
            <li>
              It's recommended to disable Google Analytics for this guide.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>4. Initialize Firebase Hosting</CardTitle>
          <CardDescription>
            Navigate to your React/Vite project directory and initialize
            Firebase Hosting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={`firebase init hosting`} language="bash" />
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Configuration Answers</AlertTitle>
            <AlertDescription>
              When prompted, use the following answers to configure your
              project:
            </AlertDescription>
          </Alert>
          <CodeBlock code={firebaseInitAnswers} language="bash" />
        </CardContent>
      </Card>
    </div>
  );
}
