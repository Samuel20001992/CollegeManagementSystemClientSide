import React,{useState, useEffect} from 'react'
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import {Typography} from '@mui/material';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Equivalence, HighSchool, Masters, Transfer, TVET } from './Educational_Background';
import { Degree } from './Educational_Background';
import Header from '../others/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from '../action/department.action';
import axios from 'axios';
import { createApplicant, updateApplicant } from '../action/applicants.action'
function Add_Applicant(props) {
    let update = props.update;
    const background = [
        'High School',
        'Degree',
        'TVET',
        'Masters',
        'Equivalence',
        'Transfer'
    ]
    const [education,setEducation] = useState();
    const handleEducation = (event) => {
        setEducation(event.target.value);
    }

    
    const [applicantData, setApplicantData] = useState({
        first_name:'', middle_name:'', last_name:'',
        gender:'', phone:'',email:'', facility:'', department:'', program:'',
        learning_modality:'', photo:'', section:'', attendance_year:'',
        fs_number:'',account_number:'', bank:'', remark:'', grade10_national_exam: ''
    })

    const handleDepatment = (e) => {
        setApplicantData({ ...applicantData, department: e.target.value })
    }

    const handleProgram = (e) => {
     setApplicantData({ ...applicantData, program: e.target.value })   
    }
    
    const handleLearningModality = (e) => {
        setApplicantData({...applicantData, learning_modality:e.target.value})
    }

    const handleGender = (e) => {
        setApplicantData({...applicantData, gender:e.target.value})
    }

    const years = [
    '2013','20014','2015','2016','2017','2018',
    ]
    const [year1, setYear1] = useState();
    const handleYear1 = (event) => {
        setYear1(event.target.value);
    }

    const [year2, setYear2] = useState();
    const handleYear2 = (event) => {
        setYear2(event.target.value);
    }

    const dispatch = useDispatch();
    

    const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getDepartments());
  }, [currentId, dispatch]);

    const departments =  useSelector((state) => state.departmentReducer);

