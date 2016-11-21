import React, { Component} from 'react';
import {connect} from 'react-redux';
import {doneLoading} from '../actions/index';
import FileDisplay from './FileDisplay';
import FileSelect from './FileSelect';
import LoadingProgress from './LoadingProgress';

class FileController extends Component {
	constructor(props) {
		super(props);	
		this.handleRender = this.handleRender.bind(this);
	}

	componentWillReceiveProps({currentCount, endCount}) {
		if (currentCount === endCount) {
			this.props.doneLoading();		
		}	
	}

	handleRender() {
		if (this.props.loading) {
			return <LoadingProgress />;
		}
		if (!this.props.loading && this.props.files.length > 0) {
			return <FileDisplay />;
		}	
		return (
			<FileSelect />
		);
	}

	render() {
		return (
			<div className="container">
				{this.handleRender()}
			</div>	
		);	
	}	
}

function mapStateToProps({main}) {
	const {currentCount, endCount, files, loading} = main;
	return {currentCount, endCount, files, loading };
}

export default connect(mapStateToProps, {doneLoading})(FileController);
