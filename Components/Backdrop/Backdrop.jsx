import React from 'react'

const styles = {
	position: 'absolute',
	width: '100%',
	height: '100vh',
	top: '0',
	left: '0',
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 5555555555555555555,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}
const Backdrop = ({ children ,hide }) => {

	return(

		<main className="back-drop" style={styles} onClick={hide}>{children}</main>
	)

}

export default Backdrop