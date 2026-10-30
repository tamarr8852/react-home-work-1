export const Table = ({tasks}) => {
    return   <>
    <p>Table</p>
   <table>
  {tasks.map(task=><tr> <td>{task.id}</td>   <td>{task.description}</td>   <td>{task.done}</td>  <td>{task.time}</td></tr>)}
  </table>
    </>
  
}