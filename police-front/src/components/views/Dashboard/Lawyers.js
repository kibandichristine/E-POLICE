// import * as React from 'react';
import axios from "axios";


import React, { useMemo, useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
// import {useEffect} from "react";
// Generate case Data

async function GetSuspectDetails(sid){
var arr = []
   const res = await fetch("http://127.0.0.1:8000/precinct/suspects/"+sid)
    .then((response) => {
      return response.json();
    })
    .then(function(text) {
      arr.push(text)
      // console.log(text)
      
          });
          console.log(arr)
          return arr
}

export default function Law() {
    const [loadingData, setLoadingData] = useState(true);  
    const [data, setData] = useState([]);

    useEffect(() => {
      async function getData() {
        await axios
          .get("http://127.0.0.1:8000/precinct/lawyers/")
          .then((response) => {
            // check if the data is populated
            console.log(response.data);
            setData(response.data);
            // you tell it that you had the result
            setLoadingData(false);
          })
          // .then()
          ;
      }
      if (loadingData) {
        // if the result is not ready so you make the axios call
        getData();
      }
    }, []);



  return (
   <>
    {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        
<React.Fragment>
<Title>Active Lawyers</Title>
<Table size="small">
<TableHead>
  <TableRow>
  <TableCell>suspect</TableCell>
    <TableCell>Full name </TableCell>
    <TableCell>phone </TableCell>
    <TableCell>id Number</TableCell>
    {/* <TableCell>Address id</TableCell> */}
    {/* <TableCell>phone </TableCell> */}

    

    {/* <TableCell >date</TableCell> */}
  </TableRow>
</TableHead>
<TableBody>
  
  {data.map((row) => (
    <TableRow key={row.id}>
      <TableCell id="details">{row.suspect}</TableCell>
      <TableCell>{row.first_name} {row.last_name}</TableCell>
      <TableCell>{row.phone}</TableCell>
      <TableCell>{row.id_number}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
{/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
See more Cases
</Link> */}
</React.Fragment>
        
      )}
   </>
  );
}
