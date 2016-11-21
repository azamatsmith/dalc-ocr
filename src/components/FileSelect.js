import React, {Component} from 'react';
import {connect} from 'react-redux';

import {openFile, openFolder} from '../../process-main/functions';

class FileSelect extends Component {
	render() {
		return (
			<div className="row" style={styles.main}>
        <div className="text-center">
          <h1>- DALC OCR -</h1>
          <p className="help-block">Read a single image or a whole folder?</p>
        </div>
        <div className="col-sm-6 col-sm-offset-3 well">

          <div className="col-sm-6 text-center file-btn" onClick={() => openFile()}>
            <span>
              <i className="fa fa-file-image-o fa-5x"></i>
            </span>
            <p style={styles.text}>Open File</p>
          </div>

          <div className="col-sm-6 text-center file-btn" onClick={() => openFolder()}>
            <div>
              <i className="fa fa-folder-open-o fa-5x"></i>
            </div>	
            <p style={styles.text}>Open Folder</p>
          </div>

        </div>
      </div>
		);	
	}
}

export default FileSelect;

const styles = {
  main: {
		marginTop: 174	
  },
  text: {
    marginTop: 15, 
    fontSize: 20
  },
};

