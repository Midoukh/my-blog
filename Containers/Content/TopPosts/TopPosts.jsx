import React from 'react'
const badge = require('../../../public/Assets/top-rated.png')
import styles from './TopPosts.module.css'
import Blogs from '../../../Components/Blogs/Blogs'
const TopPosts = () => {
	const data = ['post1', 'post2', 'post3', 'post4', 'post5', 'post6']
	return(
		<section className={styles.TopPosts}>
			<div className={styles.Head}>
				<h1>Top Rated</h1>
				<img src={badge} alt="Top rated badge icon"/>
			</div>
			<Blogs data={data}/>


		</section>
	)
}

export default TopPosts