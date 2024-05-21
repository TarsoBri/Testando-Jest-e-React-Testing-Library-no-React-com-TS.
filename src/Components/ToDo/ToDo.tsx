import { ChangeEvent, MouseEventHandler, useState } from "react";

//icons
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// Interface
interface Task {
  id: string;
  title: string;
}

const ToDo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [inputText, setInputText] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddNewTask = () => {
    if (inputText.length <= 3) {
      return alert("Preencha mais de 3 caractêres para criar uma tarefa!");
    }

    setTasks((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: inputText,
      },
    ]);
    setInputText("");
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div>
      <h1>ToDo testado pelo Jest</h1>

      <div>
        <div>
          <div
            style={{
              backgroundColor: "#b1b1b1",
              padding: "1em",
              marginBlock: "1em",
            }}
          >
            <input
              type="text"
              placeholder="Digite sua tarefa"
              value={inputText}
              onChange={handleChangeInput}
              style={{ padding: ".5em", fontSize: "1.2em" }}
            />
            <button
              aria-label="Adicionar tarefa"
              onClick={handleAddNewTask}
              style={{ marginLeft: "1em" }}
            >
              <IoMdAdd />
            </button>
          </div>
          {tasks && tasks.length > 0 && (
            <div
              style={{
                backgroundColor: "#787878",
                padding: "1em",
              }}
            >
              {tasks.map((task) => (
                <div
                  key={task.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginBottom: "1em",
                    gap: "1em",
                    borderBottom: "1px solid black",
                  }}
                >
                  <p style={{ fontSize: "1.2em" }}>{task.title}</p>
                  <button
                    style={{
                      padding: "1em",
                      fontSize: "1em",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "red",
                    }}
                    aria-label={`Deletar tarefa: ${task.title}`}
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
