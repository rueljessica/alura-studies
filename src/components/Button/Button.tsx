import style from './Button.module.scss'

export function Button() {
  return (
    <button type="submit" className={style.botao}>
      Add to list
    </button>
  )
}
