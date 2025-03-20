import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const submitNote = (event) => {
    onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
