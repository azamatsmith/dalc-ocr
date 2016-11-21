import React, { Component} from 'react';
import {connect} from 'react-redux';
import {handleIncrement, handleDecrement} from '../actions/index';

class FileDisplay extends Component {
	render() {
		const {selectedIndex, files, endCount, handleIncrement, handleDecrement} = this.props;
		if (selectedIndex == null) { return <div />; }
		const file = files[selectedIndex];
		const blob = new Blob( [file.image], {type: "image/jpeg" });
		const urlCreator = window.URL || window.webkitURL;
		const imageUrl = urlCreator.createObjectURL(blob);
		const showButtons = this.props.endCount > 1 ? true : false;
		return (
			<div className="row" style={styles.main}>
         
        <div style={styles.nav}>
          <div className="col-sm-2">
            {showButtons ? <button className="btn btn-default" onClick={() => handleDecrement(selectedIndex)}>Back</button> : ''}
          </div>

          <div className="col-sm-8">
            <p>File {selectedIndex + 1} of {endCount} </p>
            <p>Filename: {file.fileName}</p>
          </div>

          <div className="col-sm-2">
            {showButtons ? <button className="btn btn-default" onClick={() => handleIncrement(selectedIndex, endCount)}>Next</button> : ''}
          </div>
        </div>

        <div className="col-sm-6">
          <div className="col-sm-12 well text-center" style={styles.imageContainer}>
            <h3>Original Image</h3>
            <img src={imageUrl} style={styles.img} className="img-responsive"/>
          </div>
        </div>
        <div className="col-sm-6">
          <h4 className="text-center">Confidence Level: {file.confidence}</h4>
          <h2 className="text-center">OCR Results</h2>
          <hr />
          <div className="well">
            <div dangerouslySetInnerHTML={{__html: file.html}} />
          </div>
        </div>
			</div>
		);	
	}	
}

function mapStateToProps({main}) {
	const {files, selectedIndex, endCount} = main;
	return { selectedIndex, files, endCount};
}

export default connect(mapStateToProps, {handleIncrement, handleDecrement})(FileDisplay);

const styles = {
	main: {
		marginTop: 15	
	},
  nav: {
    margin: '5px 0px 65px'  
  },
	img: {
		margin: '20px 0',
		maxHeight: '100%',
		maxWidth: '100%',
	},
  imageContainer: {
    minHeight: '100%' 
  },
};
