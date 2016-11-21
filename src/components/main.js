import React, { Component} from 'react';
import {connect} from 'react-redux';
import FileController from './FileController';

class Main extends Component {
	constructor(props) {
		super(props);	
	}

	render() {
		return (
			<div>
				<FileController />
			</div>
		);	
	}	
}

export default Main;

