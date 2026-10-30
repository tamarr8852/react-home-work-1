import React, { useState } from "react";
import { List } from "./List";
import { Table } from "./Table";

export const MyTask = () => {

const [isList, setIsList] = useState(false);
const [isTable, setIsTable] = useState(false);

const f=(str)=> {
  switch(str){
    case "list":
      setIsList(true);
      setIsTable(false);
      break;
    case "table":
      setIsList(false);
      setIsTable(true);
      break;
  }
}

const [tasks, setTasks] = useState([
    {id:1, description: "Task 1", done: false, time: "10:00 AM"},
    {id:2, description: "Task 2", done: false, time: "11 :00 AM"},
    {id:3, description: "Task 3", done: false, time: "12:00 PM"}
]);

const dell=(id) => {
    setTasks(tasks.filter((task) => task.id != id))
}

const changeDone=(id) => {
    setTasks(tasks.map((task) => 
        {if(task.id === id)
            task.done = !task.done;}))
    
    }
return <>
  <button onClick={() => f("list")} >List </button>
  <button onClick={() => f("table")} >Table </button>
  {isList && <List tasks={tasks}></List>}
  {isTable && <Table tasks={tasks}></Table>}
   </>

}