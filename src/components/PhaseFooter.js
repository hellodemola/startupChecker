import { numTasks } from "../utilis/helpers";
import useAddTask from "./customHooks/useAddTask";
import { AddIcons } from "./icons/addIcons";

const PhaseFooter = ({ goals }) => {
  const { addNewTask, newTask, setNewTask } = useAddTask({ goals });
  return (
    <div className='phase-footer'>
      <div className='footer-wrapper'>
        <div className='add-steps'>
          <form onSubmit={addNewTask}>
            <input
              type='text'
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              placeholder='Add a task' 
              required
            />
            <button type='submit'>{AddIcons}</button>
          </form>
        </div>
        <div id='list-tasks'>
          <p>{numTasks(goals)}</p>
        </div>
      </div>
    </div>
  );
};

export default PhaseFooter;
