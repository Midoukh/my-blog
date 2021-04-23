import React from 'react'
import styles from './Line.module.css'
const Line = (props) => {
	return (
		<div className={styles.Line} style={{ backgroundColor: props.bgColor }}>
		</div>
	)
}

export default Line