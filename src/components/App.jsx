import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const App = () => {
  const [notesArray, setNotesArray] = useState([]);
  const addNote = (note) => {
    setNotesArray((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotesArray((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
