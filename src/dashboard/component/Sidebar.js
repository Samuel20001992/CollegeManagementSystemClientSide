import React from 'react';
import './sidebar.css';
import {AdminData, DepartmentData, InstructorData, RegsitrarData, StudentData} from './SidebarData';
import { Typography } from '@mui/material';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
function Sidebar() {

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
    <div className='Sidebar'>
       <ul className='SidebarList' >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
          <AccordionSummary style={{backgroundColor : '#2F4050'}}>
            <Typography className='accordion' color= 'white'>Admin</Typography>
          </AccordionSummary>
       
          {AdminData.map((val, key)=>{
            return(
                  <AccordionDetails
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                      className='accordion'
                  >
                  <li
                      className='row'
                      onClick={()=>{window.location.pathname= val.link}} key={key}>
                                          <div id='icon'>{val.icon}</div>
                                          <div id='title'>
                                              {val.title}
                                          </div>
                  </li>
                  </AccordionDetails>
                    )
                })
                            
          }
              
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
          <AccordionSummary style={{backgroundColor : '#2F4050'}}>
            <Typography className='accordion' color= 'white'>Department</Typography>
          </AccordionSummary>
       
          {DepartmentData.map((val, key)=>{
            return(
                  <AccordionDetails
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                      className='accordion'
                  >
                  <li
                      className='row'
                      onClick={()=>{window.location.pathname= val.link}} key={key}>
                                          <div id='icon'>{val.icon}</div>
                                          <div id='title'>
                                              {val.title}
                                          </div>
                  </li>
                  </AccordionDetails>
                    )
                })
                            
          }
              
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
          <AccordionSummary style={{backgroundColor : '#2F4050'}}>
            <Typography className='accordion' color= 'white'>Instructor</Typography>
          </AccordionSummary>
       
          {InstructorData.map((val, key)=>{
            return(
                  <AccordionDetails
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                      className='accordion'
                  >
                  <li
                      className='row'
                      onClick={()=>{window.location.pathname= val.link}} key={key}>
                                          <div id='icon'>{val.icon}</div>
                                          <div id='title'>
                                              {val.title}
                                          </div>
                  </li>
                  </AccordionDetails>
                    )
                })
                            
          }
              
        </Accordion>
        
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion'>
          <AccordionSummary style={{backgroundColor : '#2F4050'}}>
            <Typography className='accordion' color= 'white'>Registerar</Typography>
          </AccordionSummary>
       
          {RegsitrarData.map((val, key)=>{
            return(
                  <AccordionDetails
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                      className='accordion'
                  >
                  <li
                      className='row'
                      onClick={()=>{window.location.pathname= val.link}} key={key}>
                                          <div id='icon'>{val.icon}</div>
                                          <div id='title'>
                                              {val.title}
                                          </div>
                  </li>
                  </AccordionDetails>
                    )
                })
                            
          }
              
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='accordion'>
          <AccordionSummary style={{backgroundColor : '#2F4050'}}>
            <Typography className='accordion' color= 'white'>Student</Typography>
          </AccordionSummary>
       
          {StudentData.map((val, key)=>{
            return(
                  <AccordionDetails
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                      className='accordion'
                  >
                  <li
                      className='row'
                      onClick={()=>{window.location.pathname= val.link}} key={key}>
                                          <div id='icon'>{val.icon}</div>
                                          <div id='title'>
                                              {val.title}
                                          </div>
                  </li>
                  </AccordionDetails>
                    )
                })
                            
          }
              
        </Accordion>
       </ul>
    </div>
  )
}

export default Sidebar