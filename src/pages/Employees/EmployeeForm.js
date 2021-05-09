import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, TextField } from '@material-ui/core';
import React, { useState, useEffect} from 'react'
import { Controls } from '../../components/controls/Controls';
import {useForm, Form}  from '../../components/useForm';
import * as employeeService from "../../services/employeeService";

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

//radio group
const genderItems = [
    {id : 'male', title : 'Male'},
    {id : 'female', title : 'Female'},
    {id : 'other', title : 'Other'}
]


export default function EmployeeForm() {

    // const [values, setValues]  = useState(initialFieldValue);
    
    
    const { values, setValues , handleInputChange } = useForm(initialFieldValue);
    
    //const classes = useStyles();


    useEffect(()=>{
        console.log(values);
    },[values])

   

    return (
 
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    
                    <Controls.Input
                        name ="fullName"
                        label="Full Name"
                        value = {values.fullName}
                        onChange = {handleInputChange}

                    />
                    <Controls.Input
                        label ="Email"
                        name ="email"
                        value = {values.email}
                        onChange = {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value = {values.departmentId}
                        onChange = {handleInputChange}
                        options = {employeeService.getDepartmentCollection()}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label ="Permanent Employee"
                        value = {values.isPermanent}
                        onChange = {handleInputChange}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label ="Hire Date"
                        value = {values.hireDate}
                        onChange = {handleInputChange}
                    />

                </Grid>
            </Grid>
        </Form>
 
    )
}
