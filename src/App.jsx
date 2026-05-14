import { AppContext, AppProvider } from "./context/AppContext";
import Login from "./components/Login";
import { useContext, useState } from "react";
import Navbar from "./components/NavBar";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
function Main() {
  const { user } = useContext(AppContext);
  const [notes, setNotes] = useState([]);
  const addNote = (text) => {
    setNotes([...notes,text])
  }
  const deleteNote = (indexToDelete) => {
    const updated = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updated);
  };

  return user ? (
    <>
      <AddNote addNote={addNote}/>
      <NotesList notes = {notes} deleteNote={deleteNote}/>
    </>
  ): <Login />;
}
function App() {
  return (
    <AppProvider>
      <Navbar/>
      <Main />
    </AppProvider>
  );
}
export default App;
