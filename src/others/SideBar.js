import * as React from 'react';
import { Box } from '@material-ui/core';
import {SwipeableDrawer} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {List} from '@material-ui/core';
import {Divider} from '@material-ui/core';
import {ListItem} from  '@material-ui/core';
import {ListItemIcon} from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function SideBar() {
   const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const anchor = 'left';
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      
    >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Home</Typography>
        </AccordionSummary>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          About
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Help
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Organizaiton</Typography>
        </AccordionSummary>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
         >
          <Link to='/Organization'  style={{textDecoration:'none', color:'black'}}>
            Organization
          </Link>
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
         >
          <Link to='/Department'  style={{textDecoration:'none', color:'black'}}>
            Department
          </Link>
        </AccordionDetails>
       
         <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Analytics
           </AccordionDetails>
         <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
          >
            Laws and Policies
         </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
          >
            Announcements
         </AccordionDetails>
       </Accordion>
       
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Employee</Typography>
        </AccordionSummary>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          <Link to='/Employee'  style={{textDecoration:'none', color:'black'}}>
            Employee
          </Link>
          
        </AccordionDetails>
          <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          <Link to='/Employee'  style={{textDecoration:'none', color:'black'}}>
            Employee Directory
          </Link>
          
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Training
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Dicipline
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Performance
        </AccordionDetails>
      </Accordion>
       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Timesheet</Typography>
        </AccordionSummary>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Attendance
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Absent Record
        </AccordionDetails>
        <AccordionDetails
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
          Leave Management
        </AccordionDetails>
      </Accordion>
    </Box>
  );

}

