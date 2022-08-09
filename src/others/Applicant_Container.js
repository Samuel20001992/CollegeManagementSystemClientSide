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

function Applicant_Container() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('first_name', applicantData.first_name)
    formData.append('middle_name', applicantData.middle_name)
    formData.append('last_name', applicantData.last_name)
    formData.append('gender', applicantData.gender)
    formData.append('phone', applicantData.phone)
    formData.append('email', applicantData.email)
    formData.append('facility', applicantData.facility)
    formData.append('department', applicantData.department)
    formData.append('program', applicantData.program)
    formData.append('learning_modality', applicantData.learning_modality)
    formData.append('photo', applicantData.photo)
    formData.append('section', applicantData.section)
    formData.append('attendance_year', applicantData.attendance_year)
    formData.append('fs_number', applicantData.fs_number)
    formData.append('account_number', applicantData.account_number)
    formData.append('bank', applicantData.bank)
    formData.append('birth_date', applicantData.birth_date)
    formData.append('place_of_birth_region', applicantData.place_of_birth_region)
    formData.append('place_of_birth_zone', applicantData.place_of_birth_zone)
    formData.append('place_of_birth_woreda', applicantData.place_of_birth_woreda)
    formData.append('place_of_birth_house_no', applicantData.place_of_birth_house_no)
    formData.append('address_region', applicantData.address_region)
    formData.append('address_zone', applicantData.address_zone)
    formData.append('address_woreda', applicantData.address_woreda)
    formData.append('address_house_no', applicantData.address_house_no)
    formData.append('emergency_contact_first_name', applicantData.emergency_contact_first_name)
    formData.append('emergency_contact_middle_name', applicantData.emergency_contact_middle_name)
    formData.append('emergency_contact_last_name', applicantData.emergency_contact_last_name)
    formData.append('emergency_contact_address_region', applicantData.emergency_contact_address_region)
    formData.append('emergency_contact_address_zone', applicantData.emergency_contact_address_zone)
    formData.append('emergency_contact_address_woreda', applicantData.emergency_contact_address_woreda)
    formData.append('emergency_contact_address_house_no', applicantData.emergency_contact_address_house_no)
    formData.append('emergency_contact_phone_no', applicantData.emergency_contact_phone_no)
    formData.append('emergency_contact_email', applicantData.emergency_contact_email)
    formData.append('emergency_contact_relationship', applicantData.emergency_contact_relationship)
    
    
    console.log('photo ' + applicantData.photo.name);
   

        dispatch(createApplicant(formData)); 
    
    
}


  const [applicantData, setApplicantData] = useState({
    first_name:'', middle_name:'', last_name:'',
    gender:'', phone:'',email:'', facility:'', department:'', program:'',
    learning_modality:'', photo:'', section:'', attendance_year:'',
    fs_number: '', account_number: '', bank: '', remark: '', 
    birth_date: '',
    place_of_birth_region: '',
    place_of_birth_zone: '',
    place_of_birth_woreda: '',
    place_of_birth_house_no: '',
    place_of_birth_city: '',
    address_region: '',
    address_zone: '',
    address_woreda: '',
    address_house_no: '',
    address_city: '',
    emergency_contact_first_name: '',
    emergency_contact_middle_name: '',
    emergency_contact_last_name: '',
    emergency_contact_address_region: '',
    emergency_contact_address_zone: '',
    emergency_contact_address_woreda: '',
    emergency_contact_address_house_no: '',
    emergency_contact_address_city: '',
    emergency_contact_phone_no: '',
    emergency_contact_email: '',
    emergency_contact_relationship: '',
    status: ''
})

const [search, setSearch] = useState(false);
const handleSearch = () =>{
    dispatch(getOneApplicant(searchValue));
    
}

  useEffect(() => {
    dispatch(getApplicants());
    }, [currentId,dispatch ])
   
  let rows = useSelector((state) => state.applicantReducer);
  
     const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [change, setChange] = useState('1');

  const [searchValue, setSearchValue] = useState('1');

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
            < TextField id="outlined-basic"  style={{width:'600px', align:'center'}} label="Id" variant="outlined"  size="small"
              onChange={(e)=> setSearchValue(e.target.value)}
            />
            <Button variant="contained" color='primary' style={{ width: '100px', padding:'8px'}}
              onClick={(e)=> {
                handleSearch()
                }}
            >Search</Button>
          </center>
          <TabContext value={value} >
            <Box style={{marginTop:'30px'}} >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Add Applicant" value="1" />
                <Tab label="Applicant List" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{backgroundColor:'#E7E9EB', height:'420px'}}>
              <div >
                <Add_Applicant applicantData={applicantData} setApplicantData = {setApplicantData} change={change} />      
              </div>
            </TabPanel>
            <TabPanel value="2" style={{backgroundColor:'#E7E9EB', height:'460px'}}>
              <Grid item xs={12} md={12} sm={12} >
                <center>
                  {console.log ('s ' + searchValue + search)}
                  <Applicant_Table rows = {rows}/>
                </center>
              </Grid>
          </TabPanel>
          </TabContext>
        {
          change == 1 && value == 1 ? <Grid container  >
            
            <Grid item xs={12} style={{ float: 'right', marginTop: '5px', marginLeft: '1150px' }}  >
              <Button variant='contained' color='primary' onClick={(e) => {
                if (change == '1') {
                  setChange('2')
                }
                else if(change == '2'){
                  setChange('3')
                }
                else if(change == '3'){
                  setChange('4')
                }
              }}>Next</Button>
            </Grid>
            
            </Grid> : null
        }
        {
          change == 2 && value == 1 ? <Grid container  >
            <Grid item xs={3} style={{ float: 'left', marginTop: '15px', marginLeft: '50px' }}  >
              <Button variant='contained' color='primary' onClick={(e) => {
                if (change == '2') {
                  setChange('1')
                }
                else if(change == '3'){
                  setChange('2')
                }
                else{
                  setChange('3')
                }
              }}>Back</Button>
            </Grid>
            <Grid item xs={3} style={{ float: 'left', marginTop: '15px', marginLeft:'590px' }}  >
              <Button variant='contained' color='primary'
              onClick={(e) => {
                if (change == '1') {
                  setChange('2')
                }
                else if(change == '2'){
                  setChange('3')
                }
                else if(change == '3'){
                  setChange('4')
                }
              }}
              >Next</Button>
            </Grid>
            </Grid> : null
        }
         {
          change == 3 && value == 1 ? <Grid container  >
            <Grid item xs={3} style={{ float: 'left', marginTop: '15px', marginLeft: '50px' }}  >
              <Button variant='contained' color='primary' onClick={(e) => {
                if (change == '2') {
                  setChange('1')
                }
                else if(change == '3'){
                  setChange('2')
                }
                else{
                  setChange('3')
                }
              }}>Back</Button>
            </Grid>
            <Grid item xs={3} style={{ float: 'left', marginTop: '15px', marginLeft:'590px' }}  >
              <Button variant='contained' color='primary'
              onClick={(e) => {
                if (change == '1') {
                  setChange('2')
                }
                else if(change == '2'){
                  setChange('3')
                }
                else if(change == '3'){
                  setChange('4')
                }
              }}
              >Next</Button>
            </Grid>
            </Grid> : null
        }
        {
          change == 4 && value == 1? <Grid container  >
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
              onClick={(e)=>{
                handleSubmit(e)
                console.log('submit')
              }}
              >Submit</Button>
            </Grid>
            </Grid> : null
        }
        </Grid>     
      </Grid>     
        
    </Box>
  )
}

export default Applicant_Container


 
