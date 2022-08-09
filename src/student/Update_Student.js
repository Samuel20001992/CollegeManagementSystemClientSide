import React,{useState, useEffect} from 'react'
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import {Typography} from '@mui/material';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Equivalence, HighSchool, Masters, Transfer, TVET } from '../applicant/Educational_Background';
import { Degree } from '../applicant/Educational_Background';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartments } from '../action/department.action';
import { Scrollbar } from 'react-scrollbars-custom';
import {
    Region,
    subcity,
    zones,
    zone_1_woreda,
    zone_2_woreda,
    zone_3_woreda,
    zone_4_woreda,
    addis_woreda,
    akaky_woreda,
    arada_woreda,
    bole_woreda,
    gullele_woreda,
    kirkos_woreda,
    yeka_woreda,
    nifas_woreda,
    lideta_woreda,
    kolfe_woreda,
    lafto_woreda
  
  } from '../applicant/Arrays';
import { updateStudent } from '../action/student.action';
import { updateStudent_Detail } from '../action/student_detail.action';
  


function Update_Student(props) {

const student = props.data;


  
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

    const [zone, setCountry] = useState('');
    const [regions, setContinent] = useState('');
  const [city, setCity] = useState('');
  const [woreda, setWoreda] = useState('');
    const arr = useState();
    const handleChange1 = (event) => {
    setContinent(event.target.value);
    };
    
const handleChange2 = (event) => {
    setCountry(event.target.value);
};
    
  const handleChange3 = (event) => {
    setCity(event.target.value);
    console.log('city ' + city);
  };

const handleChange4 = (event) => {
    setWoreda(event.target.value);
    console.log('woreda ' + woreda);
  };
    
   

    const handleDepatment = (e) => {
        setstudentData({ ...studentData, department: e.target.value })
    }

    const handleProgram = (e) => {
     setstudentData({ ...studentData, program: e.target.value })   
    }
    
    const handleLearningModality = (e) => {
        setstudentData({...studentData, learning_modality:e.target.value})
    }

    const handleGender = (e) => {
        setstudentData({...studentData, gender:e.target.value})
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

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        console.log('photo ' + studentData.photo.name);

            dispatch(updateStudent_Detail(student._id,studentData)); 
            dispatch(updateStudent(student._id,studentData));
            
            window.location.reload()
        
    }
    
    
      const [studentData, setstudentData] = useState({
        first_name: student.first_name, middle_name: student.middle_name, last_name: student.last_name,
        gender: student.gender, phone:student.phone,email:student.email, facility:student.facility, department:student.department, program:student.program,
        learning_modality:student.learning_modality, photo: student.photo, section: student.section, attendance_year: student.attendance_year,
        fs_number: student.fs_number, account_number: student.account_number, bank: student.bank, remark: student.remark, 
        birth_date: student.birth_date,
        place_of_birth_region: student.place_of_birth_region,
        place_of_birth_zone: student.place_of_birth_zone,
        place_of_birth_woreda: student.place_of_birth_woreda,
        place_of_birth_house_no: student.place_of_birth_house_no,
        place_of_birth_city: student.place_of_birth_city,
        address_region: student.address_region,
        address_zone: student.address_zone,
        address_woreda: student.addis_woreda,
        address_house_no: student.address_house_no,
        address_city: student.address_city,
        emergency_contact_first_name: student.emergency_contact_first_name,
        emergency_contact_middle_name: student.emergency_contact_middle_name,
        emergency_contact_last_name: student.emergency_contact_last_name,
        emergency_contact_address_region: student.emergency_contact_address_region,
        emergency_contact_address_zone: student.emergency_contact_address_zone,
        emergency_contact_address_woreda: student.emergency_contact_address_woreda,
        emergency_contact_address_house_no: student.emergency_contact_address_house_no,
        emergency_contact_address_city: student.emergency_contact_address_city,
        emergency_contact_phone_no: student.emergency_contact_phone_no,
        emergency_contact_email: student.emergency_contact_email,
        emergency_contact_relationship: student.emergency_contact_relationship,
        status: student.status,
        is_graduated: ''
    })


    return (
        <div style={{ backgroundColor: '#E7E9EB' }}>
        <Scrollbar style={{ width: 800, height: 500 }}>
        <form   encType='multipart/form-data' onSubmit={handleSubmit}>
          
          
          <CardContent style={{backgroundColor:'white', margin:'6px'}}>
            <Grid container spacing={1} style={{padding:'6px'}}>
                <Grid item xs={12} md={12} sm={12}>
                    <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Basic Information</Typography>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px'}} label="First Name" variant="outlined" size="small"
                                name='first_name' onChange={(e) => setstudentData({ ...studentData, first_name: e.target.value })}
                                value={studentData.first_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }}  label="Middle Name" variant="outlined" size="small"
                                name='middle_name' onChange={(e) => setstudentData({ ...studentData, middle_name: e.target.value })}
                             value={studentData.middle_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Last Name" variant="outlined" size="small"
                                    name='last_name' onChange={(e) => setstudentData({ ...studentData, last_name: e.target.value })}
                            value={studentData.last_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                     <FormControl  style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={studentData.gender}
                    label="Gender"
                    onChange={handleGender}
                        >
                         <MenuItem value={'Male'}>Male</MenuItem>
                          <MenuItem value={'Female'}>Female</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Phone" variant="outlined" size="small"
                                    name='phone' onChange={(e) => setstudentData({ ...studentData, phone: e.target.value })}
                            value={studentData.phone}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Email" variant="outlined" size="small"
                                    name='email' onChange={(e) => setstudentData({ ...studentData, email: e.target.value })}
                            value={studentData.email}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left',  marginLeft:'10px' }} label="Bank" variant="outlined" size="small"
                                name='bank' onChange={(e) => setstudentData({ ...studentData, bank: e.target.value })}
                           value={studentData.bank}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Account Number" variant="outlined" size="small"
                                name='account_number' onChange={(e) => setstudentData({ ...studentData, account_number: e.target.value })}
                            value={studentData.account_number}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6} style={{ width: '230px', align: 'left'}}>
                    <input
                                type="file"
                                accept='.png, .jpg, .jpeng'
                                name='grad10_national_exam'
                                onChange={(e) => setstudentData({ ...studentData, photo: "je;;" })}
                               value = {studentData.photo}
                            />
                </Grid>
                
            </Grid>
        </CardContent>

           <CardContent style={{backgroundColor:'white', margin:'6px'}}>
                <Grid container spacing={1} style={{ padding: '6px' }}>          
                    <Grid item xs={12} md={12} sm={12}>
                        <center>
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Birth </Typography>
                        </center>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Birth Date" variant="outlined" size="small"
                             onChange={(e) => setstudentData({ ...studentData, birth_date: e.target.value })}
                            value={studentData.birth_date}
                            />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            <FormControl style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                                <InputLabel id="demo-simple-select-label">Birth Place Region</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentData.place_of_birth_region}
                                label="Birth place address"
                                onChange={(e) => setstudentData({ ...studentData, place_of_birth_region: e.target.value })}
                                    >
                                {Region.map((reg) => {
                                return <MenuItem value={reg}>{reg}</MenuItem>
                                })}
                                
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                                
                        <InputLabel id="demo-simple-select-label">Birth Place Zone / Subcity </InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.place_of_birth_zone}
                        label="Zone / Subcity"
                        onChange={(e) => setstudentData({ ...studentData, place_of_birth_zone: e.target.value })}
                            >
                        {studentData.place_of_birth_region == 'Addis Ababa' ?
                            subcity.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.place_of_birth_region == 'Amhara' ?
                            zones.map((cy) => {
                                    return <MenuItem value={cy}>{cy}</MenuItem>
                            }): null
                        }
                        {studentData.place_of_birth_region  == 'Afar' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Benishangul - Gumuz' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                    
                        {studentData.place_of_birth_region  == 'Gambela' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Harari' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Oromia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Somalia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Southern Nations, Nationalities Peoples' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_region  == 'Sidama' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                            
                        
                        
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                        <InputLabel id="demo-simple-select-label">Birth Place Woreda</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.place_of_birth_woreda}
                        label="Woreda"
                        onChange={(e) => setstudentData({ ...studentData, place_of_birth_woreda: e.target.value })}
                        >
                        {studentData.place_of_birth_zone == 'Zone 1' ?
                            zone_1_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.place_of_birth_zone == 'Zone 2' ?
                            zone_2_woreda.map((ct) => {
                                    return <MenuItem value={ct}>{ct}</MenuItem>
                                }): null
                        }

                        {studentData.place_of_birth_zone == 'Zone 3' ?
                            zone_3_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Zone 4' ?
                            zone_4_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.place_of_birth_zone == 'Addis Ketema' ?
                            addis_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.place_of_birth_zone == 'Akaky Kaliti' ?
                            akaky_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.place_of_birth_zone == 'Arada' ?
                            arada_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Bole' ?
                            bole_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Gullele' ?
                            gullele_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Kirkos' ?
                            kirkos_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Kolfe Keranio' ?
                            kolfe_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Lideta' ?
                            lideta_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Nifas Silk' ?
                            nifas_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                            }
                            {studentData.place_of_birth_zone == 'Lafto' ?
                            lafto_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.place_of_birth_zone == 'Yeka' ?
                            yeka_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Birth Place City" variant="outlined" size="small"
                                                onChange={(e) => setstudentData({ ...studentData, place_of_birth_city: e.target.value })}
                                            value={studentData.place_of_birth_city}
                                            />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Birth Place House Number" variant="outlined" size="small"
                                name='attendance_year' onChange={(e) => setstudentData({ ...studentData, place_of_birth_house_no: e.target.value })}
                            value={studentData.place_of_birth_house_no}
                            />
                    </Grid>
      
           
                </Grid>
        </CardContent>     
    
            <CardContent style={{backgroundColor:'white', margin:'6px'}}>
                <Grid container spacing={1} style={{ padding: '6px' }}>          
                    <Grid item xs={12} md={12} sm={12}>
                        <center>
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Current Address</Typography>
                        </center>
                    </Grid>
                    
                    <Grid item xs={6} md={4} sm={6}>
                            <FormControl style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                                <InputLabel id="demo-simple-select-label">Current Region</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentData.address_region}
                                label="Region"
                                onChange={(e) => setstudentData({ ...studentData, address_region: e.target.value })}
                                    >
                                {Region.map((reg) => {
                                return <MenuItem value={reg}>{reg}</MenuItem>
                                })}
                                
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                                
                        <InputLabel id="demo-simple-select-label">Current Zone / Subcity </InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.address_zone}
                        label="Zone / Subcity"
                        onChange={(e) => setstudentData({ ...studentData, address_zone: e.target.value })}
                            >
                        {studentData.address_region == 'Addis Ababa' ?
                            subcity.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.address_region == 'Amhara' ?
                            zones.map((cy) => {
                                    return <MenuItem value={cy}>{cy}</MenuItem>
                            }): null
                        }
                        {studentData.address_region == 'Afar' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Benishangul - Gumuz' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                    
                        {studentData.address_region == 'Gambela' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Harari' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Oromia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Somalia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Southern Nations, Nationalities Peoples' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.address_region == 'Sidama' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                            
                        
                        
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                        <InputLabel id="demo-simple-select-label">Current Woreda</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.address_woreda}
                        label="Woreda"
                        onChange={(e) => setstudentData({ ...studentData, address_woreda: e.target.value })}
                        >
                        {studentData.address_zone == 'Zone 1' ?
                            zone_1_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.address_zone == 'Zone 2' ?
                            zone_2_woreda.map((ct) => {
                                    return <MenuItem value={ct}>{ct}</MenuItem>
                                }): null
                        }

                        {studentData.address_zone == 'Zone 3' ?
                            zone_3_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zoneone == 'Zone 4' ?
                            zone_4_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.address_zone == 'Addis Ketema' ?
                            addis_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.address_zone == 'Akaky Kaliti' ?
                            akaky_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.address_zone == 'Arada' ?
                            arada_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Bole' ?
                            bole_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Gullele' ?
                            gullele_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Kirkos' ?
                            kirkos_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Kolfe Keranio' ?
                            kolfe_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Lideta' ?
                            lideta_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Nifas Silk' ?
                            nifas_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                            }
                            {zone == 'Lafto' ?
                            lafto_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.address_zone == 'Yeka' ?
                            yeka_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Current City" variant="outlined" size="small"
                                             onChange={(e) => setstudentData({ ...studentData, address_city: e.target.value })}
                                            value={studentData.address_city}
                                            />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Current House Number" variant="outlined" size="small"
                              onChange={(e) => setstudentData({ ...studentData, address_house_no: e.target.value })}
                            value={student.address_house_no}
                            />
                    </Grid>
      
                    <Grid item xs={6} md={4} sm={6}>
                            <FormControl style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                                <InputLabel id="demo-simple-select-label">Is Graduated</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentData.is_graduated}
                                label="Region"
                                onChange={(e) => setstudentData({ ...studentData, is_graduated: e.target.value })}
                                    >
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                                
                                </Select>
                            </FormControl>
                    </Grid>
                  
                </Grid>
        </CardContent>  
             <CardContent style={{backgroundColor:'white', margin:'10px'}}>
            <Grid container spacing={1} style={{padding:'10px'}}>
            <Grid item xs={12} md={12} sm={12}>
                        <center>
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Education</Typography>
                        </center>
                    </Grid>
                <Grid item xs={6} md={4} sm={6} >
                    < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Facility" variant="outlined" size="small"
                            name='facility' onChange={(e) => setstudentData({ ...studentData, facility: e.target.value })}
                    value={studentData.facility}
                    />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Department</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={student.department}
                    label="department"
                    onChange={handleDepatment}
                    >
                    {
                        departments.map((department) => {
                            return <MenuItem value={department.department_name}>{department.department_name}</MenuItem>
                        })
                    }


                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                    <FormControl  style={{ float:'left', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Program</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={studentData.program}
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
                <FormControl  style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Learning Modality</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={studentData.learning_modality}
                            label="Learning Modality"
                            onChange={handleLearningModality}
                        >
                             <MenuItem value={'Regular'}>Regular</MenuItem>
                             <MenuItem value={'Extension'}>Extension</MenuItem>
                            
                            
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Attendance Year" variant="outlined" size="small"
                                name='attendance_year' onChange={(e) => setstudentData({ ...studentData, attendance_year: e.target.value })}
                            value={studentData.attendance_year}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="FS number" variant="outlined" size="small"
                                    name='fs_number' onChange={(e) => setstudentData({ ...studentData, fs_number: e.target.value })}
                            value={studentData.fs_number}
                            />
                </Grid>
                
                
                {/* <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Remark" variant="outlined" size="small"
                            value={studentData.remark}
                            name='remark' onChange={(e) => setstudentData({ ...studentData, remark: e.target.value })}/>
                </Grid> */}
                
                            </Grid>
              </CardContent>  
            <CardContent style={{backgroundColor:'white', margin:'10px'}}>
                <Grid container spacing={1} style={{ padding: '10px' }}> 
                <Grid item xs={12} md={12} sm={12}>
                      
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Emergency Contact Basic Information</Typography>
                       
                    </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Emergencey Contact First Name " variant="outlined" size="small"
                             onChange={(e) => setstudentData({ ...studentData, emergency_contact_first_name: e.target.value })}
                            value={studentData.emergency_contact_first_name}
                            />
                                    </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Emergencey Contact Middle Name" variant="outlined" size="small"
                             onChange={(e) => setstudentData({ ...studentData, emergency_contact_middle_name: e.target.value })}
                            value={studentData.emergency_contact_middle_name}
                            />
                </Grid>                    
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Emergencey Contact Last Name" variant="outlined" size="small"
                             onChange={(e) => setstudentData({ ...studentData, emergency_contact_last_name: e.target.value })}
                            value={studentData.emergency_contact_last_name}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="Emergencey Contact Email " variant="outlined" size="small"
                            onChange={(e) => setstudentData({ ...studentData, emergency_contact_email: e.target.value })}
                            value={studentData.emergency_contact_email}
                            />
                </Grid>
                <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Emergencey Contact Relationship" variant="outlined" size="small"
                            onChange={(e) => setstudentData({ ...studentData, emergency_contact_phone: e.target.value })}
                            value={studentData.emergency_contact_phone}
                            />
                </Grid>
                </Grid>
             </CardContent>
          <CardContent style={{backgroundColor:'white', margin:'10px'}}>
                <Grid container spacing={1} style={{ padding: '10px' }}> 
                <Grid item xs={12} md={12} sm={12}>
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Emmergency Contact Address</Typography>
                        
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            <FormControl style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
                                <InputLabel id="demo-simple-select-label">Region</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentData.emergency_contact_address_region}
                                label="Region"
                                onChange={(e) => setstudentData({ ...studentData, emergency_contact_address_region: e.target.value })}
                                    >
                                {Region.map((reg) => {
                                return <MenuItem value={reg}>{reg}</MenuItem>
                                })}
                                
                                </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                                
                        <InputLabel id="demo-simple-select-label">Zone / Subcity </InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.emergency_contact_address_zone}
                        label="Zone / Subcity"
                        onChange={(e) => setstudentData({ ...studentData, emergency_contact_address_zone: e.target.value })}
                            >
                        {studentData.emergency_contact_address_region == 'Addis Ababa' ?
                            subcity.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.emergency_contact_address_region == 'Amhara' ?
                            zones.map((cy) => {
                                    return <MenuItem value={cy}>{cy}</MenuItem>
                            }): null
                        }
                        {studentData.emergency_contact_address_region == 'Afar' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Benishangul - Gumuz' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                    
                        {studentData.emergency_contact_address_region == 'Gambela' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Harari' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Oromia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Somalia' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Southern Nations, Nationalities Peoples' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_region == 'Sidama' ?
                            zones.map((cy) => {
                            return <MenuItem value={cy}>{cy}</MenuItem>
                            }) : null
                        }
                            
                        
                        
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>

                        <FormControl style={{ float:'left', width:'230px'}}   size="small">
                        <InputLabel id="demo-simple-select-label">Woreda</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={studentData.emergency_contact_address_woreda}
                        label="Woreda"
                        onChange={(e) => setstudentData({ ...studentData, emergency_contact_address_woreda: e.target.value })}
                        >
                        {studentData.emergency_contact_address_zone == 'Zone 1' ?
                            zone_1_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {
                            studentData.emergency_contact_address_zone == 'Zone 2' ?
                            zone_2_woreda.map((ct) => {
                                    return <MenuItem value={ct}>{ct}</MenuItem>
                                }): null
                        }

                        {studentData.emergency_contact_address_zone == 'Zone 3' ?
                            zone_3_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Zone 4' ?
                            zone_4_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.emergency_contact_address_zone == 'Addis Ketema' ?
                            addis_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.emergency_contact_address_zone == 'Akaky Kaliti' ?
                            akaky_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }

                        {studentData.emergency_contact_address_zone == 'Arada' ?
                            arada_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Bole' ?
                            bole_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Gullele' ?
                            gullele_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Kirkos' ?
                            kirkos_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Kolfe Keranio' ?
                            kolfe_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Lideta' ?
                            lideta_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Nifas Silk' ?
                            nifas_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                            }
                            {zone == 'Lafto' ?
                            lafto_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        {studentData.emergency_contact_address_zone == 'Yeka' ?
                            yeka_woreda.map((ct) => {
                            return <MenuItem value={ct}>{ct}</MenuItem>
                            }) : null
                        }
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left', marginLeft:'10px' }} label="City" variant="outlined" size="small"
                                            onChange={(e) => setstudentData({ ...studentData, emergency_contact_address_city: e.target.value })}
                                            value={studentData.emergency_contact_address_city}
                                            />
                    </Grid>
                    <Grid item xs={6} md={4} sm={6}>
                            < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="House Number" variant="outlined" size="small"
                            onChange={(e) => setstudentData({ ...studentData, emergency_contact_address_house_no: e.target.value })}
                            value={studentData.emergency_contact_address_house_no}
                            />
                    </Grid> 
                </Grid>
            </CardContent>   
          

          <CardContent style={{backgroundColor:'white', margin:'10px'}}>
             <Grid container spacing={1} style={{padding:'10px'}}> 
             <Grid item xs={12} md={12} sm={12}>
                        <Typography variant='subtitle' style={{float:'left',  color:'gray'}}>Educational Background</Typography>
                        
                    </Grid>     
            <Grid item xs={6} md={4} sm={6}>
                <FormControl  style={{ float:'left', marginLeft:'10px', width:'230px'}}   size="small">
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
                                    

         {education == 'High School' ?
                    (
               <> 
               
            <Grid item xs={6} md={4} sm={6}>
               <TextField id="outlined-basic" style={{ width:'230px'}} label="Grade 12 National Exam Result Certificate" variant="outlined"  size='small' />
            </Grid>
            <Grid item xs={6} md={4} sm={6}>
                <FormControl size='small' style={{ float:'left',  width:'230px'}}   sx={{ maxWidth: 520 }}>
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
                <FormControl size='small' style={{ float:'left',  width:'230px', marginLeft:'10px'}}  sx={{ maxWidth: 520 }}>
                        <InputLabel id="demo-simple-select-label">Grade 10 National Exam Taken Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={year2}
                        label="Grade 10 National Exam Taken Year"
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
               <TextField id="outlined-basic" style={{width:'230px'}} label="Grade 9 - 12 Transcript" variant="outlined" size='small' />
                                                </Grid>
                                                </> 
        ): null
                    
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
            
         </Grid> 
        </CardContent>
      
            
             <Grid container spacing={1} style={{marginTop:'20px', backgroundColor:'white', padding:'20px'}}>
              <Grid item xs={6}>
                <Button variant='contained' color='primary' type='submit' style={{width:'200px'}}>Submit</Button>      
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' color='secondary' style={{width:'200px'}} >Reset</Button>      
              </Grid>
            </Grid> 
         </form>   
         </Scrollbar>    
        </div>
     
  )
}

export default Update_Student

