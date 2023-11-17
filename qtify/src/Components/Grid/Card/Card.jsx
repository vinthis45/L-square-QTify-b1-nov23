import * as React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material-next/Chip';
import styles from './Card.module.css'
import Box from '@mui/system/Box';



export default function MusicCard(props) {
    return (
        <Card className={styles.mainCard} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imgLink}

                />
                <Box className={styles.chipBack}>
                    <Chip style={{ backgroundColor: 'black', color: 'white', fontFamily: 'inherit', border: '1px solid white' }} className={styles.followerChip} label={`${props.follows} Follows`} />
                </Box>



                <div className={styles.title}>
                    {props.title}
                </div>

            </CardActionArea>
        </Card>
    );
}