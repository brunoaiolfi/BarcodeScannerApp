import React, { ReactNode } from "react";
import { Modal } from "react-native";
import { InfoModalDataContainer, InfoModalBackground, InfoModalContainer, InfoModalHeader, InfoModalEventData, InfoModalCloseButton, InfoModalCloseIcon } from "./styles";

interface ModalProps {
    children: ReactNode;
    modalVisible: boolean;
    title: string;
    handleClose: () => void;
}

export function ModalComponent({
    modalVisible,
    handleClose,
    title,
    children
}: ModalProps) {

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <InfoModalBackground >
                <InfoModalContainer>

                    {/* Header */}
                    <InfoModalHeader >
                        <InfoModalEventData>{title}</InfoModalEventData>
                        <InfoModalCloseButton onPress={handleClose}>
                            <InfoModalCloseIcon name="closecircleo" size={22}></InfoModalCloseIcon>
                        </InfoModalCloseButton>
                    </InfoModalHeader>

                    {/* Body */}
                    <InfoModalDataContainer>
                        {children}
                    </InfoModalDataContainer>
                </InfoModalContainer>
            </InfoModalBackground>
        </Modal>
    )
}