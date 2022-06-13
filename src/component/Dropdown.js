import React, {useState} from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";

function Dropdown() {

    const [form, setForm] = useState("")

    const handleChange = (event) => {
        setForm(event.target.value);
    };

    /*
        6/13/2022 - Based on value, we will change the state of component on website showing the flowchart.
     */
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="Catalog"> Year </InputLabel>
                <Select
                    labelId="Catalog"
                    id="Catalog-Select"
                    value = {form}
                    label="Form"
                    onChange={handleChange}
                >
                <MenuItem value={1}> 2013-2018</MenuItem>
                <MenuItem value={2}> 2018-2019</MenuItem>
                <MenuItem value={3}> 2019-2020</MenuItem>
                <MenuItem value={4}> 2020-2021</MenuItem>
                <MenuItem value={5}> 2021-2022</MenuItem>
                <MenuItem value={6}> 2021-2023</MenuItem>
                </Select>
                <FormHelperText>Choose Your Catalog Year</FormHelperText>
            </FormControl>
        </div>
    );
}

export default Dropdown;
