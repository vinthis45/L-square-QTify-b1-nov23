import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../../Components/Hero/Hero';
import Section from '../../Components/Section/Section';
import styles from "./Homepage.module.css"


export default function Homepage(props) {
    const { data } = useOutletContext();
    const { topAlbums, newAlbums, songsData, genresData } = data;
    return (
        <>
            <Hero />
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} cardType="album" sectionType="albums" />
                <Section title="New Albums" data={newAlbums} cardType="album" sectionType="albums"/>
                <Section title="Songs" data={songsData} genresData={genresData} cardType="song" sectionType="songs" />
            </div>
        </>
    )
}
 