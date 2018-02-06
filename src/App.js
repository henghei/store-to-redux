import React from 'react';
import './App.css';
import Home from './Home';
import Post from './Post';
import store from './redux/store'
import {Provider} from 'react-redux'
import {
	BrowserRouter as Router,
	Switch,
	Route
}from 'react-router-dom';
class App extends React.Component{
	render(){
		return(
			<div className='App'>
				<Provider store={store}>
					<Router>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route  path='/post' component={Post} />
						</Switch>
					</Router>
				</Provider>
				
			</div>
			)
	}
}
export default App;
