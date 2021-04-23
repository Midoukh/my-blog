import React from 'react'
import styles from './Blog.module.css'
const Blog = (props) => {
	return(
		<div className={styles.Blog}>
			<h1>{props.name}</h1>
		</div>

	)
}

export default Blog