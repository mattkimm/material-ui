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
    
    
    // Validation
    const validate = (fieldValues = values) => {
        let temp = {...errors}
      
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }


    
    const { values, setValues , handleInputChange, errors, setErrors , resetForm } = useForm(initialFieldValue,true,validate);
    
    //const classes = useStyles();



    useEffect(()=>{
        console.log(values);
    },[values])

   const handleSubmit = (e)=>{
       e.preventDefault();
       if(validate()) employeeService.insertEmployee(values);
   }

    return (
 
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    
                    <Controls.Input
                        name ="fullName"
                        label="Full Name"
                        value = {values.fullName}
                        onChange = {handleInputChange}
                        error = {errors.fullName}

                    />
                    <Controls.Input
                        label ="Email"
                        name ="email"
                        value = {values.email}
                        onChange = {handleInputChange}
                        error = {errors.email}
                    />
                    <Controls.Input
                        label ="Mobile"
                        name ="mobile"
                        value = {values.mobile}
                        onChange = {handleInputChange}
                    />
                    <Controls.Input
                        label ="City"
                        name ="city"
                        value = {values.city}
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
                        error = {errors.departmentId}
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
                    <div>
                        <Controls.Button
                            type ="submit"
                            text = "Submit"
                        />
                        <Controls.Button
                            type ="reset"
                            text = "Reset"
                            color = "default"
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
 
    )
}
