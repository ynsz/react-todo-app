// import Sushi from "./sushi";
import { Button, Container, Stack, TextField } from "@mui/material";
import Header from "./header";
import Task from "./task";
import { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function HandleInput(event) {
    const inputText = event.target.value;
    setTaskName(inputText);
  }

  function HandleClick() {
    const newTask = {
      title: taskName,
      isDone: false,
    };

    const _tasks = [...tasks, newTask];

    setTasks(_tasks);
    setTaskName("");
  }

  function HandleDone(id) {
    const _tasks = [...tasks];

    _tasks[id].isDone = !tasks[id].isDone;

    setTasks(_tasks);
  }

  return (
    <div>
      <Header />
      <Container sx={{ paddingTop: 10 }}>
        <Stack sx={{ marginBottom: 3, gap: 2 }}>
          <TextField
            value={taskName}
            onChange={HandleInput}
            id="outlined-basic"
            label="TODO"
            variant="outlined"
          />
          <Button onClick={HandleClick} variant="contained">
            Create
          </Button>
        </Stack>
        <Stack sx={{ gap: 1 }}>
          {tasks.map((task, index) => {
            return (
              <Task
                id={index}
                name={task.title}
                task={task}
                doneFunc={HandleDone}
                key={index}
              />
            );
          })}
        </Stack>
      </Container>
    </div>
  );

  //   const sushis = [
  //     {
  //       name: "サーモン",
  //       price: 150,
  //     },
  //     {
  //       name: "まぐろ",
  //       price: 400,
  //     },
  //     {
  //       name: "たまご",
  //       price: 100,
  //     },
  //   ];

  //   return (
  //     <div>
  //       {sushis.map((sushi, index) => {
  //         return <Sushi name={sushi.name} price={sushi.price} key={index} />;
  //       })}
  //     </div>
  //   );
}

export default App;
