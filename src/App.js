import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ToDoList from './components/toDoList/ToDoList'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ToDoList />
			</header>
		</div>
	)
}

export default App
