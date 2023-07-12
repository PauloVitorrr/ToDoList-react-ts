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
    onClose: () => void;
    nameTask: string;
}

export function ModalViewEdit({isOpen, onClose, nameTask} : ModalOpenEditProps): JSX.Element{
    const handleCloseModal = () : void =>{
        onClose();
    }

    const [nameTaskEdit, setNameTaskEdit] = useState(nameTask)

    function handleAddTaskEdit(event: ChangeEvent<HTMLInputElement>){
        setNameTaskEdit(event.target.value)
    }
    
    function handleSubmitTask(event: FormEvent){
        event.preventDefault()
        
    }

    return(
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>  
            <ModalOverlay/>
            <ModalContent mx={15}>
                <ModalHeader>Edite</ModalHeader>

                <ModalCloseButton/>

                <ModalBody >
                    <FormControl onSubmit={handleSubmitTask} mt={4}>
                        <FormLabel>Edite sua task</FormLabel>
                        <Input
                            name='radio'
                            onChange={handleAddTaskEdit}
                            value={nameTaskEdit}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" colorScheme='blue' mr={3}>
                        Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}