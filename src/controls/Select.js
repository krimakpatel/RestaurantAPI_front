import { FormControl, FormHelperText, Select as MuiSelect, InputLabel, MenuItem } from '@material-ui/core'
import React from 'react'

export default function Select(props) {
    const {name, label, value, varient, onChange, options, error = null } = props;
  
    return (
    <FormControl
        variant = {varient || "outlined"}
        {...(error && {error : true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label = {label}
                name = {name}
                value = {value}
                onChange = {onChange}
                >
                {
                    options.map(
                        item => (<MenuItem key = {item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
