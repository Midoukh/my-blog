import React from 'react'
import styles from './ShowMoreButton.module.css'

const ShowMoreButton = (props) => {

	return(
		<button className={styles.ShowMoreButton}>All {props.content}</button>
	)
}

export default ShowMoreButton