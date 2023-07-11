import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Checkbox, Radio } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface TaskProp{
    name: string;
    done: boolean;
    onDeleteTask: (name: string) => void;
}

export function Task({name, onDeleteTask}:TaskProp){
    const [agreement, setAgreement] = useState(false)

    function handleDeleteTask(){
        onDeleteTask(name)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setAgreement(event.target.checked)
    }

    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
            <Checkbox size='md' onChange={handleChange}/>
                <span className={agreement ? styles.marked : styles.noMarked}>{name}</span>
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