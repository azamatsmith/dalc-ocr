import React, { Component} from 'react';
import {connect} from 'react-redux';
import {
	fileLoaded, 
	ocrStarted, 
	handleIncrement, 
	handleDecrement,
} from '../actions/index';

class Listeners extends Component {
	componentDidMount() {
		// set all listeners for redux actions	
		// set listener for when a file has been received
		document.addEventListener('fileResult', (e) => {
			this.props.fileLoaded(e.detail);
		}, false);
		document.addEventListener('ocrStarted', (e) => {
			this.props.ocrStarted(e.detail);
		}, false);
		document.addEventListener('keyup', (e) => {
			const {handleIncrement, handleDecrement, selectedIndex, endCount} = this.props;
			if (e.keyCode === 37) {this.props.handleDecrement(selectedIndex)}
			if (e.keyCode === 39) {this.props.handleIncrement(selectedIndex, endCount)}
		});
	}
	render() {
		return (
			<div />
		);	
	}	
}

function mapStateToProps({main}) {
	const {selectedIndex, endCount} = main;
	return {selectedIndex, endCount};
}

export default connect(mapStateToProps, {
	fileLoaded, 
	ocrStarted, 
	handleIncrement, 
	handleDecrement
})(Listeners);
