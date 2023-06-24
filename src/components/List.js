import React, { useState } from "react";
import Notes from "./Notes";
import Confirm from "./confirm/Confirm";
export default function Diary(props) {
  const [note, setNote] = useState("");
  const [todos, setTodos] = useState([]);
  const [disable , setDisable] = useState(false)
 
  // creating a function to add notes in a todo list
  const addNotes = () => {
    if (note === "") {
      props.showAlert("warning", "Can not add an empty list item");
    } else {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          {
            id: crypto.randomUUID(),
            title: note,
          },
        ];
      });

      if (todos.length === 0) {
        props.showAlert(
          "success",
          "You added your first list item successfully"
        );
      } else if (todos.length === 1) {
        props.showAlert(
          "success",
          "You added another list item successfully , continue to add more items"
        );
      }
    }
    setNote("");
  };

  // creating a function to deletenotes in a todo list
  const deleteNote = (id) => {
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo => todo.id!==id)
    })
  };

  // creating a function to clear all notes at once
  const clearNotes = () => {
    document.getElementById("confirmBox").style.display = "flex"
    setDisable(true)
  };

  const confirmCancel = () =>{
    document.getElementById("confirmBox").style.display = "none"
    setDisable(false)
  }

  const confirmDelete = () =>{
    setTodos([])
    props.showAlert("success","Deleted the whole list successfully")
    document.getElementById("confirmBox").style.display = "none"
    setDisable(false)
  }

  return (
    <>
      <div id="list" className="my-4">
        <h3 className="text-danger text-center my-4 fs-1">Todo-List</h3>

        <div className="input-group my-2" style={{ width: "98.5%" }}>
          <input
            id="note"
            type="text"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            style={{boxShadow:"-4px 4px 4px #C4DFDF"}}
            className="form-control mx-4 border-primary"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder={todos.length === 0 ? "Create the list" : "Add item"}
          />
          <button
            type="button"
            className="btn btn-success mx-2" style={{boxShadow:"-3px 3px 8px #A0C49D"}}
            onClick={addNotes}
            disabled={disable}
          >
            <i className="fa-sharp fa-solid fa-plus"></i>
          </button>
        </div>
        <Confirm confirmCancel={confirmCancel} confirmDelete={confirmDelete} />
          {todos.map((todo) => {
            return (
              <div
          className="container-xxl border border-light mx-auto mb-4"
          id="container"
          key={todo.id}
          style={{
            maxWidth: "1850px",
            width: "96%",
            minWidth: "200px",
            marginTop: "2rem",
            backgroundColor: "#30A2FF",
            boxShadow:"-4px 4px 8px #213555",
            display: todos.length === 0 ? "none" : "block",
          }}
        >
              <div
                className="d-flex justify-content-between flex-wrap align-items-center"
              >
                <Notes note={note} title={todo.title} />
                <button
                  onClick={()=>deleteNote(todo.id)}
                  type="button"
                  className="btn btn-danger my-2 "
                  style={{ minHeight: "30px", maxHeight: "40px" , boxShadow:"2px 3px 8px black"}}
                  disabled={disable}
                >
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
              </div>
              </div>
            );
          })}
        <button
          type="button"
          className="btn btn-danger "
          onClick={clearNotes}
          disabled={disable}
          style={{
            display: todos.length <= 1 ? "none" : "block",
            marginLeft: "2%",
            boxShadow:"2px 3px 8px black"
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
}
