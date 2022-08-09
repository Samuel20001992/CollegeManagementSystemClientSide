import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UI from './UI';
import { Grid, Typography, CardContent, Button, TextField } from '@material-ui/core';
import Add_Applicant from '../applicant/Add_Applicant';
import Applicant_Table from '../applicant/Applicant_Table';
import Header from './Header';
import Sidebar from '../dashboard/component/Sidebar';
import Add_Add from '../add/Add_Add';
import Add_Table from '../add/Add_Table';
import Section_Table from '../section/Section_Table';
import Student_Table from '../student/Student_Table';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSection } from '../action/section.action';
import { getStudents } from '../action/student.action';
import { getStudent_Details } from '../action/student_detail.action';
import { Link } from 'react-router-dom';
function Section_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState();
 const handleSearch = () =>{
   dispatch(getOneSection(searchValue)); 
}

const [currentId, setCurrentId] = useState();
 
 useEffect(()=>{
  dispatch(getStudent_Details())
 },[currentId, dispatch])

 const rows = useSelector((state)=> state.studentReducer);

 let data = [];
 


  const [expand, setExpand] = useState(false);
  const handleExpand = (event) => {
    if (!expand) {
      setExpand(true);
    }
    else {
      setExpand(false);
    }
    
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Header />
      <Grid container >
        <Grid item xs={2} md={2} sm={2} style={{float:'left', margin:'0%'}}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10} md={10} sm={10} style={{float:'left'}}>
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Section</Typography>
          {/* <center style={{marginTop:'40px'}}>
            < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Id" variant="outlined"  size="small" 
             onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}>Search</Button>
          </center> */}
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Student to be added to Section List " value="1" />
                <Tab label="Added Students" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'550px'}}>
              <div >
                <Section_Table change={change} rows={rows} />   
                <Link to="/AddSection">
                <Button variant='contained' color='primary'  >Create Section</Button>
                </Link>
       </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'550px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  {
                    rows.map((row)=>{
                      if(row.section != ''){
                        data.push(row);
                      }
                     
                    })
                  }
                  <Student_Table rows={data}/>
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Section_Container


 
