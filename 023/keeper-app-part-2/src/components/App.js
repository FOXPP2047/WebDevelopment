import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function createNote(noteData) {
  return (
    <Note key={noteData.id} title={noteData.title} content={noteData.content} />
  );
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
