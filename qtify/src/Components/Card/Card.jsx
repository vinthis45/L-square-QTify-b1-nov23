import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea, Tooltip } from '@mui/material';
import Chip from '@mui/material-next/Chip';
import styles from './Card.module.css'
import Box from '@mui/system/Box';



export default function MusicCard({ data, type }) {

    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, follows, title, slug, songs } = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                        <a href={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading='lazy' />
                                    <div className={styles.banner}>
                                        <Chip label={`${follows} Follows`} size='small' className={styles.pill} />
                                    </div>
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </a>
                    </Tooltip>
                );
            }
            case "song": {
                const { image, likes, title } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song" loading='lazy' />
                            <div className={styles.banner}>
                                <div className={styles.pills}>
                                    <Chip label={`${likes} Likes`} size='small' className={styles.pill} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                );
            }
            default: return <></>

        }
    };
    return getCard(type);

}