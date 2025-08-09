import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function Task({ id, task, doneFunc }) {
  function HandleClick() {
    doneFunc(id);
  }

  return (
    <Card sx={{ minWidth: 275, opacity: task.isDone ? 0.1 : 1 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          ID:{id}
        </Typography>
        <Typography variant="h5" component="div">
          {task.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={HandleClick}>
          おわった！
        </Button>
      </CardActions>
    </Card>
  );
}

export default Task;
