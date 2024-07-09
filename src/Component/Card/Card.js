import React, { useEffect, useState } from "react";
import "./Card.css";
import Form from "../Form/Form";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { faBars, faCalendar, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
  const [isFormSet, setForm] = useState(false);
  const [flag, setflag] = useState(false);
  const [data, setData] = useState([
    {
      id: "TODO",
      title: "TODO",
      status: "todo",
      note: "Add Date to Function Done",
      tasks: [],
    },
    {
      id: "IN_PROGRESS",
      title: "IN PROGRESS",
      status: "in-progress",
      note: "Demonstrate Kanban",
      tasks: [],
    },
    {
      id: "FINISHED",
      title: "FINISHED",
      status: "finished",
      note: "Add Finished Work",
      tasks: [],
    },
  ]);
console.log(data)

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("task"));
    if (storedData) {
      setData(storedData);
      console.log("session data is here",data)
    }
  }, [flag]);


  useEffect(() => {
    sessionStorage.setItem("task", JSON.stringify(data.tasks));
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const newData = [...data];
    const sourceColIndex = newData.findIndex((e) => e.id === source.droppableId);
    const destinationColIndex = newData.findIndex((e) => e.id === destination.droppableId);

    if (sourceColIndex === -1 || destinationColIndex === -1) return;

    const sourceCol = newData[sourceColIndex];
    const destinationCol = newData[destinationColIndex];
    const sourceTasks = [...sourceCol.tasks];
    const destinationTasks = [...destinationCol.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, removed);

    newData[sourceColIndex] = { ...sourceCol, tasks: sourceTasks };
    newData[destinationColIndex] = { ...destinationCol, tasks: destinationTasks };

    setData(newData);
  };

  const addTask = (task) => {
    const newData = data.map(col => {
      if (col.status === "todo") {
        return {
          ...col,
          tasks: [...col.tasks, task],
        };
      }
      return console.log("here addTask",col);
    });
    setData(newData);
    setForm(false);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container-fluid">
          <div className="row heading">
            {data.map((col) => (
              <div key={col.id} className="col-md-4 cards-form">
                <span className="Todo">{col.status}</span>
                <span className="more">...</span>
                <div className="card">
                  <h5 className="note">{col.note}</h5>
                  <Droppable droppableId={col.id}>
                    {(provided) => (
                      <div
                        className="carddynamic"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {col.tasks.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  ...provided.draggableProps.style,
                                  opacity: snapshot.isDragging ? "0.5" : "1",
                                }}
                              >
                                <h3>
                                  <FontAwesomeIcon icon={faUser} className="username12" />
                                  ID: {item.id}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon icon={faUser} className="username12" />
                                  Username: {item.userName}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon icon={faBars} className="label" />
                                  Description: {item.description}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon icon={faCalendar} className="label2" />
                                  Date: {item.date}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon icon={faTag} className="label" />
                                  Label: {item.dropdown}
                                </h3>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  {col.status === "todo" && (
                    <button
                      className="addcart"
                      onClick={() => {
                        setForm(true);
                      }}
                    >
                      + Add Card
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DragDropContext>
      {isFormSet && <Form setForm={setForm} setflag={setflag} addTask={addTask} />}
    </>
  );
};

export default Card;
