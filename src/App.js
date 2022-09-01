import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctor\'s appointment',
        day: 'Feb 5th at 2:30 PM',
        reminder: true,
    },
    {
        id:2,
        text: 'Dentist\'s appointment',
        day: 'Feb 5th at 5:30 PM',
        reminder: true,
    },
    {
        id:3,
        text: 'Come home',
        day: 'Feb 5th at 7:30 PM',
        reminder: false,
    },
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task=>task.id !==id)))
}

//Toggle reminder
const toggleReminder = (id)=>{
      setTasks(tasks.map((task)=>task.id===id ? 
      {...task,reminder: !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask  onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
