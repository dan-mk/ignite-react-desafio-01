import { useState } from 'react';
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      content: 'AAAAAAAAAHAhushuashduashd',
      isComplete: false,
    },
    {
      id: '2',
      content: 'This is soooo big that it may not fit in the space it has, but then it needs to be even bigger than this',
      isComplete: true,
    }
  ]);

  function addNewTask(content: string) {
    setTasks((state) => {
      return [
        ...state.map((task) => ({ ...task })),
        { id: '3', content, isComplete: false }
      ]
    });
  }

  return (
    <>
      <Header />
      <div className="wrapper">
        <TaskForm onAddNewTask={addNewTask} />
        <TaskListing tasks={tasks} />
      </div>
    </>
  )
}
