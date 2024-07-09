import React, { useState } from "react";
import "./Form.css";
import {
  faBars,
  faCalendar,
  faSquareXmark,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { v4 as uuidv4 } from "uuid";
import { addTaskToStorage } from "../common";

const Form = ({ setForm, setflag,addTask }) => {
  const [isCloseSet, Closeset] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userName, setuserName] = useState();
  const [description, setdescription] = useState();
  // const [label, setlabel] = useState();
  const [Dropdown, setDropdown] = useState();

  const Task = (addTask) => {
    addTaskToStorage(userName, description, date, Dropdown, setflag, setForm,);
    addTask();
  };

  return (
    <>
      <div className="form-main">
        <div className="container-form">
          <div className="close">
            <FontAwesomeIcon
              icon={faSquareXmark}
              onClick={() => {
                setForm(false);
              }}
            />
          </div>
          <div className="maincard">
            <h3>
              <FontAwesomeIcon icon={faUser} className="label" id="Username" />
              Username
            </h3>
            <input
              type="text"
              placeholder="Enter Username"
              className="col-md-6"
              id="addfunction"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            ></input>
            <h3 className="col-md-6">
              <FontAwesomeIcon icon={faBars} className="label" />
              Description
            </h3>

            <input
              type="text"
              placeholder="Add Date Function to this project."
              className="col-md-9"
              id="addfunction"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></input>

            <h3 className="col-md-3">
              <FontAwesomeIcon icon={faCalendar} className="label2" />
              Date
            </h3>
            {/* {/* <input
              type="text"
              placeholder="24-10-2023"
              className="col-md-5"
              id="adddate" 
            ></input>*/}

            <ReactDatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
            <div className="labeltag">
              <FontAwesomeIcon icon={faTag} className="label" />
              <select
                className="Dropdown"
                onChange={(e) => {
                  setDropdown(e.target.value);
                }}
              >
                <option value="Urgent">Urgent</option>

                <option value="Fronted">Fronted</option>

                <option value="Emergency">Emergency</option>
              </select>
              <button
                className="addlabels"
                onClick={() => {
                  Closeset(true);
                }}
              >
                Add Labels
              </button>
            </div>
            {isCloseSet ? (
              <>
                <div className=" container lbbar">
                  <div className="closeicons2">
                    <FontAwesomeIcon
                      className="Closeicon"
                      icon={faSquareXmark}
                      onClick={() => {
                        Closeset(false);
                      }}
                    />
                  </div>
                  <div className="col-md-12 addlabelsname">
                    <input
                      type="text"
                      placeholder="Label Name"
                      className=""
                      id="addlabel"
                      onChange={(e) => {}}
                    ></input>
                  </div>
                  <div className="allbuttons">
                    <div className="row">
                      <div className="col-md-2">
                        <button className="btn-colors" id="b2"></button>
                      </div>
                      <div className="col-md-2">
                        <button className="btn-colors" id="b3"></button>
                      </div>
                      <div className="col-md-2">
                        <button className="btn-colors" id="b4"></button>
                      </div>
                      <div className="col-md-2">
                        <button className="btn-colors" id="b5"></button>
                      </div>
                      <div className="col-md-2">
                        <button className="btn-colors" id="b6"></button>
                      </div>
                      <div className="col-md-2">
                        <button className="btn-colors" id="b7"></button>
                      </div>
                    </div>
                  </div>
                  <div className="addlabelbutton">
                    <button
                      className="buttonadd"
                      onClick={() => Closeset(false)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div className="col-md-12 submittask">
            <button
              className="button-62"
              onClick={() => {
                Task(addTask);
              }}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
