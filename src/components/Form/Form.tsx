import { Button } from '../Button/Button'
import style from './Form.module.scss'

function Form() {
  return (
    <form className={style.novaTarefa}>
      <h2>Add new study task</h2>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Subject</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Duration</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  )
}

export default Form
