import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateToken } from "../utilis/helpers";
import { AddIcons } from "./icons/addIcons";
import { AddNewTask } from "./reducer/TaskSlice";

const PhaseFooter = ({ goals }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const addNewTask = (e) => {
    e.preventDefault();
    if (newTask !== "") {
      dispatch(
        AddNewTask({
          stageId: goals.id,
          task: {
            id: generateToken(),
            name: newTask,
            status: false,
          },
        })
      );
      setNewTask("");
    }
  };
  return (
    <div className='phase-footer'>
      <div className='footer-wrapper'>
        <div className='add-steps'>
          <form onSubmit={addNewTask}>
            <input type='text' onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder='Add a task' />
            <button type='submit'>{AddIcons}</button>
          </form>
        </div>
        <div id='list-tasks'>
          <p>{goals.todo.filter((task) => task.status).length > 0 ? `${goals.todo.filter((task) => task.status).length} / ${goals.todo.length} tasks` : `${goals?.todo?.length} tasks`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhaseFooter;
