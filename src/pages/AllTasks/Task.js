import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

export const Task = props => {
  const { task } = props;
  const time = task.totalTime;
  const { running } = task;

  return (
    <div className="Task">
      <div className="Task-Name">{task.name}</div>
      <div className="Timer">{time}</div>
      {running === true ? <PauseCircleIcon /> : <PlayCircleFilledWhiteIcon />}
    </div>
  );
};
