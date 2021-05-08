import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
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
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup 
                            row
                            name="gender"
                            value = {values.gender}
                            onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
 
    )
}
