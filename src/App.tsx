import './global.css'
import styles from './App.module.css'

import { Input } from '@chakra-ui/react'

function App() {

  return (
    <div  className={styles.container}>
      <div className={styles.box}>
        <Input/>
      </div>
    </div>
  )
}

export default App
