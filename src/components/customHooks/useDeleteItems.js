import { useDispatch } from 'react-redux';
import { DeleteTask } from '../reducer/TaskSlice';

const useDeleteItems = ({ stageId, taskId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(DeleteTask({ stageId, taskId }));

  return { handleDelete };
};

export default useDeleteItems;