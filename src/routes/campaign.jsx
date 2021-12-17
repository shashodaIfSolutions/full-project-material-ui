import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from "@material-ui/lab/Pagination";

import useStyles from './styles';

const lists = [
  { title: 'List One' },
  { title: 'List Two' },
  { title: 'List Three' },
];

const cards = [1, 2]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});


export default function Campaign() {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <main className={classes.main}>
          <div className={classes.box} style={{ margin: '2% 0' }}>
            <AppBar position="static" style={{ backgroundColor: '#182e41' }}>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                    <img alt="Logo" src="/img/logo.png" style={{ height: '50px', width: '50px' }} />
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/" style={{ color: '#000', textDecoration: 'unset', fontWeight: 'bold' }}>Home</Link> &ensp;&ensp;|&ensp;&ensp;{" "}
                        <Link to="/analytics" style={{ color: '#000', textDecoration: 'unset', fontWeight: 'bold' }}>Analytics</Link>
                      </MenuItem>
                    </Menu>
                  </Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                    <img alt="Logo" src="/img/logo.png" variant="rounded" />
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Link to="/" style={{ color: '#fff', textDecoration: 'unset', fontWeight: 'bold' }}>Home</Link> &ensp;&ensp;|&ensp;&ensp;{" "}
                        <Link to="/analytics" style={{ color: '#fff', textDecoration: 'unset', fontWeight: 'bold' }}>Analytics</Link>
                      </MenuItem>
                    </Button>
                  </Box>

                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/img/user.png" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
            <div className={classes.container}>
              <Container maxWidth="sm">
                <div className={classes.buttons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={12} sm={5}>
                      <Autocomplete
                        freeSolo
                        id="free-solo"
                        disableClearable
                        options={lists.map((option) => option.title)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Search"
                            InputProps={{
                              ...params.InputProps,
                              type: 'search',
                              endAdornment: <InputAdornment position="start"><SearchTwoToneIcon /></InputAdornment>,
                            }}
                            id="outlined-basic"
                            variant="outlined"

                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Box>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="New Campaign" {...a11yProps(0)} />
                          <Tab label="Shortner URL" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TabPanel value={value} index={0}>
                        <Container className={classes.cardGrid} style={{ marginTop: '5%' }}>
                          <Grid container spacing={4} justify="center">
                            {cards.map((card) => (
                              <Grid item key={card} xs={12}>
                                <Card className={classes.card} style={{ backgroundColor: '#182e41' }}>
                                  <CardContent className={classes.cardContent}>
                                    <div>
                                      <Grid container spacing={2} justify="center">
                                        <Grid item xs={10}>
                                          <Typography gutterBottom>
                                            <a href="www.google.com" target='_blank' color="inherit" style={{ color: 'white', fontWeight: 'Bold' }}>www.Google.com</a>
                                          </Typography>
                                          <Typography style={{ color: 'white' }}>
                                            Google
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                          <CustomCheckbox defaultChecked />
                                        </Grid>
                                      </Grid>
                                    </div>

                                  </CardContent>
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </Container>
                        <Container className={classes.pagination} maxWidth="sm" style={{ display: 'flex' }}>
                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => (
                                <PaginationItem
                                  components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                  {...item}
                                />
                              )}
                            />
                          </Stack>
                        </Container>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Container className={classes.cardGrid} style={{ marginTop: '5%' }}>
                          <Grid container spacing={4} justify="center">
                            {cards.map((card) => (
                              <Grid item key={card} xs={12}>
                                <Card className={classes.card} style={{ backgroundColor: '#182e41' }}>
                                  <CardContent className={classes.cardContent}>
                                    <div>
                                      <Grid container spacing={2} justify="center">
                                        <Grid item xs={10}>
                                          <Typography gutterBottom>
                                            <a href="www.google.com" target='_blank' color="inherit" style={{ color: 'white', fontWeight: 'Bold' }}>www.Google Two.com</a>
                                          </Typography>
                                          <Typography style={{ color: 'white' }}>
                                            Google Two
                                          </Typography>
                                        </Grid>
                                        <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                          <CustomCheckbox defaultChecked />
                                        </Grid>
                                      </Grid>
                                    </div>

                                  </CardContent>
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </Container>
                        <Container className={classes.pagination} maxWidth="sm" style={{ display: 'flex' }}>
                          <Stack spacing={2}>
                            <Pagination
                              count={10}
                              renderItem={(item) => (
                                <PaginationItem
                                  components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                  {...item}
                                />
                              )}
                            />
                          </Stack>
                        </Container>
                      </TabPanel>
                    </Grid>
                  </Grid>
                </div>

              </Container>

            </div>
          </div>

        </main>
      </>
    </ThemeProvider>
  );
}