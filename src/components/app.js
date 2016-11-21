import React, { Component} from 'react';
import Main from './main';
import Listeners from './Listeners';

class App extends Component {
	render() {
		return (
			<div>
				<Main />
				<Listeners />
			</div>
		);	
	}	
}

export default App;
