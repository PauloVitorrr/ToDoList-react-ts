import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react'

import { Task } from './components/Task'
import { Item } from './types/Item'

import './global.css'
import styles from './App.module.css'

import { Input } from '@chakra-ui/react'
import { Plus } from 'phosphor-react'


export function  App() {
  const [list, setList] = useState<Item[]>(() =>{
    
    const storedList = localStorage.getItem('taskList')
    return storedList ? JSON.parse(storedList) : []
  })

  console.log(list)

  const [inputText, setInputText] = useState('')

    function handleAddTask (event: FormEvent){
    event.preventDefault();

    const newList = [...list];
    newList.push({
      id: list.length +1,
      name: inputText,
      isChecked: false,
    });

    setList(newList);
    setInputText('');
  }

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(list))
  },[list])
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
    localStorage.setItem('taskList', JSON.stringify(tasksWithoutDeleteOne))
  }

  function handleUpdateTask(oldName: string, newName: string) {
    const updatedList = list.map((task) =>
      task.name === oldName ? { ...task, name: newName} : task
    );
    setList(updatedList);
    localStorage.setItem('taskList', JSON.stringify(updatedList))
  }

  function handleToggleTask(name: string, isChecked: boolean) {
    const updatedList = list.map((task) =>
      task.name === name ? { ...task, isChecked } : task
    );
    setList(updatedList);
    localStorage.setItem('taskList', JSON.stringify(updatedList)); // Atualizar o localStorage
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
                nameTask={listt.name}
                isChecked={listt.isChecked}
                onDeleteTask={deleteTask}
                onUpdateTask= {handleUpdateTask}
                onToggleTask={handleToggleTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
