import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import Homework1 from './components/Homework1';
import Homework2 from './components/Homework2';
import Albums from './components/Albums';

function App() {
  return (
    <main className='app'>
      <nav className='task-nav' aria-label='Навігація між завданнями'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'task-link active' : 'task-link'
          }
          to='/task1'
        >
          Task 1
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'task-link active' : 'task-link'
          }
          to='/task2'
        >
          Task 2
        </NavLink>
      </nav>
      <section className='page-content'>
        <Routes>
          <Route path='/task1' element={<Homework1 />} />
          <Route path='/task2' element={<Homework2 />} />
          <Route path='/users/:id' element={<Albums />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
