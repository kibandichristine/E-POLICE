


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
    
    <OtherMainListItems />
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
    {active}
    </Paper>
    </Grid>
    </Grid>
    <Copyright sx={{ pt: 4 }} />
    </Container>
    </Box>
    </Box>
    </ThemeProvider>
    );