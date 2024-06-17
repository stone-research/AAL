import { useEffect } from 'react';
import { hatch } from 'ldrs';

const Loader = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      hatch.register();
    }
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <l-hatch size="28" stroke="4" speed="3.5" color="black"></l-hatch>
      <p className="text-sm text-muted-foreground">
        AI is thinking...
      </p>
    </div>
  );
};

export default Loader;
