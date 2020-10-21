import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
}: FallbackProps) => (
  <div>
    <p>Something went wrong.</p>
    <pre style={{ color: 'red' }}>{error?.message}</pre>
  </div>
);

export default ErrorFallback;
