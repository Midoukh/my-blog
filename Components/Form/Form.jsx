import React from 'react'
import styles from './Form.module.css'
import Button from '../../UI/Button/Button'
const logo = require('../../public/Assets/solvent-Copie.svg')

class Form extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			signIngUp: true
		}
	}
	handleSwitchBetweenSignUpAndSignIn = () => {
		const newVal = !this.state.signIngUp

		this.setState({ signIngUp: newVal })
	}

	render(){
		return(

			<form action="POST" className={styles.Form}>
				<div className={styles.Head}>

					<img src={logo} alt="logo"/>
					<h1>{this.state.signIngUp? 'Create an Account': 'Log in'}</h1>  
				</div>
				<div className={styles.Input}>
					<label for="username">User name</label>
					<input type="text" id="username" placeholder="User Name"/>
				</div>
				{this.state.signIngUp?
				<div className={styles.Input}>
					<label for="email">E-mail</label>
					<input type="email" id="email" placeholder="Your E-mail"/>
				</div>:null
				}
				
				<div className={styles.Input}>
					<label for="email" id="password" >Passowrd</label>
					<input type="password" id="password" placeholder="At least 7 characters"/>
				</div>
				{this.state.signIngUp?
				<div className={styles.Input}>
					<label for="password">Reapeat Password</label>
					<input type="password" id="password" placeholder="Reapeat password"/>
				</div>:null
				}
				{this.state.signIngUp? <Button bgColor="#7868e6">Register</Button>: <Button bgColor="#9c3d54">Login</Button>}
				{this.state.signIngUp? <h5 onClick={this.handleSwitchBetweenSignUpAndSignIn}>Already have an Account? <strong className={styles.Already}>Sign in</strong></h5>
				: <h5 onClick={this.handleSwitchBetweenSignUpAndSignIn}>New here? <strong className={styles.Already}>Register</strong></h5>}
			</form>


		)
	}


}

export default Form