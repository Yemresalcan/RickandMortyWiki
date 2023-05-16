import React from 'react'

import styles from "./Search.module.scss"

const Search = ({setSearch}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-4'>
       
        <input onChange={e=> {
            setSearch(e.target.value)
        }}
        placeholder="Search" 
        type="text" 
        className={styles.input} />
        <button className={`${styles.btn}  fs-5`}>Search</button>
    </form>
  )
}

export default Search
