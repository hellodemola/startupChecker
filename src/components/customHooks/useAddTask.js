import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateToken } from "../../utilis/helpers";
import { AddNewTask } from "../reducer/TaskSlice";

const useAddTask = ({ goals }) => {
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
  return {addNewTask, newTask, setNewTask};
};

export default useAddTask;
