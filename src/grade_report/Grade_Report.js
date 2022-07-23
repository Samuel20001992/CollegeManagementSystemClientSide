import React,{useState, useEffect} from 'react'
import Header from '../others/Header';
import { Box } from '@mui/system';
import { Grid, Typography, Button} from '@mui/material';
import Semester_Grade_Report_Table from './Semester_Grade_Report_Table';
import {Modal} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStudent } from "../action/student_course_registration.action";
import { getSemester_Grades } from '../action/semester_grade.action';
import { createTotal, getTotal, updateTotal } from '../action/totals.action';
 
function Grade_Report(props) {

const dispatch = useDispatch();
  
  
    // dispatch(getSemester_Grades());
 
  

  const courseRows =  useSelector((state) => state.semester_gradeReducer);

  const datas = courseRows;
  let a = {};
  const handleSetUP = () => {
    datas.map((data) => {
      if (data.student_id == props.rows[0].student_id) {
        a = data;
    }
  })
}

  return (
    <div>
      {console.log(props.rows[0].attendance_year)}
          <Box  style={{ marginTop:'40px'}}>
                            <Grid container >
                              <Grid item xs={12} md={12} sm={12}>
                                <Typography id="modal-modal-title" variant="h4" component="h4">
                                  <center>
                                      ADDIS ABABA SCIENCE AND TECHNOLOGY UNIVERSITY   
                                  </center>
                                </Typography>
                                </Grid>
                                <Grid item xs={12} md={12} sm={12}>
                                <Typography id="modal-modal-title" variant="h6" component="h6">
                                  <center>
                                      College of Electrical and Mechanical Engineering  
                                  </center>
                                </Typography>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12}>
                                <Typography id="modal-modal-title" variant="h6" component="h6">
                                  <center>
                                      Grade Report
                                  </center>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={12} sm={12} >
                                <hr/>
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="div" component="div">
                                        Stream: Software Engineering
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="div" component="div">
                                        Year: {props.rows[0].attendance_year}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Adm.Classification: Regular
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Semester:{props.rows[0].semester}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Program: Degree
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        AC Year: {props.rows[0].academic_year}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Student's Name: Samuel Hailemariam Seifu
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        ID No.: {props.rows[0].student_id}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={12} md={12} sm={12}>
                                <center>
                                    <Semester_Grade_Report_Table rows={props.rows} />
                                </center>
                            </Grid>
                            {/* <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Pevious Total Credit : {a.previous_total_credit}
                                  </Typography>
                                </center> 
                            </Grid>
                            <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                            <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Semester Credit : {a.total_credit}
                                  </Typography>
                                </center> 
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Semester GP : {a.current_total_grade_point}
                                  </Typography>
                                </center> 
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                         Total GP : {parseFloat(a.current_total_grade_point) + parseFloat(a.previous_total_point)}
                                  </Typography>
                                </center> 
                              </Grid>
                      <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Semester GPA :{a.GPA}
                                  </Typography>
                                </center> 
                  </Grid>
                  <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                         CGPA : {a.CGPA}
                                  </Typography>
                                </center> 
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} style={{ align: 'right', float:'right', marginBottom:'20px'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                         Remark : Promoted
                                  </Typography>
                                </center> 
                  </Grid> */}
                  <Grid item xs={6} md={6} sm={6}>
                                <center>
                                  <Button variant='contained'  color='primary'>Print</Button>
                                </center>
                              </Grid>
                              <Grid item xs={6} md={6} sm={6}>
                                <center>
                                   <Button variant='contained'  color='primary'>Cancel</Button>
                                </center>
                              </Grid>
                            </Grid>
                        </Box>
    </div>
  )
}

export default Grade_Report