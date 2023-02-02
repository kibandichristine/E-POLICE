import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import OtherMainListItems from './Others';
import MainListItems from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import LogoutIcon from '@mui/icons-material/Logout';
import Suspects from './Suspects';
import Cases from './Cases';
import { PropaneSharp } from '@mui/icons-material';
import Police from './Police';
import Shift from './Shift';
import Law from './Lawyers';
import Missing from './Missing';
import Wanted from './MostWanted';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
    christine
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
    );
  }
  
  const drawerWidth = 240;
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
    );
    
    const mdTheme = createTheme();
    
    export default function DashboardContent(props) {
      const [open, setOpen] = React.useState(true);
      const [item, setItem] = React.useState("Dep")
      const [page, setPage] = React.useState("Cases")
      const [cases, setCases] = React.useState(true)
      const [police, setPolice] = React.useState(false)
      const [shift, setShift] = React.useState(false)
      const [lawyer, setLawyer] = React.useState(false)
      const [suspects, setSuspects] = React.useState(false)
      const [defaulti, setDefault] = React.useState(true)
      const [missing, setMissing] = React.useState(false)
      const [wanted, setWanted] = React.useState(false)
      
      
      const displayItem = "Deposits"
      if(item == "Dep"){
        const displayItem = <Deposits />
      }
      
      
      // const displayItem = <item />
      
      const toggleDrawer = () => {
        setOpen(!open);
      };
      const logout = (event) =>{
        props.onLogOut("loggin out ....")
      }
      
      
      
      function  HandlepageChange(tab){
        
        if(tab == "case"){
          var text = JSON.stringify(tab)
          console.log("am at the dashboard ..."+text)
          setDefault(false)
          setLawyer(false)
          setCases(false)
          setShift(false)
          setMissing(false)
          setSuspects(false)
          setWanted(false) 
          setCases(true)
          // active  = <Cases />
        }else if(tab == "board"){
          var text = JSON.stringify(tab)
          console.log("am at the dashboard ..."+text)
          setDefault(false)
          setLawyer(false)
          setCases(false)
          setShift(false)
          setMissing(false)
          setSuspects(false)
          setWanted(false) 
          setCases(true)
          // active  = <Cases />
        }else if(tab == "law"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setCases(false)
          setShift(false)
          setSuspects(false)
          setPolice(false)
          setMissing(false)
          setLawyer(true)
          setWanted(false)          

          console.log("am at the dashboard ..."+text)
          // active  = <Law />
        }else if(tab == "police"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setCases(false)
          setShift(false)
          setSuspects(false)
          setLawyer(false)
          setMissing(false)
          setPolice(true)
          setWanted(false)          

          console.log("am at the dashboard ..."+text)
          // active  = <Police />
        }else if(tab == "shift"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setCases(false)
          setSuspects(false)
          setPolice(false)
          setLawyer(true)
          setMissing(false)
          setShift(true)
          setWanted(false)          


          console.log("am at the dashboard ..."+text)
          // active  = <Shift  />
        }else if(tab == "suspects"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setLawyer(false)
          setCases(false)
          setShift(false)
          setMissing(false)
          setPolice(false)
          setSuspects(true)
          setWanted(false)          

          console.log("am at the dashboard ..."+text)

          // active  = <Suspects />
          // return  <Suspects />
          // missing           mostWanted       adds
        }else if(tab == "adds"){
          var text = JSON.stringify(tab)
          // setDefault(false)
          // setLawyer(false)
          // setCases(false)
          // setShift(false)
          // setSuspects(true)
          console.log("am at the dashboard ..."+text)

          // active  = <Suspects />
          // return  <Suspects />
          // missing           mostWanted       adds
        }else if(tab == "missing"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setLawyer(false)
          setCases(false)
          setShift(false)
          setPolice(false)
          setSuspects(false)
          setMissing(true)
          setWanted(false)          
          console.log("am at the dashboard ..."+text)

          // active  = <Suspects />
          // return  <Suspects />
          // missing           mostWanted       adds
        }else if(tab == "mostWanted"){
          var text = JSON.stringify(tab)
          setDefault(false)
          setLawyer(false)
          setCases(false)
          setShift(false)
          setPolice(false)
          setSuspects(false)
          setMissing(false)
          setWanted(true)
          console.log("am at the dashboard ..."+text)

          // active  = <Suspects />
          // return  <Suspects />
          // missing           mostWanted       adds
        }
        
        
      }
   
      var show  = "case"
      if(defaulti){

        show = <Cases />
      }else{
        if(cases){
          show = <Cases />
        }else if(police){
          show = <Police />
        }else if(shift){
          show = <Shift />
        }else if(lawyer){
          show = <Law />
        }else if(suspects){
          show = <Suspects />
        }else if(missing){
          show = <Missing />
        }else if(wanted){
          show = <Wanted />
        }
      }
      
      return (
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
        <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
        >
        <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        sx={{
          marginRight: '36px',
          ...(open && { display: 'none' }),
        }}
        >
        <MenuIcon />
        </IconButton>
        <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
        >
        Dashboard
        </Typography>
        <IconButton color="inherit"  onClick={logout}>
        {/* <Badge badgeContent={logout} color="secondary"> */}
        <LogoutIcon />
        logout
        
        {/* </Badge> */}
        </IconButton>
        
        
        
        </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
        <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
        >
        <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
        </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
        {/* {mainListItems} */}
        <MainListItems onPageChange={HandlepageChange}/>
        <Divider sx={{ my: 1 }} />
        
        <OtherMainListItems onPageChange={HandlepageChange}/>
        </List>
        </Drawer>
        <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
          theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
        >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>             
        <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {/* the body of the application .. */}
        {show}
        </Paper>
        </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
        </Container>
        </Box>
        </Box>
        </ThemeProvider>
        );
      }
      
      // export default function Dashboard() {
      //   return <DashboardContent />;
      // }
      