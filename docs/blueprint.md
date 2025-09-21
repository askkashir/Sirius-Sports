# **App Name**: PeakDeploy

## Core Features:

- Firebase Initialization: Initialize Firebase Hosting in the React project directory, configuring project selection and single-page app settings.
- Build Configuration: Update package.json scripts to include build, preview, deploy, and deploy:prod commands.
- Firebase Configuration: Set up firebase.json to define hosting configurations, including the public directory, rewrites, and headers for caching.
- Deployment Script: Automatically generate npm script 'deploy' command to build the project and deploy it to Firebase Hosting.
- Build Optimization Tool: Automatically generate and validate Vite configurations to optimize build outputs. Use a tool that will recommend splitting application build using code-splitting into more efficiently downloaded and cached bundles. Automatically analyzes configurations for potential areas of optimization (code elimination, dead code analysis, etc.).
- Domain Configuration Guide: Generates a well-formatted markdown guide to configure a custom domain within Firebase, detailing DNS settings.
- Environment Variables Setup: Creates necessary instructions for .env.production file, configuring environment variables (API URL, Firebase project ID, GTM ID).

## Style Guidelines:

- Primary color: Deep teal (#008080) to invoke professionalism, security, and trust associated with deployment processes.
- Background color: Light grayish-teal (#E0F8F8) to maintain the teal's calm essence but offer a soft, neutral backdrop.
- Accent color: Subtle forest green (#228B22) analogous to teal to represent life, health, and nature of well built deployed code.
- Body and headline font: 'Inter' (sans-serif) for a modern and neutral look suitable for both headlines and body text.
- Use simple, clear icons to represent various actions, deployment statuses, and options in the interface.
- Maintain a clean and structured layout for each step of the Firebase deployment, making each part distinct and navigable.
- Incorporate smooth transitions and subtle loading animations to signal processes and guide users through different actions without disruptions.