import React from 'react'
const badge = require('../../../public/Assets/trending.png')
import styles from './Latest.module.css'
import Blogs from '../../../Components/Blogs/Blogs'
import ShowMoreButton from '../../../UI/ShowMoreButton/ShowMoreButton'

const Latest = () => {
	const data = ['post1', 'post2', 'post3', 'post4', 'post5', 'post6']
	return(
		<section className={styles.Latest}>
			<div className={styles.Head}>
				<h1>Latest</h1>
				<img src={badge} alt="Latest badge icon"/>
			</div>
			<Blogs data={data}/>
			<div className={styles.ShowMore}><ShowMoreButton content="the latest Posts"/></div>

		</section>
	)
}

export default Latest