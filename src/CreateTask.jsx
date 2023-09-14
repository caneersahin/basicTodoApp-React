import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });
  function detectChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function savedTask(event) {
    if (task.title == "" || task.content == "") {
      alert("Boş bir task ekleyemezsiniz");
      return;
    }

    props.onAdd(task);
    var savedData = JSON.parse(localStorage.getItem("myTask"));
    savedData.push(task);
    localStorage.setItem("myTask", JSON.stringify(savedData));
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          onChange={detectChange}
          className="form-control todoText mb-3"
          name="title"
          value={task.title}
          placeholder="Başlık"
        />

        <textarea
          name="content"
          value={task.content}
          onChange={detectChange}
          className="form-control todoText mb-3"
          rows={3}
          placeholder="İşinizi Yazınız"
        ></textarea>

        <button
          className="btn btn-primary todoButton w-100"
          type="button"
          onClick={savedTask}
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
