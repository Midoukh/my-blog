import React from 'react'
import styles from '../GlobalStyle/WebDevPosts.module.css'
import Nav from '../../../../Components/Nav/Nav'
const reactLogo = require('../../../../public/Assets/physics.png')
class ReactPosts extends React.Component{

	render(){
		return(

			<main className={styles.WebDevPostsContainer}>
				<header>
					<img src={reactLogo}/>
					<h1>React Posts.</h1>
				</header>

			</main>

		)

	}
}

export default ReactPosts