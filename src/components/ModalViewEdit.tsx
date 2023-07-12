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

interface ModalOpenEditProps{
    isOpen: boolean;
    onClose: () => void;
    nameTask: string;
}

export function ModalViewEdit({isOpen, onClose, nameTask} : ModalOpenEditProps): JSX.Element{
    const handleCloseModal = () : void =>{
        onClose();
    }
    return(
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>  
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Edite</ModalHeader>

                <ModalCloseButton/>

                <ModalBody >
                    <FormControl mt={4}>
                        <FormLabel>Edite sua task</FormLabel>
                        <Input
                            value={nameTask}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}