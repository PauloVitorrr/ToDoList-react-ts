import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
  } from '@chakra-ui/react';

import { ChangeEvent, FormEvent, useState } from "react";

interface ModalOpenEditProps{
    isOpen: boolean;
    nameTask: string;
    onClose: () => void;
    onUpdateTask: (oldName: string, newName: string) => void;
}

export function ModalViewEdit({isOpen, onClose, nameTask, onUpdateTask} : ModalOpenEditProps): JSX.Element{
    const handleCloseModal = () : void =>{
        onClose();
    }

    const [newTaskName, setNewTaskName] = useState(nameTask)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskName(event.target.value);
      }
    
    function handleUpdateTask() {
        onUpdateTask(nameTask, newTaskName);
        onClose(); 
      }    

    return(
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>  
            <ModalOverlay/>
            <ModalContent mx={15}>
                <ModalHeader>Edite</ModalHeader>

                <ModalCloseButton/>

                <ModalBody >
                    <FormControl mt={4}>
                        <FormLabel>Edite sua task</FormLabel>
                        <Input
                            name='radio'
                            onChange={handleChange}
                            value={newTaskName}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" colorScheme='blue' mr={3} onClick={handleUpdateTask}>
                        Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}