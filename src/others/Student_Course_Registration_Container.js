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
import Student_Course_Registration_Table from '../student_course_registration/Student_Course_Registration_Table';
import Add_Student_Course_Registration from '../student_course_registration/Add_Student_Course_Registration';
import { useDispatch } from 'react-redux';

function Student_Course_Registration_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');
 const dispatch = useDispatch();
//  const [searchValue, setSearchValue] = useState();
//  const handleSearch = () =>{
//    dispatch(getOneStude(searchValue)); 
// }

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
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Applicant</Typography>
          <center style={{marginTop:'40px'}}>
            {/* < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Id" variant="outlined"  size="small"
            onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}
            onClick={handleSearch}
            >Search</Button> */}
          </center>
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Add Applicant" value="1" />
                <Tab label="Applicant List" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB'}}>
              <div >
                <Student_Course_Registration_Table change={change} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  {/* <Student_Course_Registration_Table /> */}
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
        
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Student_Course_Registration_Container


 
