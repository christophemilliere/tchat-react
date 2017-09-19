// Code React.js
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './index.css';
import Connexion from './components/connexion';
import App from './components/app';
import NotFound from './components/notFound';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/"  component={Connexion} />
				<Match pattern="/pseudo/:pseudo"  component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}
render(<Root />, document.getElementById('root'));