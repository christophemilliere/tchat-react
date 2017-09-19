import React from 'react';
import Formulaire from './formulaire';
import Message from './message';
import base from '../base';
//css
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animations.css'

class App extends React.Component {
	state = {
		messages: {}
	}

	componentWillMount() {
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		})
	}

	componentDidUpdate(){
		// scroll bottom
		this.messages.scrollTop = this.messages.scrollHeight;
	}

	addMessage = (message) => {
		//copy state
		const messages = { ...this.state.messages}
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		// delete more 10 message
		Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
		// upate state
		this.setState({ messages })
	}

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo
	}

	render(){
		const messages = Object.keys(this.state.messages).map(key => <Message key={key} details={ this.state.messages[key]} isUser={this.isUser} />);
		return(
			<div className="box">
				<div>
					<div className="messages" ref={input => this.messages = input }>
						<ReactCSSTransitionGroup
						component="div"
						className="message"
						transitionName="message"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={200}>
						{messages}
						</ReactCSSTransitionGroup>
						
					</div>
					<Formulaire addMessage={ this.addMessage} pseudo={ this.props.params.pseudo} length={140}/>
				</div>
			</div>
		)
	}
	static propTypes = {
		params: React.PropTypes.object.isRequired
	}
}

export default App;