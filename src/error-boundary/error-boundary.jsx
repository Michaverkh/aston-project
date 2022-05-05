import React, {Component} from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo,
        })
    }

    render() {
        if (this.state.hasError) {
            return <p>Ups! Something went wrong...</p>
        }

        return this.props.children;
    }
}