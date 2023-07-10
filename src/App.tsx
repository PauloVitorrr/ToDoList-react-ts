import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Task } from './components/Task'
import { Item } from './types/Item'

import './global.css'
import styles from './App.module.css'

import { Input } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'


export function  App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false},
    { id: 2, name: 'Fazer atividade', done: false}
  ])

  const [inputText, setInputText] = useState('')

    function handleAddTask (event: FormEvent){
    event.preventDefault();

    const newList = [...list];
    newList.push({
      id: list.length +1,
      name: inputText,
      done: false,
    });

    setList(newList);
    setInputText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')

    setInputText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeleteOne = list.filter(task => {
      return task.name !== taskToDelete
    })
    setList(tasksWithoutDeleteOne)
  }

  return (
    <div  className={styles.container}>
      <div className={styles.box}>

        <form onSubmit={handleAddTask} className={styles.containerInputAdd}>
          <Input 
            placeholder='Digite sua task'
            value={inputText}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <button type="submit" className={styles.buttonAddTask}>
            <Plus size={20}/>
          </button>
        </form>

        <div>
          {list.map(listt =>{
            return(
              <Task
                key={listt.id}
                name={listt.name}
                done={listt.done}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
