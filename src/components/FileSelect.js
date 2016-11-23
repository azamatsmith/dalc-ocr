import React, {Component} from 'react';
import {connect} from 'react-redux';

import {openFile, openFolder} from '../../process-main/functions';

class FileSelect extends Component {
	render() {
		return (
      <div className="container">
        <div className="row" style={styles.main}>

          <div className="col-sm-8 col-sm-offset-2 box" style={styles.box}>
            <div className="row">

              <div className="col-sm-12 text-center">
                <h1 className="text-white" style={styles.title}>DALC OCR</h1>
                <p className="help-block">Read a single file or a whole folder?</p>
              </div>

              <div className="col-sm-6">
                <div className="col-sm-6 col-sm-offset-6 file-btn text-center" onClick={() => openFile()}>
                  <span>
                    <i className="fa fa-file-image-o fa-5x"></i>
                  </span>
                  <p style={styles.text}>Open File</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="col-sm-6 file-btn text-center" onClick={() => openFolder()}>
                  <div>
                    <i className="fa fa-folder-open-o fa-5x"></i>
                  </div>	
                  <p style={styles.text}>Open Folder</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
		);	
	}
}

export default FileSelect;

const styles = {
  title: {
    letterSpacing: 10 
  },
  main: {
		marginTop: 174,	
		marginBottom: 300,	
  },
  text: {
    marginTop: 15, 
    fontSize: 20
  },
  box: {
    paddingBottom: 28 
  },
};