console.log('dep ' + departments)
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
        formData.append('remark', applicantData.remark)
        formData.append('grade10_national_exam', applicantData.grade10_national_exam)
        console.log('photo ' + applicantData.photo.name);
        console.log('10 ' + applicantData.grade10_national_exam.name)
        
        if (update) {
            dispatch(createApplicant(formData)); 
        } else {
            // dispatch(updateApplicant(_id, formData));
        }
        
    }
    

    return (
        <div style={{
            backgroundColor: 'white', height: '100vh', border: '1px solid blue' }}>
            <Header />
        <form  onSubmit={handleSubmit} encType='multipart/form-data'>
          <CardContent
            
            noValidate
            autoComplete="off"
            // className='d-flex'  
                style={{
                marginTop:'50px',
                // marginLeft: '20px',
                // marginRight: '20px',
                marginBottom: '50px',
                    backgroundColor: 'white',
                //  borderRadius:'2em'
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="First Name" variant="outlined" size="small"
                                name='first_name' onChange={(e) => setApplicantData({ ...applicantData, first_name: e.target.value })}
                                value={applicantData.first_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Middle Name" variant="outlined" size="small"
                                name='middle_name' onChange={(e) => setApplicantData({ ...applicantData, middle_name: e.target.value })}
                             value={applicantData.middle_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Last Name" variant="outlined" size="small"
                                    name='last_name' onChange={(e) => setApplicantData({ ...applicantData, last_name: e.target.value })}
                            value={applicantData.last_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                     <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantData.gender}
                    label="Gender"
                    onChange={handleGender}
                        >
                         <MenuItem value={'Male'}>Male</MenuItem>
                          <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Phone" variant="outlined" size="small"
                                    name='phone' onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })}
                            value={applicantData.phone}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Email" variant="outlined" size="small"
                                    name='email' onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })}
                            value={applicantData.email}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Facility" variant="outlined" size="small"
                                    name='facility' onChange={(e) => setApplicantData({ ...applicantData, facility: e.target.value })}
                            value={applicantData.facility}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantData.department}
                    label="department"
                    onChange={handleDepatment}
                        >
                            {
                                departments.map((department) => {
                                    return <MenuItem value={department.phone}>{department.phone}</MenuItem>
                                })
                            }
                            
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Program</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantData.program}
                            label="Program"
                            onChange={handleProgram}
                        >
                             <MenuItem value={'Degree'}>Degree</MenuItem>
                             <MenuItem value={'Masters'}>Masters</MenuItem>
                            <MenuItem value={'PHD'}>PHD</MenuItem>
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Learning Modality</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={applicantData.learning_modality}
                            label="Learning Modality"
                            onChange={handleLearningModality}
                        >
                             <MenuItem value={'Regular'}>Regular</MenuItem>
                             <MenuItem value={'Extension'}>Extension</MenuItem>
                            
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                      <input
                                type="file"
                                accept='.png, .jpg, .jpeng'
                                name='photo'
                                onChange={(e) => setApplicantData({ ...applicantData, photo: e.target.files[0] })}
                        />      
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Attendance Year" variant="outlined" size="small"
                                name='attendance_year' onChange={(e) => setApplicantData({ ...applicantData, attendance_year: e.target.value })}
                            value={applicantData.attendance_year}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="FS number" variant="outlined" size="small"
                                    name='fs_number' onChange={(e) => setApplicantData({ ...applicantData, fs_number: e.target.value })}
                            value={applicantData.fs_number}
                            />
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Bank" variant="outlined" size="small"
                                name='bank' onChange={(e) => setApplicantData({ ...applicantData, bank: e.target.value })}
                           value={applicantData.bank}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Account Number" variant="outlined" size="small"
                                name='account_number' onChange={(e) => setApplicantData({ ...applicantData, account_number: e.target.value })}
                            value={applicantData.account_number}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Remark" variant="outlined" size="small"
                            value={applicantData.remark}
                            name='remark' onChange={(e) => setApplicantData({ ...applicantData, remark: e.target.value })}/>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Educational Background</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={education}
                            label="Educational Background"
                            onChange={handleEducation}
                        >
                            {
                                background.map((edu) => {
                                    return <MenuItem value={edu}>{edu}</MenuItem>
                                })
                            }
                            
                            
                    </Select>
                </FormControl>
                </Grid>
                
            </Grid>
            </CardContent>
            {education == 'High School' ?
                    (<Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> High School</Typography>
                </Grid> 
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{ width:'300px'}} label="Grade 12 National Exam Result Certificate" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}   sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">Grade 12 National Exam Taken Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year1}
                        label="Educational Background"
                        onChange={handleYear1}
                            >
                                {
                                    years.map((ye) => {
                                        return <MenuItem value={ye}>{ye}</MenuItem>
                                    })
                                }
                                
                                
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                    <input
                                type="file"
                                accept='.png, .jpg, .jpeng'
                                name='grad10_national_exam'
                                onChange={(e) => setApplicantData({ ...applicantData, grade10_national_exam: "je;;" })}
                               
                            />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}  sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">Grade 10 National Exam Taken Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year2}
                        label="Educational Background"
                        onChange={handleYear2}
                            >
                                {
                                    years.map((ye) => {
                                        return <MenuItem value={ye}>{ye}</MenuItem>
                                    })
                                }  
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{width:'300px'}} label="Grade 9 - 12 Transcript" variant="outlined" size='small' />
            </Grid>
        </Grid>): null
                    
            } 
            {education == 'Degree' ?
                    <Degree /> : null
                    
            }
            {education == 'Masters' ?
                    <Masters/> : null
                    
            } 
            {education == 'Transfer' ?
                    <Transfer/> : null
                    
            } 
            {education == 'Equivalence' ?
                <Equivalence/> : null
                    
            } 
            {education == 'TVET' ?
                <TVET/> : null
                    
            }
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' type='submit' style={{width:'200px'}}>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
         </form>   
          
        </div>
     
  )
}

export default Add_Applicant