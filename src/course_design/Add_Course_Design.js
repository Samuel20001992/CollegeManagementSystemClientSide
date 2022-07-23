import React,{useState, useEffect} from 'react';
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
import { createCourse_Design } from '../action/course_design.action';
function Add_Course_Design() {
    const [courseDesignData, setCourseDesignData] = useState({
        instructor_id:'',
        first_assessment_name: '',
        first_assessment_out_of:'',
        second_assessment_name: '',
        second_assessment_out_of: '',
        third_assessment_name: '',
        third_assessment_out_of: '',
        fourth_assessment_name: '',
        fifth_assessment_out_of: '',
        final_assessment_name: '',
        final_assessment_out_of:'',
        date: '',
        instructor_course_id:''
    })

     const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse_Design(courseDesignData)); 
    }
    
    
    return (
        <div style={{
            backgroundColor: 'white', height: '100vh', border: '1px solid blue' }}>
            <Header />
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <CardContent
            component="form"
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
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Instructor Id" variant="outlined" size="small"
                        name='instructor_id'  onChange={(e) => setCourseDesignData({ ...courseDesignData, instructor_id: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="First Assessment Type" variant="outlined" size="small"
                        name='first_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,first_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="First Assessment Outof" variant="outlined" size="small"
                        name='first_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,first_assessment_out_of: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Second Assessment Type" variant="outlined" size="small"
                        name='second_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,second_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Second Assessment Outof" variant="outlined" size="small"
                        name='second_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,second_assessment_out_of: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Third Assessment Type" variant="outlined" size="small"
                        name='third_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,third_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Third Assessment Outof" variant="outlined" size="small"
                        name='third_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,third_assessment_out_of: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Fourth Assessment Type" variant="outlined" size="small"
                        name='fourth_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,fourth_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Fourth Assessment Outof" variant="outlined" size="small"
                        name='fourth_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,fourth_assessment_out_of: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Fifth Assessment Type" variant="outlined" size="small"
                        name='fifth_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,fifth_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Fifth Assessment Outof" variant="outlined" size="small"
                        name='fifth_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,fifth_assessment_out_of: e.target.value })}
                        />
                </Grid>    
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Final Assessment Type" variant="outlined" size="small"
                        name='final_assessment_name'  onChange={(e) => setCourseDesignData({ ...courseDesignData,final_assessment_name: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Final Assessment Outof" variant="outlined" size="small"
                        name='final_assessment_out_of'  onChange={(e) => setCourseDesignData({ ...courseDesignData,final_assessment_out_of: e.target.value })}
                        />
                </Grid>
                        
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Date" variant="outlined" size="small"
                        name='date'  onChange={(e) => setCourseDesignData({ ...courseDesignData,date: e.target.value })}
                        />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                        < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Instructor Course Id" variant="outlined" size="small"
                        name='instructor_course_id'  onChange={(e) => setCourseDesignData({ ...courseDesignData,instructor_course_id: e.target.value })}
                        />
                </Grid>        
            </Grid>
            </CardContent>
            
            <Grid container spacing={3} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
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

export default Add_Course_Design