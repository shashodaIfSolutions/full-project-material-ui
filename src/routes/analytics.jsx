import React from 'react';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
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
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import Chart, {
     ArgumentAxis,
     CommonSeriesSettings,
     Legend,
     Series,
     Tooltip,
     ValueAxis,
     ConstantLine,
     Label,
} from 'devextreme-react/chart';

import { complaintsData } from './data';

import useStyles from './styles';

const lists = [
  { title: 'List One' },
  { title: 'List Two' },
  { title: 'List Three' },
];

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

export default function Analytics() {
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

     const data = complaintsData.sort((a, b) => b.count - a.count);

     const totalCount = data.reduce((prevValue, item) => prevValue + item.count, 0);

     let cumulativeCount = 0;

     const dataArray = data.map((item) => {
          cumulativeCount += item.count;
          return {
               complaint: item.complaint,
               count: item.count,
               cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
          };
     });

     return (
       <ThemeProvider theme={theme}>
               <>
                    <CssBaseline />
                    <main className={classes.mainTwo} >
                         <div className={classes.box} style={{ margin: '2% 0' }}>
                              <AppBar position="static" style={{ backgroundColor: '#182e41' }}>
                                   <Container maxWidth="lg">
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
                                                          <Link to="/campaign" style={{ color: '#000', textDecoration: 'unset', fontWeight: 'bold' }}>Campaign</Link>
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
                                             <MenuItem onClick={handleCloseNavMenu}>
                                                <Link to="/" style={{ color: '#fff', textDecoration: 'unset', fontWeight: 'bold' }}>Home</Link> &ensp;&ensp;|&ensp;&ensp;{" "}
                                                <Link to="/campaign" style={{ color: '#fff', textDecoration: 'unset', fontWeight: 'bold' }}>Campaign</Link>
                                              </MenuItem>
                                             </Box>

                                             <Box sx={{ flexGrow: 0 }}>
                                                  <Tooltip title="Open settings">
                                                       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                            <Avatar alt="user" src="/img/user.png" />
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
                                   <Container maxWidth="md">
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
                                                  <Grid item xs={12} sm={7} display={'flex'} justifyContent={'center'}>
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
                                                                      <Grid item xs={12}>
                                                                        <Container maxWidth="sm">
                                                                          <Card className={classes.card} style={{ backgroundColor: '#182e41' }}>
                                                                                <CardContent className={classes.cardContent}>
                                                                                     <div>
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         10 <br /> Total Clicks
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                          <Divider sx={{ m: 3 }} style={{ backgroundColor: 'white' }} />
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         10 <br /> Total Refferer
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                          <Divider sx={{ m: 3 }} style={{ backgroundColor: 'white' }} />
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         5 <br /> Top Location
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                     </div>
                                                                                </CardContent>
                                                                           </Card>
                                                                        </Container>    
                                                                    </Grid>
                                                                 </Grid>
                                                            </Container>
                                                            <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center' }}>
                                                                 <Chart
                                                                      title="Pizza Shop Complaints"
                                                                      dataSource={dataArray}
                                                                      palette="Harmony Light"
                                                                      id="chart"
                                                                 >
                                                                      <CommonSeriesSettings argumentField="complaint" />
                                                                      <Series
                                                                           name="Complaint frequency"
                                                                           valueField="count"
                                                                           axis="frequency"
                                                                           type="bar"
                                                                           color="#fac29a"
                                                                      />
                                                                      <Series
                                                                           name="Cumulative percentage"
                                                                           valueField="cumulativePercentage"
                                                                           axis="percentage"
                                                                           type="spline"
                                                                           color="#6b71c3"
                                                                      />

                                                                      <ArgumentAxis>
                                                                           <Label overlappingBehavior="stagger" />
                                                                      </ArgumentAxis>

                                                                      <ValueAxis
                                                                           name="frequency"
                                                                           position="left"
                                                                           tickInterval={300}
                                                                      />
                                                                      <ValueAxis
                                                                           name="percentage"
                                                                           position="right"
                                                                           tickInterval={20}
                                                                           showZero={true}
                                                                           valueMarginsEnabled={false}
                                                                      >
                                                                           <Label customizeText={customizePercentageText} />
                                                                           <ConstantLine
                                                                                value={80}
                                                                                width={2}
                                                                                color="#fc3535"
                                                                                dashStyle="dash"
                                                                           >
                                                                                <Label visible={false} />
                                                                           </ConstantLine>
                                                                      </ValueAxis>

                                                                      <Tooltip
                                                                           enabled={true}
                                                                           shared={true}
                                                                           customizeTooltip={customizeTooltip}
                                                                      />

                                                                      <Legend
                                                                           verticalAlignment="top"
                                                                           horizontalAlignment="center"
                                                                      />
                                                                 </Chart>
                                                            </Container>
                                                       </TabPanel>
                                                       <TabPanel value={value} index={1}>
                                                            <Container className={classes.cardGrid} style={{ marginTop: '5%' }}>
                                                                 <Grid container spacing={4} justify="center">
                                                                      <Grid item xs={12}>
                                                                      <Container maxWidth="sm">
                                                                          <Card className={classes.card} style={{ backgroundColor: '#182e41' }}>
                                                                                <CardContent className={classes.cardContent}>
                                                                                     <div>
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         10 <br /> Total Clicks
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                          <Divider sx={{ m: 3 }} style={{ backgroundColor: 'white' }} />
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         10 <br /> Total Refferer
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                          <Divider sx={{ m: 3 }} style={{ backgroundColor: 'white' }} />
                                                                                          <Grid container spacing={2} justify="center">
                                                                                               <Grid item xs={2} justify="center" alignItems="center" style={{ display: 'flex' }}>
                                                                                                    <CustomCheckbox icon={<RadioButtonUncheckedIcon />} />
                                                                                               </Grid>
                                                                                               <Grid item xs={10}>
                                                                                                    <Typography style={{ color: 'white' }}>
                                                                                                         5 <br /> Top Location
                                                                                                    </Typography>
                                                                                               </Grid>
                                                                                          </Grid>
                                                                                     </div>
                                                                                </CardContent>
                                                                           </Card>
                                                                        </Container>
                                                                      </Grid>
                                                                 </Grid>
                                                            </Container>
                                                            <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <Chart
                                                                      title="Pizza Shop Complaints"
                                                                      dataSource={dataArray}
                                                                      palette="Harmony Light"
                                                                      id="chart"
                                                                 >
                                                                      <CommonSeriesSettings argumentField="complaint" />
                                                                      <Series
                                                                           name="Complaint frequency"
                                                                           valueField="count"
                                                                           axis="frequency"
                                                                           type="bar"
                                                                           color="#fac29a"
                                                                      />
                                                                      <Series
                                                                           name="Cumulative percentage"
                                                                           valueField="cumulativePercentage"
                                                                           axis="percentage"
                                                                           type="spline"
                                                                           color="#6b71c3"
                                                                      />

                                                                      <ArgumentAxis>
                                                                           <Label overlappingBehavior="stagger" />
                                                                      </ArgumentAxis>

                                                                      <ValueAxis
                                                                           name="frequency"
                                                                           position="left"
                                                                           tickInterval={300}
                                                                      />
                                                                      <ValueAxis
                                                                           name="percentage"
                                                                           position="right"
                                                                           tickInterval={20}
                                                                           showZero={true}
                                                                           valueMarginsEnabled={false}
                                                                      >
                                                                           <Label customizeText={customizePercentageText} />
                                                                           <ConstantLine
                                                                                value={80}
                                                                                width={2}
                                                                                color="#fc3535"
                                                                                dashStyle="dash"
                                                                           >
                                                                                <Label visible={false} />
                                                                           </ConstantLine>
                                                                      </ValueAxis>

                                                                      <Tooltip
                                                                           enabled={true}
                                                                           shared={true}
                                                                           customizeTooltip={customizeTooltip}
                                                                      />

                                                                      <Legend
                                                                           verticalAlignment="top"
                                                                           horizontalAlignment="center"
                                                                      />
                                                                 </Chart>
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

   function customizeTooltip(pointInfo) {
    return {
         html: `<div><div class="tooltip-header">${pointInfo.argumentText
              }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName
              }</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText
              }</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName
              }</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText
              }</span>% </div></div></div>`,
    };
}

function customizePercentageText({ valueText }) {
    return `${valueText}%`;
}