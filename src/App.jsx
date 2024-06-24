import React from "react";
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Movies, Actors, Profile, Navbar, MovieInformation } from './components';
import useStyles from './styles'


const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actor/:id" element={<Actors />} />
        </Routes>
      </main>   
    </div>
  )
}

export default App;