import { Trash, Pencil } from "phosphor-react";

import styles from './Task.module.css';
import { Checkbox, useDisclosure } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

import { ModalViewEdit } from './ModalViewEdit'

interface TaskProp{
    nameTask: string;
    onDeleteTask: (name: string) => void;
    onUpdateTask: (oldName: string, newName: string) => void;
    onToggleTask: (name: string, isChecked: boolean) => void;
    isChecked: boolean;
}

export function Task({nameTask, onDeleteTask, onUpdateTask, isChecked, onToggleTask}:TaskProp){

    const {isOpen, onClose, onOpen} = useDisclosure()

    function handleDeleteTask(){
        onDeleteTask(nameTask)
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const newIsChecked = event.target.checked

        onToggleTask(nameTask, newIsChecked)
    }


    return(
        <div className={styles.renderTask}>
            <div className={styles.titleRadio}>
            <Checkbox size='md' isChecked={isChecked} onChange={handleChange}/>
                <span className={isChecked ? styles.marked : styles.noMarked}>{nameTask}</span>
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
                onUpdateTask={onUpdateTask}
            />
        </div>
    )
}