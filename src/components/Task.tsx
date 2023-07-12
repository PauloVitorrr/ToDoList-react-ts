import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Checkbox, useDisclosure } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

import { ModalViewEdit } from './ModalViewEdit'

interface TaskProp{
    nameTask: string;
    onDeleteTask: (name: string) => void;
}

export function Task({nameTask, onDeleteTask}:TaskProp){
    const [agreement, setAgreement] = useState(false)

    const {isOpen, onClose, onOpen} = useDisclosure()

    function handleDeleteTask(){
        onDeleteTask(nameTask)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setAgreement(event.target.checked)
    }

    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
            <Checkbox size='md'  onChange={handleChange}/>
                <span className={agreement ? styles.marked : styles.noMarked}>{nameTask}</span>
            </div>
            <div className={styles.Icons}>
                <button onClick={handleDeleteTask}>
                    <Trash size={18}/>
                </button>
                <button onClick={onOpen}>
                    <Pencil size={18}/>
                </button>
            </div>
            <ModalViewEdit
                isOpen={isOpen}
                onClose={onClose}
                nameTask={nameTask}
            />
        </div>
            
    )
}