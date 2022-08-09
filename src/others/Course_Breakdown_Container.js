import React,{useState} from 'react'
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
import Add_Course_Breakdown from '../course_breakdown/Add_Couse_Breakdown';
import Course_Breakdown_Table from '../course_breakdown/Course_Breakdown_Table';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCourseBreakdown } from '../action/course_breakdown.action';
function Course_Breakdown_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const [change, setChange] = useState('1');
  
  const [searchValue, setSearchValue] = useState();
  const handleSearch = () =>{
    dispatch(getOneCourseBreakdown(searchValue)); 
  }


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
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Course Breakdown</Typography>
          <center style={{marginTop:'40px'}}>
            < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Id" variant="outlined"  size="small" 
              onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}
            onClick={handleSearch}
            >Search</Button>
          </center>
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Add Course Breakdown" value="1" />
                <Tab label="Course Breakdown List" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <div >
                <Add_Course_Breakdown change={change} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Course_Breakdown_Table />
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Course_Breakdown_Container


 
