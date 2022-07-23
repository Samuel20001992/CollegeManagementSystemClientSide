import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, CardContent, FormControl, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const HighSchool = (props) => {
    const [year1, setYear1] = useState(0);
    const handleYear1 = () => {
        
    }

    const years = ['2002', '2003', '2004'];
 
    const [year2, setYear2] = useState(0);
    const handleYear2 = () => {
        
    }
    
    return (
       <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={3}>
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
                                onChange={(e) => props.setApplicantData({ ...props.applicantData, grad10_national_exam: e.target.files[0] })}
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
        </Grid>
      </CardContent>
       
        
    );
}

export const Degree = () => {
    return (
        <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> Degree</Typography>
                </Grid> 
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Temporary or Original Degree BA/BSC" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Student Copy" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Offical transcript" variant="outlined"  size='small' />
            </Grid>
        </Grid>
        </CardContent>
    )
}

export const TVET = () => {
    const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
    const [level, setLevel] = useState();
    const handleLevel = (event) => {
        setLevel(event.target.value)
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
    return (
        <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> TVET</Typography>
                </Grid> 
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Grade 10 national Exam certificate" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}   sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">Grade 10 National Exam Taken Year</InputLabel>
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
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Grade 9 - 10 transcript" variant="outlined"  size='small' />
            </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}   sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">Grade 10 National Exam Taken Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        label="Educational Background"
                        onChange={handleLevel}
                            >
                                {
                                    levels.map((level) => {
                                        return <MenuItem value={level}>{level}</MenuItem>
                                    })
                                }
                                
                                
                        </Select>
                    </FormControl>
                    </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="COC level certificate id" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}   sx={{ maxWidth: 520 }}>
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
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="COC level certificate" variant="outlined"  size='small' />
            </Grid>
        </Grid>
        </CardContent>
    )
}



export const Masters = () => {
    return (
        <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> Masters</Typography>
                </Grid> 
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Temporary or Original Degree MA/MSC" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Student Copy" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Offical transcript" variant="outlined"  size='small' />
            </Grid>
        </Grid>
        </CardContent>
    )
}

export const Transfer = () => {
    const background = [
        'High School',
        'Degree',
        'TVET',
        'Masters',
        'Equivalence'
    ]
    const [education, setEducation] = useState();
    const handleEducation = (event) => {
        setEducation(event.target.value);
    }
    return (
        <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> Transfer</Typography>
                </Grid> 
                <Grid item xs={6} md={4} sm ={6}>
                    <FormControl  style={{ float:'left', marginLeft:'90px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Admission Based on</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={education}
                            label="Admission Based on"
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
            
                
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Previous institution name" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Student Copy" variant="outlined"  size='small' />
            </Grid>
            </Grid>
            {education == 'High School' ?
                    <HighSchool/> : null
                    
            } 
            {education == 'Degree' ?
                    <Degree/> : null
                    
            }
            {education == 'Masters' ?
                    <Masters/> : null
                    
            } 
            {education == 'Equivalence' ?
                <Equivalence/> : null
                    
            }
            {education == 'TVET' ?
                <TVET/> : null
                    
            }
        </CardContent>
    )
}

export const Equivalence = () => {
    const years = [
    '2013','20014','2015','2016','2017','2018',
    ]
    const [year1, setYear1] = useState();
    const handleYear1 = (event) => {
        setYear1(event.target.value);
    }
    return (
        <CardContent
            component="form"
            
            noValidate
            autoComplete="off"
            className='d-flex'
            style={{
                backgroundColor: 'white',
            }}
        >
       
        <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='h6' style={{float:'Left'}}> Equivalence</Typography>
                </Grid>   
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="HERQA reference number" variant="outlined"  size='small' />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left', marginLeft:'90px', width:'300px'}}  sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">HERQA equivaluence letter issued date</InputLabel>
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
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="HERQA equivaluence letter" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{align:'left', width:'300px'}} label="Educational documents" variant="outlined"  size='small' />
            </Grid>
        </Grid>
        </CardContent>
    )
}

