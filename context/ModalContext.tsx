"use client";
import React, { useState } from "react";
const ModalContext = React.createContext({
  isModalOpen: false,
  handleModal: () => {},
});
export const ModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <ModalContext.Provider value={{ isModalOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext;
