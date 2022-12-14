import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }

  function deleteTodo() {
    setShowModal(false);
    props.deleteComponent();
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={hideModal} onConfirm={deleteTodo}/>}
      {showModal && <Backdrop onClick={hideModal}/>}
    </div>
  );
}

export default Todo;
