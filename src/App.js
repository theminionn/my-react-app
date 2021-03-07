import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5 2:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6 1:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Walk the Dog',
      day: 'Feb 6 5:30',
      reminder: true,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (

    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to Show.'}
    </div>
  );
}

export default App;
