import { v4 as uuidv4 } from "uuid";

export const addTaskToStorage = (
  userName,
  description,
  date,
  Dropdown,
  setflag,
  setForm
) => {
  let id = uuidv4();
  let storedata = JSON.parse(sessionStorage.getItem("task"));
  if (storedata === null) storedata = [];
  storedata.push({
    id: id,
    userName: userName,
    description: description,
    date: date,
    Dropdown: Dropdown,
    status: "todo",
  });

  sessionStorage.setItem("task", JSON.stringify(storedata));
  setForm(false);
  setflag(true);
};
