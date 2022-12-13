import './ToDoList.css'
import { Container, Card, Button, InputGroup, FormControl, Alert } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function ToDoList() {
	const [note, setNote] = useState('')
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('todolist')) || [])

	function add() {
		if (note.trim().length === 0) {
			return null
		}
		let tmp = [...notes]
		tmp.push(note)
		setNotes(tmp)
		setNote('')
	}

	function deleteNote(i) {
		let tmp = [...notes]
		tmp.splice(i, 1)
		setNotes(tmp)
	}

	useEffect(() => {
		localStorage.setItem('todolist', JSON.stringify(notes))
	}, [notes])

	return (
		<Container id="todoList">
			<Card>
				<Card.Body>
					<form onSubmit={e => add()}>
						<InputGroup>
							<FormControl
								type="text"
								placeholder="Note"
								value={note}
								onChange={e => setNote(e.target.value)}
								required
							></FormControl>
							<Button variant="secondary" onClick={add}>
								Add
							</Button>
						</InputGroup>
					</form>

					{notes.length > 0 && (
						<div>
							{notes.map((element, index) => {
								return (
									<Alert key={index} variant="primary" className="todo">
										<span>{element}</span>
										<span>
											<Button className="todoList-delete-button" variant="primary" onClick={() => deleteNote(index)}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-trash"
													viewBox="0 0 16 16"
												>
													<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
													<path
														fillRule="evenodd"
														d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
													/>
												</svg>
											</Button>
										</span>
									</Alert>
								)
							})}
						</div>
					)}
				</Card.Body>
			</Card>
		</Container>
	)
}
