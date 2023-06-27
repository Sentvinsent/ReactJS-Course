import React, { useEffect, useState } from 'react';
import useFetch from './hooks/use-fetch';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest } = useFetch();

  useEffect(() => {
    const transformTasks = tasksObj => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
      }
      setTasks(loadedTasks)
    }

    sendRequest({ url: 'https://react-course-proj-e9722-default-rtdb.firebaseio.com/tasks.json' }, transformTasks);
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
