export const List = ({tasks}) => {
    return  <>
    <p>list</p>
    {tasks.map(task=><div>{task.id}  {task.description}  {task.done}  {task.time}</div>)}
    </>
   
}