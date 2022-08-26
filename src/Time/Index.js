import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoteAdd from './component/NoteAdd/Add'
import NoteDetail from './component/NoteDetail/Detail'
import NoteList from './component/NoteList/List'

export function Index() {
   return (
      <>
         <BrowserRouter>
            <NoteAdd></NoteAdd>
            <NoteList></NoteList>
            <Routes>
               <Route path='/note-detail/:id'
                element={<NoteDetail></NoteDetail>}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}