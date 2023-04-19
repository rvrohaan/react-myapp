import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({ hasError: true })
    }

    render() {
        if ( this.state.hasError ){
            <h1>Opps...An Error Occured</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;