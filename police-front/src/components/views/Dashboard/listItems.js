import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
// added by colls
import Link from '@mui/material/Link';

import GavelIcon from '@mui/icons-material/Gavel';
import FlagIcon from '@mui/icons-material/Flag';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';




function  MainListItems(props){

  const switchDashboard2 = (info) =>{
    console.log("Hello"+info)
  }

//  move = () => {
//   console.log("testing....")

//   }
 

  
return(
  <React.Fragment>
  <ListItemButton  id="Dashboard" onClick={(event) => { event.preventDefault()
      props.onPageChange("board")}} >
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
   
  </ListItemButton>
  
  <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("case")}} >
    <ListItemIcon>
      <FlagIcon />
    </ListItemIcon>
    <ListItemText primary="Cases" />
  </ListItemButton>
  <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("suspects")}}>
    <ListItemIcon>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Suspects"  />
  </ListItemButton>
  <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("law")}}>
    <ListItemIcon>
      <GavelIcon />
    </ListItemIcon>
    <ListItemText primary="Lawyers"  />
  </ListItemButton>
  <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("police")}}>
    <ListItemIcon>
      <LocalPoliceIcon  />
    </ListItemIcon>    
      <ListItemText primary="police" />
  </ListItemButton>
  {/* <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("shift")}}>
    <ListItemIcon>
      <FilterTiltShiftIcon  />
    </ListItemIcon>
    <ListItemText primary="shift" />
  </ListItemButton> */}
</React.Fragment>
)
}
 

export default MainListItems

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Missing" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Most Wanted" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end report" />
//     </ListItemButton>
//   </React.Fragment>
// }

// colls added fucntion s


// export default function  MainListItems(props) {
//   <React.Fragment>
//   <ListItemButton>
//     <ListItemIcon>
//       <DashboardIcon />
//     </ListItemIcon>
//     <ListItemText primary="Dashboard" />
//   </ListItemButton>
//   <ListItemButton>
//     <ListItemIcon>
//       <ShoppingCartIcon />
//     </ListItemIcon>
//     <ListItemText primary="Orders" />
//   </ListItemButton>
//   <ListItemButton>
//     <ListItemIcon>
//       <PeopleIcon />
//     </ListItemIcon>
//     <ListItemText primary="Customers" />
//   </ListItemButton>
//   <ListItemButton>
//     <ListItemIcon>
//       <BarChartIcon />
//     </ListItemIcon>
//     <ListItemText primary="Reports" />
//   </ListItemButton>
//   <ListItemButton>
//     <ListItemIcon>
//       <LayersIcon />
//     </ListItemIcon>
//     <ListItemText primary="Integrations" />
//   </ListItemButton>
// </React.Fragment>

// }