import React, { useState } from 'react'
import useNoteApp from '../../useNoteApp'
import './style.css';

export default function NoteAdd() {
	const [handleAddNote] = useNoteApp()
	const [noteTitle, setNoteTitle] = useState('')
	const [noteDetails, setNoteDetails] = useState('')
	const addNote = (e) => {
		if(noteTitle == '' || noteDetails ==''){
			alert('nhap');
			return false;
		}
		e.preventDefault()
		handleAddNote(noteTitle, noteDetails)
		setNoteTitle('')
		setNoteDetails('')
	}

	return (
		<>
			<div className='container'>
				<h3 style={{
					fontSize:'20px'
				}}>Nhắc Nhỡ Quan Trọng Trong Ngày Của Bạn</h3>
				<div>
					<input className='inputadd' type="text"
						onChange={(e) => setNoteTitle(e.target.value)}
						placeholder='Note Title' value={noteTitle} />
						<br/>
					<input  className='inputadd2' type="text"
						onChange={(e) => setNoteDetails(e.target.value)}
						placeholder='Date' value={noteDetails} />
				</div>
				<button className='btn' type='button' 
				onClick={addNote}>Lưu Ngày</button>
			</div>
		</>
	)
}