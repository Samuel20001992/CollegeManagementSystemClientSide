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
import Graduate_Students from '../graduate_students/Graduate_Students';
import Graduate_Summary_Table from '../graduate_students/Graduate_Summary_Table';
import { useDispatch } from 'react-redux';

function Graduate_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');

 const dispatch = useDispatch();

 const [searchValue, setSearchValue] = useState();
 const handleSearch = () =>{
  //  dispatch(getOneGraduate(searchValue)); 
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
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Graduate</Typography>
          <center style={{marginTop:'40px'}}>
            < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Id" variant="outlined"  size="small" 
              onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}>Search</Button>
          </center>
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} >
                <Tab label="Graduate Summary " value="1" />
                <Tab label="Graduate Student List" value="2" />
                {/* <Tab label="Add List" value="3" /> */}
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <div >
                <Graduate_Summary_Table change={change} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Graduate_Students />
                </center>
              </Grid>
          </TabPanel>
          {/* <TabPanel value="3" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Add_Table />
                </center>
              </Grid>
          </TabPanel> */}
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Graduate_Container


 
