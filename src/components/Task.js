import taskIcon from "../icons/to-do-list.png";
import deleteIcon from "../icons/delete.png";

export default function Task(props) {
  const task = props.song;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.togglePlayed(task);
  }

  return (
    <li className="song">
      <div className="song-details">
        <div>
          <img className="icon" src={taskIcon} alt="" />
        </div>
        <p>
          <span>
            {task.played === true ? <del>{task.title}</del> : task.title}
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.played}
            />
          </span>
          <span>{task.artist}</span>
        </p>
      </div>
      <div onClick={handleDelete}>
        <img className="icon" src={deleteIcon} alt="delete icon" />
      </div>
    </li>
  );
}
