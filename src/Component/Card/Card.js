import React, { useEffect, useState } from "react";
import "./Card.css";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "./mockData";
import {
  faBars,
  faCalendar,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

const Card = () => {
  const [isFormSet, setForm] = useState(false);
  const [flag, setflag] = useState(false);
  const [data, setData] = useState([mockData]);

  useEffect(() => {
    let storedata = JSON.parse(sessionStorage.getItem("task"));
    if (storedata === null) storedata = [];
    setData(storedata);
  }, [flag]);

  // const [, drag] = useDrag(() => ({
  //   type: "task",
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  // const [isDragging, drag] = useDrag(() => ({
  //   type: "task",
  //   item: {id:data.id },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  // const [isOver, drop] = useDrop(() => ({
  //   accept: "task",
  //   drop: (iteam) => additemtoCard(iteam),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));

  // const additemtoCard = (iteam) => {
  //   console.log("dropped" + iteam.id);
  // };

  const onDragEnd = (result) => {
    console.log("dropped" + JSON.stringify(result));
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);
      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;
    }

    let storedata = JSON.parse(sessionStorage.getItem("task"));
   
   // console.log(storedata);
    sessionStorage.setItem("task", JSON.stringify(storedata));
    setflag(true);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container-fluid">
        <div className="row heading">
          <div className="col-md-4 cards-form">
            <span className="Todo">TODO LIST</span>
            <span className="more">...</span>

            <div className="card">
              <h5 className="note">Add Date to Function Done</h5>

              {data.map((iteam, index) => {
                
                <Droppable key={iteam.id} droppableId={iteam.id}>
                  {(provided) => (
                    <div
                      className="carddynamic"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      //onDragEnd={onDragEnd}
                    >
                      <Draggable
                        key={iteam.id}
                        draggableId={iteam.id}
                        index={index}
                      >
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
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              id : {iteam.id}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              Username : {iteam.userName}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faBars}
                                className="label"
                              />
                              Description : {iteam.description}
                            </h3>
                            <h3>
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="label2"
                              />
                              Date : {iteam.date}
                            </h3>
                            <h3>
                              <FontAwesomeIcon icon={faTag} className="label" />
                              Label : {iteam.Dropdown}
                            </h3>
                          </div>
                        )}
                      </Draggable>

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              })}

              <button
                className="addcart"
                onClick={() => {
                  setForm(true);
                }}
              >
                + Add Card
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <span className="Todo">IN PROGRESS </span>
            <span className="more">...</span>
            <div className="card">
              <h5 className="demonstarte">Demonstarte Kanban</h5>

              {data.map((iteam, index) => {
                <Droppable key={iteam.id} droppableId={iteam.id}>
                  {(provided) => (
                    <div
                      className="carddynamic"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      //onDragEnd={onDragEnd}
                    >
                      <Draggable
                        key={iteam.id}
                        draggableId={iteam.id}
                        index={index}
                      >
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
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              id : {iteam.id}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              Username : {iteam.userName}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faBars}
                                className="label"
                              />
                              Description : {iteam.description}
                            </h3>
                            <h3>
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="label2"
                              />
                              Date : {iteam.date}
                            </h3>
                            <h3>
                              <FontAwesomeIcon icon={faTag} className="label" />
                              Label : {iteam.Dropdown}
                            </h3>
                          </div>
                        )}
                      </Draggable>

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
})}
            </div>
          </div>
          <div className="col-md-4">
            <span className="Todo">FINISHED</span>
            <span className="more">...</span>
            <div className="card">
              <h5>Add Finished Work</h5>
              {data.map((iteam,index) => {
                if (iteam.status == "finished") {
                  return (
                    <Droppable key={iteam.id} droppableId={iteam.id} index={index}>
                      {(provided) => (
                        <div
                          className="carddynamic"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          
                        >
                          <Draggable key={iteam.id} draggableId={iteam.id}>
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
                                  <FontAwesomeIcon
                                    icon={faUser}
                                    className="username12"
                                  />
                                  id : {iteam.id}
                                </h3>

                                <h3>
                                  <FontAwesomeIcon
                                    icon={faUser}
                                    className="username12"
                                  />
                                  Username : {iteam.userName}
                                </h3>

                                <h3>
                                  <FontAwesomeIcon
                                    icon={faBars}
                                    className="label"
                                  />
                                  Description : {iteam.description}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon
                                    icon={faCalendar}
                                    className="label2"
                                  />
                                  Date : {iteam.date}
                                </h3>
                                <h3>
                                  <FontAwesomeIcon
                                    icon={faTag}
                                    className="label"
                                  />
                                  Label : {iteam.Dropdown}
                                </h3>
                              </div>
                            )}
                          </Draggable>
                        </div>
                      )}
                    </Droppable>
                  );
                }
              })}

              {/* {data.map((iteam, index) => {
                <Droppable key={iteam.id} droppableId={iteam.id}>
                  {(provided) => (
                    <div
                      className="carddynamic"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      //onDragEnd={onDragEnd}
                    >
                      <Draggable
                        key={iteam.id}
                        draggableId={iteam.id}
                        index={index}
                      >
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
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              id : {iteam.id}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faUser}
                                className="username12"
                              />
                              Username : {iteam.userName}
                            </h3>

                            <h3>
                              <FontAwesomeIcon
                                icon={faBars}
                                className="label"
                              />
                              Description : {iteam.description}
                            </h3>
                            <h3>
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="label2"
                              />
                              Date : {iteam.date}
                            </h3>
                            <h3>
                              <FontAwesomeIcon icon={faTag} className="label" />
                              Label : {iteam.Dropdown}
                            </h3>
                          </div>
                        )}
                      </Draggable>

                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
})} */}
            </div>
          </div>
        </div>
      </div>
      {isFormSet ? <Form setForm={setForm} setflag={setflag} /> : null}
    </DragDropContext>
  );
};

export default Card;
