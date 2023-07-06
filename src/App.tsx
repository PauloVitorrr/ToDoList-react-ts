import { useState } from 'react'

import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'

import { Input } from '@chakra-ui/react'
import { Item } from './types/Item'


export function  App() {
  const [list, useList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false}
  ])
  return (
    <div  className={styles.container}>
      <div className={styles.box}>
        <form>
          <Input 
            placeholder='Digite sua task'
          />
        </form>
        <div>
          <Task/>
        </div>
      </div>
    </div>
  )
}
