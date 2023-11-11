import React from 'react'
import { ReactComponent as SearchIcon } from "../../../Assets/SearchIcon.svg"
import styles from "./Search.module.css";
export default function Search({ placeholder }) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required />
            <button className={styles.searchBtn} type='submit'>
                <SearchIcon />
            </button>
        </form>
    )
}
