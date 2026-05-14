function NotesList({ notes, deleteNote }) {
  return (
    <div>
      <h3>Your Notes</h3>
      <ul>
        {notes.map((note, index) => {
          return (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        );
        })}
      </ul>
    </div>
  );
}

export default NotesList;
