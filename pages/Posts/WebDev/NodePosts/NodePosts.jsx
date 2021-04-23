import React from 'react'
import styles from '../GlobalStyle/WebDevPosts.module.css'
const nodeLogo = require('../../../../public/Assets/node-js-icon.png')
class NodePosts extends React.Component{

	render(){
		return(

			<main className={styles.WebDevPostsContainer}>
				<header>
					<img src={nodeLogo} style={{ borderRadius: '50%' }}/>
					<h1>Node Posts.</h1>
				</header>

			</main>

		)

	}
}

export default NodePosts