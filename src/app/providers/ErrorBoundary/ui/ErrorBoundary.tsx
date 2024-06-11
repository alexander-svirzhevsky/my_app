import { ErrorPage } from '@/pages/ErrorPage/ui/ErrorPage';
import React, { ErrorInfo, Suspense } from 'react';
import { ReactNode } from 'react';

type ErrorBoundaryState = {
    hasError: boolean;
};

type ErrorBoundaryProps = {
    children: ReactNode;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}
