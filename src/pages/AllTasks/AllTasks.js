import { allTasks } from '../../services/allTasks';
import { Task } from './Task';

export const AllTasks = () => {
  return (
    <>
      <div className="Header-AllTasks">Header-AllTasks</div>
      <Task task={allTasks[0]} />
      <Task task={allTasks[1]} />
      <Task task={allTasks[2]} />
    </>
  );
};
