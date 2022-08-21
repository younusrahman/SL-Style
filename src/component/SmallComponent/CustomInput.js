import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { LocationLookupUrl } from "../SLUrls";
import { fetchdata, SetFromObject } from "../../reduxItem/slice/TravelSlice";
import { Autocomplete, ListItem, TextField } from "@mui/material";
import { SetFailed, SetStartLoading } from "../../reduxItem/slice/CommonSlice";




function CustomInput({ placeholder, name, width="100%",variant, singelObject, setObject, searchText , setSearchText}) {

    const [filteredData, setFilteredData] = useState([]);

    const [autoCompeleteData, setAutoCompeleteData] = useState([]);
    const dispatch = useDispatch()



    useEffect(() => {
        async function fetchData() {
            try {
                        
                const response = await fetch(
                    LocationLookupUrl(searchText)
                );

                const data = await response.json()
                setAutoCompeleteData(data.ResponseData)
             
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchText]);





    const handleFilter = (event) => {
        const searchWord = event.target.value;
        
        setSearchText(searchWord)
        const newFilter = autoCompeleteData.filter((value) => {
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());    
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        dispatch(setObject(""));
        setSearchText("");
    };

    return (
        <div className="search" style={{ position: "relative", width: "100%" }}>
               
                <FormControl sx={{width: {width} }} variant="outlined">
                    <TextField
                        autoComplete= 'off'
                        name={name}
                        variant={variant}
                        sx={{ backgroundColor: "white", width: "100vw" }}
                        style={{ width: "100%" }}
                        type="text"
                        label={placeholder}
                        value={searchText}
                        onChange={handleFilter}
                        endadornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={clearInput}
                                    edge="end">
                                    {searchText == "" ? "" : <CloseIcon />}
                                </IconButton>
                            </InputAdornment>
                        }

                    />

                </FormControl>
     
            {
                filteredData.length != 0 && (
                    <List  className=" h-auto max-h-52 bg-white overflow-hidden overflow-y-auto" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", position: "absolute", top:"4rem", left:"0.5rem", width:"98%", zIndex:100}} >
                        {filteredData.map((item, index) => (
                            <ListItemButton  onClick={ () => {
                                dispatch(setObject(item));
                                setSearchText(item.Name);
                                setFilteredData([]);
                            }}  key={index}>
                                <ListItemText primary={item.Name}/>
                            </ListItemButton>
                        ))}
                    </List>)
            }
        </div>
    );
}

export default CustomInput;
