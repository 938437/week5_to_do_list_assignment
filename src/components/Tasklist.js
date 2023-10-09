import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function Tasklist() {
  const [songs, setSongs] = useState([]);

  function addSong(song) {
    const updatedSongs = [...songs, song];
    setSongs(updatedSongs);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;
        return song;
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
  }

  return (
    <div>
      <TaskForm addSong={addSong} />
      <ul>
        {songs.map((song) => (
          <Task
            key={song.id}
            song={song}
            remove={removeSong}
            togglePlayed={togglePlayed}
          />
        ))}
      </ul>
    </div>
  );
}
