import PropTypes from 'prop-types'

export function TaskForm ({ submitFunc, controlFunc, taskFormState }) {
  return (
    <form className='task-form' onSubmit={(e) => submitFunc(e)}>
      <label htmlFor='task-content'>Content</label>
      <input type='text' id='task-content' onChange={(e) => controlFunc(e.target.value)} value={taskFormState} />
      <button type='submit'>Create Task</button>
    </form>
  )
}

TaskForm.propTypes = {
  submitFunc: PropTypes.func,
  controlFunc: PropTypes.func,
  taskFormState: PropTypes.string
}
