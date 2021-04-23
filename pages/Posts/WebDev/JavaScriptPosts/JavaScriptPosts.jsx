import React from 'react'
import styles from '../GlobalStyle/WebDevPosts.module.css'

const jsLogo = require('../../../../public/Assets/JavaScript-logo.png')
class JavaScriptPosts extends React.Component{

	render(){
		return(

			<main className={styles.WebDevPostsContainer}>
				<header>
					<img src={jsLogo}/>
					<h1>Java Script Posts.</h1>
				</header>

			</main>

		)

	}
}

export default JavaScriptPosts