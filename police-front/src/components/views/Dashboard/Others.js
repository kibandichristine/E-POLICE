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
import GavelIcon from '@mui/icons-material/Gavel';
import FlagIcon from '@mui/icons-material/Flag';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';

function  OtherMainListItems(props){
return(
    <React.Fragment>
    <ListSubheader component="div" inset>
      Auxiliary ..
    </ListSubheader>
    <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("missing")}}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Missing" />
    </ListItemButton>
    <ListItemButton onClick={(event) => { event.preventDefault()
      props.onPageChange("mostWanted")}}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Most Wanted" />
    </ListItemButton>    
  </React.Fragment>
)
}
 

export default OtherMainListItems

