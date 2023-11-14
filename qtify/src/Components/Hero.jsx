import React from 'react'
import Hero from "../Assets/hero-image.png"
import styles from "./Hero.module.css"

export default function () {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroText}>
                <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
                <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
            </div>
            <img className={styles.heroImg} src={Hero} alt="Hero image" />
        </section>
    )
}
