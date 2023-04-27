import Navbar from "../navbar/Navbar";
import useStyles from "./styles";
import { useState } from "react";
import Featured from "../featured/Featured";
import List from "../lists/List";


const Home = () => {
 
  const classes = useStyles();

  return (
    <div className={classes.home}>
    <Navbar />
    <Featured type='movie'/>
    <List />
    </div>
  )
}

export default Home;