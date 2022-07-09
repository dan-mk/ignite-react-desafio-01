import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskListing } from './components/TaskListing';
import './global.css';

export type Task = {
  id: string;
  content: string;
  isComplete: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(content: string) {
    setTasks((state) => {
      return [
        ...state.map((task) => ({ ...task })),
        { id: uuidv4(), content, isComplete: false }
      ]
    });
  }

  function toggleTaskStatus(targetTask: Task) {
    setTasks((state) => {
      return state.map((task) => {
        const newIsCompleteValue = (
          (task.id === targetTask.id) ? !task.isComplete : task.isComplete
        );

        return {
          ...task,
          isComplete: newIsCompleteValue,
        }
      });
    })
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <TaskForm onAddNewTask={addNewTask} />
        <TaskListing tasks={tasks} onToggleTaskStatus={toggleTaskStatus} />
      </div>
    </>
  )
}
