import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate case Data
function createData(id, start, end ) {
  return { id, start, end};
}

const rows = [
  createData(
    0,
    '10:00',
    "12:00pm",
   
  ),
  createData(
    1,
    '10:00',
    "12:00pm",
  ),
  createData(
    2, 
    '10:00',
    "12:00pm",
    ),
  createData(
    3,
    '10:00',
    "12:00pm"
  ),
  createData(
    4,
    '10:00',
    "12:00pm"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Shift() {
  return (
    <React.Fragment>
      <Title>All Shift</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell>id</TableCell>
            <TableCell>start</TableCell>
            <TableCell>end</TableCell>
           

            {/* <TableCell >date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
             

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Cases
      </Link> */}
    </React.Fragment>
  );
}
