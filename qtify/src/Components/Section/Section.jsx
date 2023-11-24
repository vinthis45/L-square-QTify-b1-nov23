import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
// import CardGrid from '../Grid/Grid';
import MusicCard from "../Card/Card"
import Carousel from '../Carousel/Carousel';


export default function Section({ title, data, type }) {

  const [carouselToggle, setCarouselToggle] = useState(true);


  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);

  }

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper} >
          {!carouselToggle ? (
            <div className={styles.wrapper} >
              {data.map(ele => (
                <MusicCard data={ele} type={type} />
              ))}
            </div>
          ) : (
            
              <Carousel
                data={data}
                renderComponent={(data) => <MusicCard data={data} type={type} />}
              />
            
          )}
        </div>

      )}

    </div>
  )
}
