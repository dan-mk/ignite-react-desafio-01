import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskListing } from './components/TaskListing';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <TaskForm />
        <TaskListing />
      </div>
    </>
  )
}
