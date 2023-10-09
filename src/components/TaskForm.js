import { useState } from "react";
import { nanoid } from "nanoid";

export default function SongForm(props) {
  const [title, setTitle] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
    console.log(title);
  }

  function handleSubmit(e) {
    // add task to tasklist
    e.preventDefault();
    const newTask = {
      title: title,
      played: false,
      id: nanoid()
    };
    props.addSong(newTask);
  }

  return (
    <div className="edit">
      <h3>Add another task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            placeholder="Add a new task"
          />
        </label>
        <button className="add">Add</button>
      </form>
    </div>
  );
}
