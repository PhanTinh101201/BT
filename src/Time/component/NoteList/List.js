import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteListContext } from '../../../App'
import useNoteApp from '../../useNoteApp'
import './style.css'

export default function NoteList() {
	const [handleAddNote, handleDeleteNote] = useNoteApp()
	const [noteList, setNoteList] = useContext(NoteListContext)

	const navigate = useNavigate()
	const handleTaskDetail = (item) => {
		navigate(`/note-detail/${item.id}`, { state: { ...item } })
	}
	return (
		<div className='div'>
			{noteList.map((item, index) => <div
				key={index}>
				<h2>{item.title}</h2>
				<span className='span' onClick={() => handleDeleteNote(item.id)}>(Xoá)</span>
			</div>)
			}

		</div>
	)
}