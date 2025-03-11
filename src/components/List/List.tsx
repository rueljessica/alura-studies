import style from './List.module.scss'

export function List() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '02:00:00',
    },
    {
      tarefa: 'JavaScript',
      tempo: '01:00:00',
    },
    {
      tarefa: 'TypeScript',
      tempo: '03:00:00',
    },
  ]

  return (
    <aside className={style.listaTarefas}>
      <h2>Today's Study Plan</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className={style.item}>
            <div>
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
