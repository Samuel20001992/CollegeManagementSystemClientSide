import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [nav,setNav] = useState();
  const handleNav = (event) => {
      setNav(event.target.value);
  }

  return (
      <Box
       style={{top:'0'}}
      >
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <FormControl style={{ width: '150px', fills: 'white', color: 'white', marginLeft:'100px'}}>
            <InputLabel id="demo-simple-select-label">Registrar</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              style={{ color: 'white' }}
              value={nav}
              onChange={handleNav}
              label={nav}
            >
              <MenuItem value={'View Applicants'} >
                <Link to='/' style={{ textDecoration:'none'}}>
                  View Applicants
                </Link>
              </MenuItem>
              <MenuItem value={'View Students'} >
                <Link to='/View_Student' style={{ textDecoration:'none'}}>
                  View Students
                </Link>
              </MenuItem>
              <MenuItem value={'View Withdrawal'} >
                <Link to='/View_Withdrawal' style={{ textDecoration:'none'}}>
                  View Withdrawal
                </Link>
              </MenuItem> 
              <MenuItem value={'View Withdrawal'} >
                <Link to='/View_Readmission' style={{ textDecoration:'none'}}>
                  View Readmission
                </Link>
              </MenuItem> 
              <MenuItem value={'View Department'} >
                <Link to='/View_Graduate' style={{ textDecoration:'none'}}>
                  View Graduate
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/View_Graduate_Summary' style={{ textDecoration:'none'}}>
                  View Graduate Summary
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/View_Summary_Table' style={{ textDecoration:'none'}}>
                  View Graduate Table
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/View_Instructor_Course' style={{ textDecoration:'none'}}>
                  View Instructor Course
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/Add_Instructor_Course' style={{ textDecoration:'none'}}>
                  Add Instructor Course
                </Link>
              </MenuItem>
              
            </Select>
          </FormControl>
          <FormControl style={{ width: '150px', fills: 'white', color: 'white', marginLeft:'100px'}}>
            <InputLabel id="demo-simple-select-label">Instructor</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              style={{ color: 'white' }}
              value={nav}
              onChange={handleNav}
              label={nav}
            >
              <MenuItem value={'View Department'} >
                <Link to='/Add_Semester_Grade' style={{ textDecoration:'none'}}>
                  Add Semester Grade
                </Link>
              </MenuItem>
              <MenuItem value={'View Course '} >
                <Link to='/Add_Course_Design' style={{ textDecoration:'none'}}>
                  Add Course Design
                </Link>
              </MenuItem>
              <MenuItem value={'View Course '} >
                <Link to='/View_Assessment' style={{ textDecoration:'none'}}>
                 View Assessment
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: '150px', fills: 'white', color: 'white', marginLeft:'100px'}}>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              style={{ color: 'white' }}
              value={nav}
              onChange={handleNav}
              label={nav}
            >
              {/* <MenuItem value={'View Section'} >
                <Link to='/View_Section' style={{ textDecoration:'none'}}>
                  View Section
                </Link>
              </MenuItem>  */}
              <MenuItem value={'View Add'} >
                <Link to='/View_Add' style={{ textDecoration:'none'}}>
                  View Add
                </Link>
              </MenuItem>
              <MenuItem value={'View Drop'} >
                <Link to='/View_Drop' style={{ textDecoration:'none'}}>
                  View Drop
                </Link>
              </MenuItem>
              <MenuItem value={'View Course Breakdown'} >
                <Link to='/View_Course_Breakdown' style={{ textDecoration:'none'}}>
                  View Course Breakdown
                </Link>
              </MenuItem>
              <MenuItem value={'View Course Offering'} >
                <Link to='/View_Course_Offering' style={{ textDecoration:'none'}}>
                  View Course Offering
                </Link>
              </MenuItem>
              <MenuItem value={'View Course '} >
                <Link to='/View_Course' style={{ textDecoration:'none'}}>
                  View Course 
                </Link>
              </MenuItem>
              <MenuItem value={'View Course '} >
                <Link to='/View_Section' style={{ textDecoration:'none'}}>
                  View Section 
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: '150px', fills: 'white', color: 'white', marginLeft:'100px'}}>
            <InputLabel id="demo-simple-select-label">Admin</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              style={{ color: 'white' }}
              value={nav}
              onChange={handleNav}
              label={nav}
            >
              <MenuItem value={'View Staff'} >
                <Link to='/View_Staff' style={{ textDecoration:'none'}}>
                  View Staff
                </Link>
              </MenuItem>
            <MenuItem value={'View Curriculum'} >
                <Link to='/View_Curriculum' style={{ textDecoration:'none'}}>
                  View Curriculum
                </Link>
              </MenuItem>
              <MenuItem value={'View Curriculum'} >
                <Link to='/Add_Academic_Calander' style={{ textDecoration:'none'}}>
                  Add Academic Calander
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/View_Department' style={{ textDecoration:'none'}}>
                  View Department
                </Link>
              </MenuItem>
              <MenuItem value={'View Department'} >
                <Link to='/View_Enrollment' style={{ textDecoration:'none'}}>
                  View Enrollment
                </Link>
              </MenuItem>
               
            </Select>
            
          </FormControl>
          <FormControl style={{ width: '150px', fills: 'white', color: 'white', marginLeft:'100px'}}>
            <InputLabel id="demo-simple-select-label">Student</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              style={{ color: 'white' }}
              value={nav}
              onChange={handleNav}
              label={nav}
            >
              <MenuItem value={'Add Student Course Registration'} >
                <Link to='/Add_Student_Course_Registration' style={{ textDecoration:'none'}}>
                  Student Course Registration
                </Link>
              </MenuItem>
              <MenuItem value={'Add Student Course Registration'} >
                <Link to='/Application' style={{ textDecoration:'none'}}>
                  Incomplete Application
                </Link>
              </MenuItem>
             <MenuItem value={'Add Student Course Registration'} >
                <Link to='/View_Clearance' style={{ textDecoration:'none'}}>
                 View Clearance
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                              color="inherit"
                              style={{float:'right', right:0}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
