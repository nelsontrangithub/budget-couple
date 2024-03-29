import { css, cx } from "emotion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Button } from "./shared/Button";
import Modal from "react-modal";
import styles from "../styles/Header.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface NotAuthenticatedProps {
  onSignIn: () => void;
}

const NotAuthenticated: React.FC<NotAuthenticatedProps> = ({ onSignIn }) => {
  return (
    <div>
      <Button onClick={onSignIn}>Sign in</Button>
    </div>
  );
};

const Authenticated: React.FC = () => {
  return null;
};

export const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className="mb-4 lg:mb-8 flex items-center justify-between">
      <h1>
        <Link to={ROUTES.HOME}>
          <h1 className={styles.logo}>Budget Couple</h1>
        </Link>
      </h1>
      <NotAuthenticated onSignIn={() => setModalIsOpen(true)} />
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Sign In">
        <div>I am a modal</div>
      </Modal>
    </header>
  );
};
