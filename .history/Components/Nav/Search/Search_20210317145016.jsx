import React, { useRef } from 'react'
import styles from './Search.module.css'
const search = require('../../../public/Assets/search.svg')
const Search = () => {
	const searchRef = useRef()
	const handleExpandSearchBar = (e) => {
		const newWidth = '15vw'

		searchRef.current.style.width = newWidth
	}
	const handleDecreaseSearchBar = (e) => {
		const newWidth = '12vw'

		searchRef.current.style.width = newWidth
	}

	return(
		<div className={styles.Search} ref={searchRef}>
			<img className={styles.searchIcon} src={search}/>
			<input 
				type="text" 
				placeholder="type here" 
				onFocus={handleExpandSearchBar}
				onBlur={handleDecreaseSearchBar}
			/>

		</div>
	)


}

export default Search