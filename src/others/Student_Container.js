import React,{useState, useEffect} from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { createApplicant, getApplicants, getOneApplicant, updateApplicant } from '../action/applicants.action'
import { getOneStudent, getStudents } from '../action/student.action';
import Student_Table from '../student/Student_Table';
import { getStudent_Details } from '../action/student_detail.action';


function Student_Container() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();




const handleSearch = () =>{
  console.log('dep ' + department + ' ' +id)
    dispatch(getOneStudent(id, department));
    handleReset();
}

const handleReset = () =>{
  setId('no');
  setDepartment('no');
}

  useEffect(() => {
    dispatch(getStudent_Details());
    }, [currentId,dispatch ])
   
  let rows = useSelector((state) => state.student_detailReducer);
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');

  const [id, setId] = useState('no');
  const [department, setDepartment] = useState('no');

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
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Student List</Typography>
          <center style={{marginTop:'40px'}}>
            < TextField id="outlined-basic"  style={{width:'200px', align:'center', margin:'10px'}} label="Id" variant="outlined"  size="small"
              value={id}
              onChange={(e)=> 
                {
                  setId(e.target.value)}
                }
                
            />
            < TextField id="outlined-basic"  style={{width:'200px', align:'center' , margin:'10px'}} label="Department" variant="outlined"  size="small"
              value={department}
              onChange={(e)=> 
                {
                  
                    setDepartment(e.target.value)}
                  
                }
                
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px', margin:'10px'}}
              onClick={(e)=> {
                handleSearch()
                }}
            >Search</Button>
          </center>
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Student List" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'420px'}}>
              <div >
                <Student_Table rows = {rows}/>
              </div>
            </TabPanel>
           
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Student_Container


 
