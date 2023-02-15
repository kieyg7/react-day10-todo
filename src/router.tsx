import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import ToDoList from "./components/TodoList";

// const BASE_URL = '';
const router = createBrowserRouter([
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '',
        element: <ToDoList/>
      }
    ],
  },
]);

export default router;