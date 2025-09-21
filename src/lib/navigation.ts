import {
  TerminalSquare,
  Sparkles,
  Globe,
  FileCog,
  ShieldCheck,
  Github,
  ClipboardCheck,
  LayoutGrid,
} from 'lucide-react';
import {FirebaseIcon} from '@/components/firebase-icon';

export const navigationLinks = [
  {href: '/', label: 'Dashboard', icon: LayoutGrid},
  {href: '/setup', label: 'Firebase Setup', icon: FirebaseIcon},
  {href: '/configure', label: 'Configuration', icon: FileCog},
  {href: '/optimize', label: 'Build Optimizer', icon: Sparkles},
  {href: '/deploy', label: 'Build & Deploy', icon: TerminalSquare},
  {href: '/domain', label: 'Custom Domain', icon: Globe},
  {href: '/security', label: 'Security & Perf.', icon: ShieldCheck},
  {href: '/ci-cd', label: 'CI/CD Workflow', icon: Github},
  {href: '/validate', label: 'Validation', icon: ClipboardCheck},
];
