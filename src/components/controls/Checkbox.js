import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

export default function Checkbox(props) {

    const {name, label, value, onChange} = props;

    const converToDefEventPara = (name, value) => ({
        target : {
            name : name,
            value : value,
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control = {
                <MuiCheckbox
                    name={name}
                    color ="primary"
                    checked ={value}
                    onChange={e=> onChange(converToDefEventPara(name, e.target.checked))}
               />}
               label={label}     
            />

        </FormControl>
    )
}
