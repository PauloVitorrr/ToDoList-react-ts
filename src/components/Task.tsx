import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Radio } from "@chakra-ui/react";

export function Task(){
    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
                <Radio/>
                <span>Task Legal</span>
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