import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
  const onButtonClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className={openModal ? 'CreateTodoButton OverModal' : 'CreateTodoButton' } onClick={() => onButtonClick()}>
      +
    </button>
  );
}

export { CreateTodoButton };
