import PropTypes from 'prop-types'

export function Task ({ task, completeTask, deleteTask }) {
  const mainClass = 'task ' + (task.completed ? 'task-completed' : '')
  return (
    <div className={mainClass}>
      <main>
        <h3>{task.content}</h3>
      </main>
      <aside>
        {!task.completed
          ? (
            <button onClick={() => completeTask(task.content)} className='task-button'>✅</button>
            )
          : (
            <>
              <button onClick={() => completeTask(task.content)} className='task-button'>❌</button>
              <button onClick={() => deleteTask(task.content)} className='task-button'>🗑️</button>
            </>
            )}
      </aside>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
