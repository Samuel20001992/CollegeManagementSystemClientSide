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
import Add_Add from '../add/Add_Add';
import Add_Table from '../add/Add_Table';
import Academic_Calander from '../academic_calander/Academic_Calander';
import Academic_Calander_Table from '../academic_calander/Academic_Calander_Table';
import { useDispatch, useSelector } from 'react-redux';
import { createAcademic_Calander, getAcademic_Calanders, getOneAcademicCalander } from '../action/academic_calander.action';
import academic_calanderReducer from '../reducers/academic_calander.reducer';
function Academic_Calander_Container() {
  
  const [academicCalander, setAcademicCalander] = useState({
    title:'',
    type:'',
    issued_no:'',
    academic_year:'',
    doc_no:'',
    reason:'',
    date:'',
    first_semester_registration_start_date:'',
     first_semester_registration_end_date:'',
    first_semester_add_drop_registration_start_date:'',
    first_semester_add_drop_registration_end_date:'',
    first_semester_class_begin:'',
    first_semester_class_end:'',
    first_semester_final_exam_start:'',
    first_semester_final_exam_end:'',
    first_semester_application_for_makeup_start:'',
    first_semester_application_for_makeup_end:'',
    first_semester_grade_submission:'',
    first_semester_makeup_exam_start:'',
    first_semester_makeup_exam_end:'',
    second_semester_registration_start_date:'',
     second_semester_registration_end_date:'',
    second_semester_add_drop_registration_start_date:'',
    second_semester_add_drop_registration_end_date:'',
    second_semester_class_begin:'',
    second_semester_class_end:'',
    second_semester_final_exam_start:'',
    second_semester_final_exam_end:'',
    second_semester_application_for_makeup_start:'',
    second_semester_application_for_makeup_end:'',
    second_semester_grade_submission:'',
    second_semester_makeup_exam_start:'',
    second_semester_makeup_exam_end:''
    })

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState();
    const handleSubmit = () => {
        dispatch(createAcademic_Calander(academicCalander));
   }


   const handleSearch = () =>{
    dispatch(getOneAcademicCalander(searchValue));
    
}

     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');

  const [currentId, setCurrentId] = useState();

  useEffect(()=>{
    dispatch(getAcademic_Calanders());
  },[currentId, dispatch])

  const rows = useSelector((state)=> state.academic_calanderReducer)

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
          <Typography variant='h6' style={{float:'left',  color:'gray', marginTop:'10px', marginLeft:'20px'}}>Academic Calander</Typography>
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
                <Tab label="Add Academic Calander" value="1" />
                <Tab label="Academic Calander List" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'440px'}}>
              <div >
                <Academic_Calander change={change} academicCalander = {academicCalander} setAcademicCalander = {setAcademicCalander} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'470px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  <Academic_Calander_Table rows={rows}/>
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
          {
          change == 1 && value == 1 ? <Grid container  >
            
            <Grid item xs={12} style={{ float: 'right', marginLeft: '1150px' }}  >
              <Button variant='contained' color='primary' onClick={(e) => {
                if (change == '1') {
                  setChange('2')
                }
                else if(change == '2'){
                  setChange('3')
                }
              }}>Next</Button>
            </Grid>
            
            </Grid> : null
        }
        {
          change == 2 && value == 1? <Grid container  >
            <Grid item xs={3} style={{ float: 'right', marginTop: '15px', marginLeft: '10px' }}  >
              <Button variant='contained' color='primary' onClick={(e) => {
                if (change == '2') {
                  setChange('1')
                }
                else {
                  setChange('2')
                }
              }}>Back</Button>
            </Grid>
            {/* <Grid item xs={3} style={{ float: 'right', marginTop: '15px', marginLeft: '758px' }}  >
              <Button variant='contained' color='primary'
              onClick={(e) => {
                if (change == '1') {
                  setChange('2')
                }
                else if(change == '2'){
                  setChange('3')
                }
              }}
              >Next</Button>
            </Grid> */}
            <Grid item xs={3} style={{ float: 'right', marginTop: '15px', marginLeft: '590px' }}  >
              <Button variant='contained' color='primary'
              onClick={handleSubmit}
              >Submit</Button>
            </Grid>
            </Grid> : null
        }
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Academic_Calander_Container


 
