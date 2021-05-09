import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import React from 'react'

export default function DatePicker(props) {

    const { name, label, value , onChange }  = props; 

    const converToDefEventPara = (name, value) => ({
        target : {
            name : name,
            value : value,
        }
    })
    return (
       <MuiPickersUtilsProvider
         utils = {DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant = "inline"
                inputVariant="outlined"
                label = { label}
                format= "MM/dd/yyyy"
                name = {name}
                value = {value}
                onChange = {date=> onChange(converToDefEventPara(name, date))}
            />

       </MuiPickersUtilsProvider>
    )
}
