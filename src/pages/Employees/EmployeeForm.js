import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState, useEffect} from 'react'
import {useForm, Form}  from '../../components/useForm';



const initialFieldValue = {
    id : 0,
    fullName : '',
    email : '',
    mobile : '',
    city : '',
    gender : 'male',
    departmentId : '',
    hireDate : new Date(),
    isPermanent : false
}


export default function EmployeeForm() {

    // const [values, setValues]  = useState(initialFieldValue);
    
    
    const { values, setValues , handleInputChange } = useForm(initialFieldValue);
    
    //const classes = useStyles();




   


    return (
 
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant = "outlined"
                        label ="Full Name"
                        name = "fullName"
                        value = {values.fullName}
                        onChange = {handleInputChange}
                    />
                    <TextField
                        variant = "outlined"
                        label ="Email"
                        name ="email"
                        value = {values.email}
                        onChange = {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </Form>
 
    )
}
