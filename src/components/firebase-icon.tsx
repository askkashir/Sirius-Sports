import {cn} from '@/lib/utils';
import type {SVGProps} from 'react';

export function FirebaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn('h-4 w-4', props.className)}
    >
      <path d="M12.83,2.33a2,2,0,0,0-1.66,0L3.43,8.47a2,2,0,0,0-1.1,1.79v7.2a2,2,0,0,0,1,1.75l7.74,4.46a2,2,0,0,0,2,0l7.74-4.46a2,2,0,0,0,1-1.75v-7.2a2,2,0,0,0-1.1-1.79Z" />
    </svg>
  );
}
