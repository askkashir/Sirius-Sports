import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {CodeBlock} from '@/components/code-block';

const packageJsonScripts = `
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && firebase deploy",
  "deploy:prod": "npm run build && firebase deploy --only hosting"
}
`.trim();

const firebaseJsonConfig = `
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|png|jpg|jpeg|webp|svg|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "/index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      }
    ]
  }
}
`.trim();

const envProductionConfig = `
VITE_API_URL=https://your-api-domain.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_ENVIRONMENT=production
VITE_GTM_ID=GTM-XXXXXXX
`.trim();

const viteConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
})
`.trim();

export default function ConfigurePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Project Configuration</h1>
        <p className="text-muted-foreground">
          Set up the necessary configuration files for a robust and optimized
          deployment.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            package.json Scripts
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm">
              Add deployment scripts to your `package.json` for easy and
              consistent deployments.
            </p>
            <CodeBlock code={packageJsonScripts} language="json" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            firebase.json
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm">
              This file contains your Firebase Hosting configuration, including
              caching headers and rewrites for a single-page app.
            </p>
            <CodeBlock code={firebaseJsonConfig} language="json" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            .env.production
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm">
              Create a `.env.production` file in your project root for
              production-specific environment variables.
            </p>
            <CodeBlock code={envProductionConfig} language="bash" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">
            vite.config.js
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <p className="text-sm">
              Optimize your Vite build configuration for production. This
              example includes settings for manual chunk splitting to improve
              caching.
            </p>
            <CodeBlock code={viteConfig} language="javascript" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
