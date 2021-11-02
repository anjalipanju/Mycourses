import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Courses = () => {
    var [courseData,changeData]=useState([])
var [isLoading,loadstatusChange]=useState(false)

 useEffect( ()=>{

    loadData()

 },[] )


 const loadData=()=>{

    loadstatusChange(isLoading=true)

    axios.get("https://jsonplaceholder.typicode.com/photos").then(
        (response)=>{
    console.log(response.data)

   changeData(
       courseData=response.data
   )

   loadstatusChange(isLoading=false)


        }
    )


 }


    return (
        <div>


{ isLoading ? <CircularProgress color="primary" />  : 


<Table style={{ marginTop:2}}>
     <TableHead>
         <TableRow>
             <TableCell> id </TableCell>
             <TableCell> title </TableCell>
             <TableCell>  url </TableCell>
             {/* <TableCell>  Venue  </TableCell>
             <TableCell>  Duration  </TableCell> */}
         </TableRow>
     </TableHead>

     <TableBody>
         {courseData.map((value,index)=>{
return <TableRow> 
<TableCell> {value.id} </TableCell>
<TableCell> {value.title} </TableCell>
<TableCell> {value.url} </TableCell>
{/* <TableCell> {value.courseVenue} </TableCell>
<TableCell> {value.courseDuration} </TableCell> */}

</TableRow>

         } )}

     </TableBody>


 </Table>
}
</div>
    )
}

export default Courses
