import type { CSSProperties } from 'react';

declare global {
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
        children?: React.ReactNode;
        className?: string;
      };
    }
  }
}
