import React from 'react';
import Head from './components/Head';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

const App = () => {
  return (
    <div className="w-full h-screen flex items-center flex-col gap-4 mt-4">
      <Head />
      <TaskList />
      <NewTask />
    </div>
  );
};

export default App;
