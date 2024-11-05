import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ErrorBoundary extends Component {
 constructor(props) {
 super(props);
 this.state = { hasError: false, error: null };
 }
 static getDerivedStateFromError(error) {
 return { hasError: true, error };
 }
 componentDidCatch(error, errorInfo) {
 console.error(error, errorInfo);
 }
 render() {
 if (this.state.hasError) {
 return <p>Error: {this.state.error.message}</p>;
 }
 return this.props.children;
 }
}
ErrorBoundary.propTypes = {
 children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
