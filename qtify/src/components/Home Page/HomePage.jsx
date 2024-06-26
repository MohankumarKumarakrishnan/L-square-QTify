import React from "react";
// import sectionStyles from "../Section/section.module.css";
// import Hero from "../Hero/Hero";
import Navbar from "..//Navbar/Navbar";
// import Section from "../Section/Section";
import { useState, useEffect } from "react";
import {
  fetchTopAlbum,
  fetchNewAlbum,
  fetchSongs,
  fetchGenres,
} from "../../api/api";
// import { FAQs } from "../FAQs/FAQs";
// import Footer from "../Footer/Footer";
//import AudioBar from "../Audio Bar/AudioBar";

function HomePage() {
  let [topAlbum, setTopAlbum] = useState([]);
  let [newAlbum, setNewAlbum] = useState([]);
  let [songs, setSongs] = useState([]);
  let [genres, setGeneres] = useState([]);
  useEffect(() => {
    (async () => {
      let topAlbumData = await fetchTopAlbum();
      setTopAlbum(topAlbumData);

      let newAlbumData = await fetchNewAlbum();
      setNewAlbum(newAlbumData);

      let fetchSongsData = await fetchSongs();
      setSongs(fetchSongsData);

      let fetchSongsGenere = await fetchGenres();
      setGeneres(fetchSongsGenere.data);
    })();
  }, []);

  return (
    <>
      <Navbar data={topAlbum.concat(newAlbum)} page={"home"} />
      
    </>
  );
}

export default HomePage;