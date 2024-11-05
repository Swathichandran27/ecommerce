import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
class List extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [1, 2, 3, 4, 5] };
 }
 componentDidUpdate() {
 throw new Error('An error occurred in List component');
 }
 render() {
 return (
 <ErrorBoundary>
 <ul>
 {this.state.data.map(item => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 </ErrorBoundary>
 );
 }
}
export default List;