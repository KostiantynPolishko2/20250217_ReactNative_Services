import React, { Component, ReactNode } from "react";
import ErrorFallback from "./ErroFallback";

interface Props {
    children: ReactNode;
}

interface State {
    isError: boolean;
    error: Error | null;
}

class WithErrorBoundary extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { isError: false, error: null};
    }

    static getDerivedStateFromError(_error: Error) {
        return { isError: true, error: _error };
    }

    componentDidCatch(error: Error) {
        console.error("WeaponsModel Error:", error);
    }

    retry = () => {
        this.setState({ isError: false, error: null });
    };

    render() {
        if (this.state.isError) {
            return (
                <ErrorFallback error={this.state.error} resetError={this.retry}/>
            );
        }

        return this.props.children;
    }
}

export default WithErrorBoundary;
