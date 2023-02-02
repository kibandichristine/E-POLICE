import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import React from "react";

const Search = ({ onSearch }) => {
  return (
    <FormControl fullWidth sx={{ m: 1 }}  variant="outlined">
      <InputLabel htmlFor="standard-adornment-amount">Search</InputLabel>
      <Input
        onChange={(event) => {
          if (event.target.value === "") {
            onSearch(null);
          }
          onSearch(event.target.value);
        }}
        endAdornment={<InputAdornment position="end"></InputAdornment>}
      />
    </FormControl>
  );
};

export default Search;
