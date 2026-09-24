import type { CSSProperties, ReactNode } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        src?: string;
        alt?: string;
        id?: string;
        'camera-controls'?: boolean | '';
        'auto-rotate'?: boolean | '';
        'shadow-intensity'?: string;
        style?: CSSProperties;
        children?: ReactNode;
        className?: string;
      };
    }
  }
}
