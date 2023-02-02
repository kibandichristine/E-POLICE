import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate case Data
function createData(id, firs_name, last_name, id_number, phone_number, address_id, lawyer_id ) {
  return {id, firs_name, last_name, id_number, phone_number, address_id, lawyer_id  };
}

// url http://127.0.0.1:8000/precinct/suspects/

function preventDefault(event) {
  event.preventDefault();
}

export default function Suspects() {
  const [loadingData, setLoadingData] = useState(true);  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://127.0.0.1:8000/precinct/suspects/")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
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
<Title>Suspects</Title>
<Table size="small">
<TableHead>
<TableRow>
<TableCell>id</TableCell>
  <TableCell>Full Name</TableCell>
  <TableCell>Age</TableCell>
  <TableCell>id Number</TableCell>
  <TableCell>phone </TableCell>
  <TableCell>Address </TableCell>
  <TableCell>Status </TableCell>
  
  {/* <TableCell>lawyer Id</TableCell>  */}
</TableRow>
</TableHead>
<TableBody>

{data.map((row) => (
  <TableRow key={row.id}>
    <TableCell>{row.id}</TableCell>
    <TableCell>{row.first_name} {row.last_name}</TableCell>
    <TableCell>{row.age} </TableCell>
    <TableCell>{row.id_number}</TableCell>
    <TableCell>{row.phone}</TableCell> 
    <TableCell>{row.address}</TableCell>      
    <TableCell>{row.status}</TableCell>      

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
