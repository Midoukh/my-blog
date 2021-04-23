import React from 'react'
import styles from './Button.module.css'
const Button = ({ children, bgColor }) => {

	return <button className={styles.Button} style={{ backgroundColor: bgColor }}>{children}</button>

}

export default Button