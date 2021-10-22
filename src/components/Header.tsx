import { css } from "emotion";
import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Button } from "./shared/Button";
import Modal from "react-modal";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import useOnClickOutside from "../hooks/useOnClickOutside";
import styles from "../styles/Header.module.scss";
import { useBudgetContext } from "./provider/BudgetContextProvider";

enum ModalType {
  SignIn = "SignIn",
  SignUp = "SignUp",
}

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    margin: "0",
  },
};

interface NotAuthenticatedProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const NotAuthenticated: React.FC<NotAuthenticatedProps> = ({ onSignIn, onSignUp }) => {
  return (
    <div className="flex space-x-4">
      <Button onClick={onSignUp}>Sign up</Button>
      <Button onClick={onSignIn}>Sign in</Button>
    </div>
  );
};

const Authenticated: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Button onClick={() => {}}>Save</Button>
      <Button onClick={() => {}}>Sign out</Button>
    </div>
  );
};

export const Header: React.FC = () => {
  const { isAuthenticated } = useBudgetContext();
  const [modal, setModal] = useState({ type: ModalType.SignIn, isOpen: false });
  const modalRef = useRef(null);

  const closeModal = useCallback(() => {
    setModal((prev) => {
      const state = { ...prev };
      state.isOpen = false;
      return state;
    });
  }, []);

  useOnClickOutside(modalRef, closeModal);

  const openSignIn = useCallback(() => {
    setModal({ type: ModalType.SignIn, isOpen: true });
  }, []);

  const openSignUp = useCallback(() => {
    setModal({ type: ModalType.SignUp, isOpen: true });
  }, []);

  return (
    <header className="mb-4 lg:mb-8 flex items-center justify-between">
      <h1>
        <Link to={ROUTES.HOME}>
          <h1 className={styles.logo}>Budget Couple</h1>
        </Link>
      </h1>
      {isAuthenticated ? (
        <Authenticated />
      ) : (
        <NotAuthenticated onSignIn={openSignIn} onSignUp={openSignUp} />
      )}
      <Modal
        isOpen={modal.isOpen}
        style={customStyles}
        contentLabel={modal.type}
        ariaHideApp={false}
        overlayClassName={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          backdrop-filter: blur(5px);
        `}
      >
        {modal.type === ModalType.SignIn ? (
          <SignIn ref={modalRef} closeModal={closeModal} />
        ) : (
          <SignUp ref={modalRef} closeModal={closeModal} />
        )}
      </Modal>
    </header>
  );
};
