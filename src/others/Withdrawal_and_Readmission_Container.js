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
import Withdrawal_Table from '../withdrawal/Withdrawal_Table';
import Readmission_Table from '../readmission/Readmission_Table';
import { useDispatch } from 'react-redux';
import { getOneWithdraw } from '../action/withdrawal.action';
import { getOneReadmission } from '../action/readmission.action';
function Withdrawal_and_Readmission_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');
  const dispatch = useDispatch();


  const [expand, setExpand] = useState(false);
  const handleExpand = (event) => {
    if (!expand) {
      setExpand(true);
    }
    else {
      setExpand(false);
    }
    
  }

  const [searchValue, setSearchValue] = useState();
 const handleSearch = () =>{
  if(value == '1'){
    dispatch(getOneWithdraw(searchValue)); 
  }
   else if( value == '2'){
    dispatch(getOneReadmission(searchValue));
   }
}

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Header />
      <Grid container >
        <Grid item xs={2} md={2} sm={2} style={{float:'left', margin:'0%'}}>
          <Sidebar style={{height:'100vh'}}/>
        </Grid>
        <Grid item xs={10} md={10} sm={10} style={{float:'left'}}>
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Withdrawal & Readmission</Typography>
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
                <Tab label="Withdrawal List" value="1" />
                <Tab label="Readmission list" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'455px'}} >
              <div >
                <Withdrawal_Table change={change} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'455px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Readmission_Table />
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Withdrawal_and_Readmission_Container


 
