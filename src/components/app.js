import React, { Component} from 'react';
import Listeners from './Listeners';
import FileController from './FileController';

class App extends Component {
	render() {
		return (
			<div className="bright-green-bg" style={styles.main}>
				<FileController />
				<Listeners />
			</div>
		);	
	}	
}

export default App;

const styles = {
  main: {
    height: '100%', 
    width: '100%', 
  },
}
