import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import MusicCard from './Card/Card'
import axios from 'axios';
import styles from './Grid.module.css'

export default function CardGrid(props) {
    const [data, setData] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(0);


    const getAlbums = async () => {
        let url = "https://qtify-backend-labs.crio.do/albums/top";
        try {
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
        }
        catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        if (debounceTimer !== 0) {
            clearTimeout(debounceTimer);
        }
        const newTimer = setTimeout(() => {
            getAlbums();
        }, 1000);
        setDebounceTimer(newTimer);
    }, []);

    return (


        <div >
            <div className={styles.topGrid} container  >
                {data.map((album) => {
                    return (
                        <Grid md={2} sm={3} xs={6} key={album.id}>
                            <MusicCard
                                imgLink={album.image}
                                follows={album.follows}
                                title={album.title}
                            // releaseDate={vid.releaseDate}
                            />
                        </Grid>
                    );
                })}
            </div>
        </div>
    )
}
