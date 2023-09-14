import React from "react";

function Task(props) {
  const deleteClick = () => {
    props.delete(props.id);
  };

  return (
    <>
      <div className="todoDiv col-3">
        <input
          id={props.id}
          type="text"
          className="form-control todoText mb-3"
          name="title"
          value={props.title}
          placeholder="Başlık"
          disabled
        />
        <input
          id={props.id}
          type="text"
          className="form-control todoText mb-3"
          name="title"
          value={props.content}
          placeholder="Başlık"
          disabled
        />
        <button onClick={deleteClick} className="btn btn-danger rounted w-100">
          {" "}
          Sil{" "}
        </button>
      </div>
    </>
  );
}

export default Task;
