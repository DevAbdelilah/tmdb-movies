"use client";

import { useState, useEffect, ReactNode } from "react";

interface ClientProviderProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientProvider({
  children,
  fallback = null,
}: ClientProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return <>{children}</>;
}

// HOC to wrap components that need client-side only rendering
export function withClientSide<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  fallback: ReactNode = null
) {
  return function WithClientSideComponent(props: P) {
    return (
      <ClientProvider fallback={fallback}>
        <WrappedComponent {...props} />
      </ClientProvider>
    );
  };
}
