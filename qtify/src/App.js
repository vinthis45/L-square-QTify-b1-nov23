import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'
import { fetchGenres, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api'

export default function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data }
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songsData", fetchSongs);
    generateData("genresData", fetchGenres);


  }, [])
  const { topAlbums = [], newAlbums = [], songsData = [], genresData = []} = data;


  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums, songsData, genresData} }} />

      </StyledEngineProvider>
    </>
  )
}
