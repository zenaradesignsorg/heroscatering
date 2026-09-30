import React, { Component, ErrorInfo, ReactNode } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/business";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-secondary p-5">
          <div className="w-full max-w-md text-center">
            <h1 className="font-display text-4xl font-semibold text-primary">This page didn't load</h1>
            <p className="mt-4 text-muted-foreground">
              Reload to try again. To order now, call us at{" "}
              <a href={PHONE_HREF} className="font-semibold text-foreground underline underline-offset-2">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-8 h-12 rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-colors hover:bg-hero-red-dark"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
