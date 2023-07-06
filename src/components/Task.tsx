import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Radio } from "@chakra-ui/react";

interface TaskProp{
    name: string;
    done: boolean;
}

export function Task({name, done}:TaskProp){
    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
                <Radio/>
                <span>{name}</span>
            </div>
            <div className={styles.Icons}>
                <button>
                    <Trash size={18}/>
                </button>
                <button>
                    <Pencil size={18}/>
                </button>
            </div>
        </div>
    )
}