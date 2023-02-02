import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function Cases() {
  const [loadingData, setLoadingData] = useState(true);  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get("http://127.0.0.1:8000/precinct/complaints/")
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
<Title>Cases</Title>
<Table size="small">
<TableHead>
<TableRow>
<TableCell>id</TableCell>
  {/* <TableCell>complainant</TableCell> */}
  <TableCell>statement</TableCell>
  <TableCell>location</TableCell>
  <TableCell>status </TableCell>
  <TableCell>complainants </TableCell>
  {/* <TableCell>suspects ids</TableCell>  */}
  <TableCell>OB number </TableCell> 
  {/* <TableCell>Officer</TableCell>  */}

</TableRow>
</TableHead>
<TableBody>

{data.map((row) => (
  <TableRow key={row.id}>
    <TableCell>{row.id}</TableCell>
    {/* <TableCell>{row.complainant[0].toString()}</TableCell> */}
    <TableCell>{row.statement}</TableCell>
    <TableCell>{row.location}</TableCell>
    <TableCell>{row.status}</TableCell> 
    <TableCell>{row.complainants}</TableCell>      
    {/* <TableCell>{row.suspects.toString()}</TableCell>   */}
    <TableCell>{row.occurrence_book_number}</TableCell>  
    {/* <TableCell>{row.recording_officer.toString()}</TableCell>       */}
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
