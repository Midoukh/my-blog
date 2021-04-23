import React, { useState, useRef } from 'react'
import styles from './Account.module.css'
const account = require('../../../public/Assets/account.png')
import Backdrop from '../../Backdrop/Backdrop'
import Form from '../../Form/Form'
const Account = (props) => {
	const [showBackdrop, setShowBackdrop] = useState(false)
	const formRef = useRef()

	const handleShowBackdrop = (e) => {
		const newVal = !showBackdrop
		if (e.target.className === 'back-drop' || e.target.className.includes('Account')){
			setShowBackdrop(prev => prev = newVal)

		}
	}
	return (
			<>
			{showBackdrop? <Backdrop hide={handleShowBackdrop}><Form/></Backdrop>: null}
			<img 
			className={styles.Account} 
			src={account}
			onClick={handleShowBackdrop}
			/>
			</>
			)
}

export default Account