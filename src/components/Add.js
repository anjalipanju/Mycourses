import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './AddRead'


const Add = () => {
    var [value,setValue]=useForm({courseTitle:"",courseDescription:"",courseDate:"",courseDuration:"",courseVenue:" "})
    const readValues=() =>{
        console.log(value)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",value).then(
            (response)=>{
                console.log(response)
            }
        )
    }
    return (
        <div>
            <TextField onChange={setValue} margin="normal" value={value.courseTitle}  fullWidth label="courseTitle" name="courseTitle" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.courseDescription} fullWidth label="courseDescription" name="courseDescription" variant="outlined" />
            <TextField onChange={setValue} margin="normal" type="date" value={value.courseDate} fullWidth  name="courseDate" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.courseDuration} fullWidth label="courseDuration" name="courseDuration" variant="outlined" />
            <TextField onChange={setValue} margin="normal" value={value.courseVenue} fullWidth label="courseVenue" name="courseVenue" variant="outlined" />
            <Button onClick={readValues} variant="contained" fullWidth color="primary">Submit</Button>
        </div>
    )
}

export default Add
