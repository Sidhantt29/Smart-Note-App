import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";

function AddNote({addNote}) {
  const inputRef = useRef();
  const handleAdd = () => {
    const text = inputRef.current.value;

    addNote(text);
    inputRef.current.value = "";
  };

  return (
    <div>
      <h3>Add Note</h3>
      <input
        type="text"
        placeholder="Enter Your Notes Here...."
        ref={inputRef}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
export default AddNote;
