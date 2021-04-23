import React from 'react'
import Nav from '../../Components/Nav/Nav'
import styles from  './Layout.module.css'

const Layout = ({ children }) => {
	return (
		<main className={styles.Layout}>
			<section className={styles.Content}>
				{children}
			</section>
		</main>

	)
}

export default Layout