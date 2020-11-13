import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
  isDark,
}) => {
  const songSelectHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === id);
    // setCurrentSong(selectedSong[0]);
    setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if song is playing
    playAudio(isPlaying, audioRef);
    // audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${
        song.active
          ? "library-song-dark-mode selected-dark-mode"
          : song.active && isDark
          ? "selected"
          : ""
      }`}
    >
      {/* // {`library-song ${song.active ? "selected" : ""}`}> */}
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
