import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Radio } from "@chakra-ui/react";

interface TaskProp{
    name: string;
    done: boolean;
    onDeleteTask: (name: string) => void;
}

export function Task({name, onDeleteTask}:TaskProp){

    function handleDeleteTask(){
        onDeleteTask(name)
    }

    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
                <Radio/>
                <span>{name}</span>
            </div>
            <div className={styles.Icons}>
                <button onClick={handleDeleteTask}>
                    <Trash size={18}/>
                </button>
                <button>
                    <Pencil size={18}/>
                </button>
            </div>
        </div>
    )
}