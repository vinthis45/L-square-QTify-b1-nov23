import React, { useEffect, useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress, Typography } from '@mui/material';
import MusicCard from "../Card/Card"
import Carousel from '../Carousel/Carousel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Section({ title, data, genresData, cardType, sectionType }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [value, setValue] = useState('all');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  const getFilteredData = () => {
    if (value === 'all') {
      return data;
    }
    const tabLabel = genresData[value]?.label;
    if (!tabLabel) {
      console.warn('Tab label not found');
      return data;
    }

    return data.filter((ele) => ele.genre.key === tabLabel.toLowerCase());
  };



  const getSection = (sectionType) => {
    switch (sectionType) {
      case "albums": {
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
                  <div className={styles.wrapper}>
                    {data.map(ele => (
                      <MusicCard key={ele.id} data={ele} type={cardType} />
                    ))}
                  </div>
                ) : (

                  <Carousel
                    data={data}
                    renderComponent={(data) => <MusicCard data={data} type={cardType} key={data.id} />}
                  />

                )}
              </div>

            )}

          </div>
        )
      }
      case "songs": {
        const filteredData = getFilteredData();
        return (
          <>
            <div className={styles.songsHeader}>
              <h3>{title}</h3>
              <div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box >
                      <TabList onChange={handleChange} textColor='white' TabIndicatorProps={{
                        style: {
                          backgroundColor: "#34C94B"
                        }

                      }} >
                        <Tab value="all" label={<Typography style={{ fontSize: "13px", fontWeight: "bold" }} >All</Typography>} >

                        </Tab>
                        {genresData.map((ele, index) => (
                          <Tab label={<Typography style={{ fontSize: "13px", fontWeight: 'bold' }}>{ele.label}</Typography>} value={`${index}`} key={ele.key} />
                        ))}

                      </TabList>
                    </Box>
                    {filteredData !== undefined && (
                      <TabPanel key={value} value={value} index={value}>
                        {filteredData.length === 0 ? (
                          <CircularProgress />
                        ) : (
                          <Carousel
                            data={filteredData}
                            renderComponent={(data) => <MusicCard data={data} type={cardType} key={data.id} />}
                          />
                        )}
                      </TabPanel>
                    )}

                  </TabContext>
                </Box>
              </div>
            </div>

          </>
        )
      }
      default: return <></>
    }
  }
  return getSection(sectionType);
}
