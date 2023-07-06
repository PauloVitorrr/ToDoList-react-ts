import { Task } from './components/Task'


import './global.css'
import styles from './App.module.css'

import { Input } from '@chakra-ui/react'


export function  App() {

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
