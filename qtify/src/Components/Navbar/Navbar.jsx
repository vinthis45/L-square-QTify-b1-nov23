import React from 'react'
import Button from './Button/Button'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <Logo />
            <Search placeholder="Search a song of your choice"/>
            <Button>Give Feedback</Button>

        </nav>
    )
}
