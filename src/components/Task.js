import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <i
          className='fa-solid fa-xmark'
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        ></i>
      </h3>
      <p>{task.day}</p>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
