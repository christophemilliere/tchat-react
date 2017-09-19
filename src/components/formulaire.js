import React from 'react';
class Fomulaire extends React.Component {
	state = {
		length: this.props.length,
		message: ""
	}
	createMessage = (event) => {
		event.preventDefault();
		const message  = {
			message: this.state.message,
			pseudo: this.props.pseudo
		}
		this.props.addMessage(message);
		//reset form
		this.messageForm.reset();
		const length = this.props.length
		this.setState({ length });
	};

	handleChange = (event) => {
		this.setState({message: event.target.value});
		const length = this.props.length - this.state.message.length
		this.setState({length});
  };
	render(){
		return(
			<div>
				<form className="form" 
					onSubmit={ (e) => this.createMessage(e)} 
					ref={input => this.messageForm = input } >
					<textarea required value={this.state.message} maxLength={ this.props.length }
					onChange={ this.handleChange }></textarea>
					<div className="info">{ this.state.length }</div>
					<button type="submit"> Envoyer!</button>
				</form>
			</div>
		)
	}

	static propTypes = {
		addMessage: React.PropTypes.func.isRequired,
		pseudo: React.PropTypes.string.isRequired,
		length: React.PropTypes.number.isRequired
	}
}

export default Fomulaire;