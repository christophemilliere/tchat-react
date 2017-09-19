import React from 'react';
class Connexion extends React.Component {
	goToTchat = (event) => {
		event.preventDefault();
		const pseudo = this.pseudoInput.value
		this.context.router.transitionTo(`/pseudo/${pseudo}`);
	};

	render(){
		return(
			<div className="connexionBox" onSubmit={ (e) => this.goToTchat(e)} >
				<form action="" className="connexion">
					<input type="text" placeholder="Votre pseudo" required 
					ref={input =>{ this.pseudoInput = input }} />
					<button type="submit">Go</button>
				</form>
			</div>
		)
	}
	static contextTypes = {
		router: React.PropTypes.object
	}
}

export default Connexion;