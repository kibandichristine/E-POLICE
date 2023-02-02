import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


// Generate case Data


export default function Police() {
  const [loadingData, setLoadingData] = useState(true);  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://127.0.0.1:8000/precinct/officers/")
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
<Title>Police officers</Title>
<Table size="small">
<TableHead>
<TableRow>
<TableCell>id</TableCell>
  <TableCell>full name</TableCell>
  <TableCell>id number </TableCell>
  <TableCell>badge number</TableCell>
  <TableCell>phone  number</TableCell>
  <TableCell>Date of birth</TableCell>
  <TableCell>General duty </TableCell>
  {/* <TableCell>shift </TableCell>
  <TableCell>Day off </TableCell> */}


  {/* <TableCell>Address id</TableCell> */}

  

  {/* <TableCell >date</TableCell> */}
</TableRow>
</TableHead>
<TableBody>

{data.map((row) => (
  <TableRow key={row.id}>
    <TableCell>{row.id}</TableCell>
    <TableCell>{row.first_name} {row.last_name}</TableCell>
    <TableCell>{row.id_number}</TableCell>
    <TableCell>{row.badge}</TableCell>
    <TableCell>{row.phone}</TableCell>
    <TableCell>{row.date_of_birth}</TableCell>  
    <TableCell>{row.general_duty}</TableCell>      

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
