import React,{useState, useEffect} from 'react'
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Header from '../others/Header';
import { useDispatch, useSelector } from 'react-redux';
import { createCurriculum } from '../action/curriculum.action'
import {getDepartments} from '../action/department.action'

function Add_Curriculum() {
    const [curriculumData, setCurriculumData] = useState({
        faculty:'',
    department:'',
    admission_classification:'',
    program:'',
    field_of_study:'',
    Nomenclature_in_engilsh:'',
    Nomenclature_in_amharic:'',
    total_credit:'',
    curriculum_name:'',
    curriculum_type:'',
    duration:'',
    number_of_semester:'',
    approved_year:'',
    minimum_credit:'',
    academic_commission_minute_number:'',
    academic_commission_approval_status:'',
    senate_minute_number:'',
    senate_approval_status:'',
    curriculum_document:'',
    registered_by:''
    })
  
    
    const handleDepartment = (event) => {
        setCurriculumData({ ...curriculumData, department: event.target.value });
    }

    const [classification,setClassification] = useState();
    const handleClassification = (event) => {
        setClassification(event.target.value);
    }

    const [program,setProgram] = useState();
    const handleProgram = (event) => {
        setProgram(event.target.value);
    }

    const [type,setType] = useState();
    const handleType = (event) => {
        setType(event.target.value);
    }

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCurriculum(curriculumData)); 
    }
    
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getDepartments());
  }, [currentId, dispatch]);

  const departments =  useSelector((state) => state.departmentReducer);

    console.log('deo ' + departments);
    
    
    return (
        <div>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Faculty" variant="outlined" size="small"
                        name='faculty'
                                onChange={(e) => setCurriculumData({ ...curriculumData, faculty: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                                    name='department'
                                    value={curriculumData.department}
                    onChange={handleDepartment}
                                >
                         {
                                departments.map((department) => {
                                    <MenuItem value={department.department_name}>{department.department_name}</MenuItem>
                                })        
                            }
                          
                         
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Admission Classification</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='admission_classification'
                    onChange={(e) => setCurriculumData({ ...curriculumData, admission_classification: e.target.value })}
                        >
                             <MenuItem value={'Regular'}>Regular</MenuItem>
                             <MenuItem value={'Extension'}>Extension</MenuItem>
                            
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Program</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={program}
                    name='program'
                    onChange={(e) => setCurriculumData({ ...curriculumData, program: e.target.value })}
                        >
                             <MenuItem value={'Degree'}>Degree</MenuItem>
                             <MenuItem value={'Masters'}>Masters</MenuItem>
                              <MenuItem value={'PHD'}>PHD</MenuItem>
                            
                    </Select>
                </FormControl>
                </Grid>
                
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Field of Study" variant="outlined" size="small"
                        name='field_of_studty'
                                onChange={(e) => setCurriculumData({ ...curriculumData, field_of_study: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Nomenclature in Engilsh" variant="outlined" size="small"
                        name='nomenclecture_in_engilsh'
                                onChange={(e) => setCurriculumData({ ...curriculumData, Nomenclature_in_engilsh: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Nomenclature in Amharic" variant="outlined" size="small"
                        name='nomenclecture_in_amharic'
                                onChange={(e) => setCurriculumData({ ...curriculumData, Nomenclature_in_amharic: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Total Credit" variant="outlined" size="small"
                        name='total_credit'
                                onChange={(e) => setCurriculumData({ ...curriculumData, total_credit: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Curriculum Name" variant="outlined" size="small"
                        name='curriculum_name'
                                onChange={(e) => setCurriculumData({ ...curriculumData, curriculum_name: e.target.value })}
                        />
                    </Grid>
                    </Grid>
                    </CardContent>
                    <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                     <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Curriculum Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    name='curriculum_type'
                                onChange={(e) => setCurriculumData({ ...curriculumData, curriculum_type: e.target.value })}
                        >
                             <MenuItem value={'Conventional '}>Conventional</MenuItem>
                             <MenuItem value={'Modular'}>Modular</MenuItem>
                            
                    </Select>
                </FormControl>
                </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Duration" variant="outlined" size="small"
                        name='duration'
                                onChange={(e) => setCurriculumData({ ...curriculumData, duration: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Number of Semester" variant="outlined" size="small"
                        name='number_of_semester'
                                onChange={(e) => setCurriculumData({ ...curriculumData, number_of_semester: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Approved Year" variant="outlined" size="small"
                        name='approved_year'
                                onChange={(e) => setCurriculumData({ ...curriculumData, approved_year: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Minimum Credit" variant="outlined" size="small"
                        name='minimum_credit'
                                onChange={(e) => setCurriculumData({ ...curriculumData, minimum_credit: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Academic Commission Minute" variant="outlined" size="small"
                        name='academic_commision_minute'
                                onChange={(e) => setCurriculumData({ ...curriculumData, academic_commission_minute_number: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Senet Minute Number" variant="outlined" size="small"
                        name='senete_minute_number'
                                onChange={(e) => setCurriculumData({ ...curriculumData, senate_minute_number: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Curriculum Document" variant="outlined" size="small"
                        name='curriculum_document'
                                onChange={(e) => setCurriculumData({ ...curriculumData, curriculum_document: e.target.value })}
                        />
                </Grid>
            </Grid>
            </CardContent>
            
            <Grid container spacing={3} style={{marginTop:'5px', backgroundColor:'white'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' style={{width:'200px'}} type='submit'>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid>
            
          </form>
        </div>
     
  )
}

export default Add_Curriculum