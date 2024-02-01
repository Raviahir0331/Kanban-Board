import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Board from "./Component/Board/Board";
import Card from "./Component/Card/Card";
import Form from "./Component/Form/Form";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";


function App() {
  // useEffect(() => {
  //   let tasks = [];

  //   tasks.push({
  //     id: "123",
  //     userName: "sachin",
  //     description: "search recipe",
  //     date: "24-1-2024",
  //     Dropdown: "urgent",
  //     status: "todo",
  //   },
  //   {
  //     id: "124",
  //     userName: "nilesh",
  //     description: "to do list",
  //     date: "24-1-2024",
  //     Dropdown: "fronted",
  //     status: "inProgress",
  //   },
  //   {
  //     id: "125",
  //     userName: "ravi",
  //     description: "finished",
  //     date: "24-1-2024",
  //     Dropdown: "emergency",
  //     status: "finished",
  //   }
  //   );
  //   sessionStorage.setItem("task", JSON.stringify(tasks));
  // }, []);



  useEffect(() => {
    const dummyData = [
      {
        id: uuidv4(),
        status: "todo",
        tasks: [
          {
            id: uuidv4(),
            userName: "ravi",
            description: "to do work",
            date: "24-1-2024",
            Dropdown: "emergency",
          },
        ],
      },
      {
        id: uuidv4(),
        status: "inProgress",
        tasks: [
          {
            id: uuidv4(),
            userName: "nilesh",
            description: "in progress work",
            date: "24-1-2024",
            Dropdown: "fronted",
          },
        ],
      },
      {
        id: uuidv4(),
        status: "finished",
        tasks: [
          {
            id: uuidv4(),
            userName: "sachin",
            description: "finished work",
            date: "24-1-2024",
            Dropdown: "urgent",
          },
        ],
      },
    ];
    sessionStorage.setItem("task", JSON.stringify(dummyData));
  }, []);

  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Card />
      </div>
    </DndProvider>
  );
}

export default App;
