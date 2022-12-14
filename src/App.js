import React, { useState } from 'react';
import './App.css';
import { Index } from './Time/Index';

export const NoteListContext = React.createContext([])

function App() {
  const [noteList, setNoteList] = useState([])
  return (
    <>
      <NoteListContext.Provider value={[
        noteList,
        setNoteList
      ]}> 
      <Index></Index>
      </NoteListContext.Provider>
    </>
  );
}

export default App;
