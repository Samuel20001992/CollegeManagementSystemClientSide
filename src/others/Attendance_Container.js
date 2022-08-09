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
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getOneAdd } from '../action/add.action';
import Attendance from '../attendance/Attendance';
import { getOneStudent_Section } from '../action/student_section.action';
import { getOneAttendance, searchAll } from '../action/attendance.action';
import AttendanceTable from '../attendance/AttendanceTable';
import Days_Attendance from '../attendance/Days_Attendance';
function Attendance_Container() {
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    
    setValue(newValue);

  };

  const [change, setChange] = useState('1');
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState();
  const [section, setSection] = useState();
  const [courseCode, setCourseCode] = useState();
  
  const handleSearch = () =>{
    dispatch(getOneStudent_Section(searchValue)); 
}

const rows =  useSelector((state) => state.student_sectionReducer);

const handleSearchAll = () =>{
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth();
    const academic_year = dt.getFullYear();
    console.log(section + ' ' + courseCode + ' ' + day + ' ' + month + ' ' + academic_year )
    
    dispatch(getOneAttendance(section, courseCode, day, month, academic_year));
}

const [dates, setDates] = useState({
  start_day:'',
  end_day:'',
  start_month:'',
  end_month:'',
  start_year:'',
  end_year:''
 })

const searchData = () =>{
  dispatch(searchAll(dates.start_day,dates.start_month, dates.start_year, dates.end_day, dates.end_month,dates.end_year));
}


const record = useSelector((state)=> state.attendanceReducer);

  const [expand, setExpand] = useState(false);
  const handleExpand = (event) => {
    if (!expand) {
      setExpand(true);
    }
    else {
      setExpand(false);
    }
    
  }

  const [filter, setFilter] = useState(false);
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Header />
      <Grid container >
        <Grid item xs={2} md={2} sm={2} style={{float:'left', margin:'0%'}}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10} md={10} sm={10} style={{float:'left'}}>
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Attendance</Typography>
          
          {
            value=='1'? <center style={{marginTop:'40px'}}>
            < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Section" variant="outlined"  size="small" 
              onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}
             onClick={handleSearch}
            >Search</Button>
          </center>: null 
          }
          {
            value=='2' ? <center style={{marginTop:'40px'}}>
            
                     < TextField id="outlined-basic"  style={{width:'230px', align:'left', margin:'10px'}} label="Section" variant="outlined"  size="small" 
                        onChange={(e)=> setSection(e.target.value)}
                    />
                
                    < TextField id="outlined-basic"  style={{width:'230px', align:'left', margin:'10px'}} label="Course Code" variant="outlined"  size="small" 
                         onChange={(e)=> setCourseCode( e.target.value)}
                    />
                
                    <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px', margin:'10px'}}
                    onClick={handleSearchAll}
                    >Search</Button>
                     </center>: null }
               
                {
                    value == '3' ? 
                    <>
                    { !filter ? 
                      <center style={{marginTop:'40px'}}>
                      < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Section" variant="outlined"  size="small" 
                        onChange={(e)=> setSearchValue(e.target.value)}
                      />
                      <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}
                      onClick={(e)=>{
                        handleSearch()
                        setFilter(true)
                      }}
                      >Search</Button>
                    </center> : null
                    }
                    {
                      filter ? <div style={{marginTop:'40px'}}>
                        
                      < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} label="Day" variant="outlined"  size="small" 
                           onChange={(e)=> setDates({...dates, start_day: e.target.value})}
                       />
                       < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} label="Month" variant="outlined"  size="small" 
                            onChange={(e)=> setDates({...dates, start_month: e.target.value})}
                       />
               
                   < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} label="Year" variant="outlined"  size="small" 
                            onChange={(e)=> setDates({...dates, start_year: e.target.value})}
                       />
              
                       <typography style={{margin: '10px'}}> To </typography>
                       < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} label="Day" variant="outlined"  size="small" 
                            onChange={(e)=> setDates({...dates, end_day: e.target.value})}
                       />
              
                       < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} sx={{m:1}}label="Month" variant="outlined"  size="small" 
                            onChange={(e)=> setDates({...dates, end_month: e.target.value})}
                       />
               
                      < TextField id="outlined-basic"  style={{width:'130px', align:'left', margin:'10px'}} label="Year" variant="outlined"  size="small" 
                            onChange={(e)=> setDates({...dates, end_year: e.target.value})}
                       />
                       <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px', margin:'10px'}}
                       onClick={(e)=>{searchData()}}>Search</Button>
             
               </div> : null
                    }</>: null
                }
                
         
          

          
          
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Add Attendance " value="1" />
                <Tab label="Attendance List" value="2" />
                <Tab label="Days Attendance List" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <div >
                <Attendance searchValue={searchValue}  />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                 <AttendanceTable rows={rows}/>
                </center>
              </Grid>
          </TabPanel>
          <TabPanel value="3" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Days_Attendance dates={dates} re = {record}  records={rows.length}/>
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
       
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Attendance_Container


 
