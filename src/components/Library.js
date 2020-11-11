import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  isDark,
}) => {
  return (
    <div
      className={`library ${
        libraryStatus && isDark
          ? "active-library library-dark-mode"
          : libraryStatus
          ? "active-library"
          : ""
      }`}
    >
      <h1>Library</h1>
      <div
        className={`library-songs ${isDark ? "library-songs-dark-mode" : ""}`}
      >
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            audioRef={audioRef}
            key={song.id}
            isPlaying={isPlaying}
            setSongs={setSongs}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
