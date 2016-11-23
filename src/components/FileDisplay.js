import React, { Component} from 'react';
import {connect} from 'react-redux';
import {handleIncrement, handleDecrement} from '../actions/index';
import ResultsCard from './ResultsCard';
import ImageCard from './ImageCard';
import Arrow from './shared/Arrow';

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
      <div>
        <div className="row" style={styles.top}>
          <div className="col-sm-12 box">
            <div style={styles.nav}>
              <div className="col-sm-2">
                {showButtons ? <Arrow cName="arrow arrow-left" marginTop={-3} handleClick={() => handleDecrement(selectedIndex)}/> : '' }
              </div>

              <div className="col-sm-8 valign">
                <span className="text-white">Filename: {file.fileName}</span>
                <span className="text-white pull-right">File {selectedIndex + 1} of {endCount}</span>
              </div>

              <div className="col-sm-2">
                {showButtons ? <Arrow cName="arrow pull-right" marginTop={-3} handleClick={() => handleIncrement(selectedIndex, endCount)}/> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={styles.cardRow}>

          <div className="col-sm-6" style={styles.wrapper}>
            <ImageCard img={imageUrl} />
          </div>

          <div className="col-sm-6" style={styles.wrapper}>
            <ResultsCard html={file.html} confidence={file.confidence} />
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
	top: {
		marginTop: 45,	
    paddingLeft: 5,
    paddingRight: 5,
	},
  nav: {
    paddingTop: 18, 
    paddingBottom: 34, 
  },
  wrapper: {
    padding: 5, 
    height: 620, 
    marginBottom: 33,
    marginTop: -26,
  },
  cardRow: {
    marginBottom: 42 
  },
};
