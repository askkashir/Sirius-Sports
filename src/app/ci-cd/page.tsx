import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {CodeBlock} from '@/components/code-block';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Github} from 'lucide-react';

const githubActionsWorkflow = `
name: Deploy to Firebase Hosting
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
`.trim();

export default function CiCdPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">CI/CD Workflow</h1>
        <p className="text-muted-foreground">
          Automate your deployment process with GitHub Actions for seamless
          updates.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>GitHub Actions Workflow</CardTitle>
          <CardDescription>
            Create a file at `.github/workflows/firebase-hosting.yml` in your
            project root and paste the following content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CodeBlock code={githubActionsWorkflow} language="yaml" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
          <CardDescription>
            This workflow requires a secret to authenticate with Firebase.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Github className="h-4 w-4" />
            <AlertTitle>Required Secret: FIREBASE_SERVICE_ACCOUNT</AlertTitle>
            <AlertDescription>
              <ol className="list-decimal space-y-2 pl-4">
                <li>
                  Go to your Firebase project settings, then "Service
                  accounts".
                </li>
                <li>Click "Generate new private key" to download a JSON file.</li>
                <li>
                  In your GitHub repository, go to "Settings" &gt; "Secrets and
                  variables" &gt; "Actions".
                </li>
                <li>
                  Create a new repository secret named{' '}
                  `FIREBASE_SERVICE_ACCOUNT`.
                </li>
                <li>
                  Paste the entire content of the downloaded JSON file as the
                  secret's value.
                </li>
              </ol>
            </AlertDescription>
          </Alert>
          <p className="mt-4 text-sm text-muted-foreground">
            Remember to replace `your-project-id` in the workflow file with
            your actual Firebase project ID.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
