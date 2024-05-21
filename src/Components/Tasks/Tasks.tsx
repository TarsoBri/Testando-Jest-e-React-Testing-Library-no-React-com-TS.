import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<null | string>(null);

  const handleClick = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => {
        setError(null);
        setTasks(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>Tasks from API</h1>
      <Button disabled={false} onClick={handleClick}>
        Get Tasks from API
      </Button>

      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.id}>
            <h2 style={{ color: task.completed ? "green" : "red" }}>
              {task.title}
            </h2>
          </div>
        ))}

      {error && <p>ERRO: {error}</p>}
    </div>
  );
};

export default Tasks;
