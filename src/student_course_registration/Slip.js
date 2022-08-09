// import React from 'react'
// import { Box, Button, Grid } from '@material-ui/core'
// import Slip_Table from './Slip_Table'
// function Slip() {
//   return (
//     <div>
//          <Box sx={style} style={{width:'1000px', height:'600px'}}>
//                             <Grid container >
//                               <Grid item xs={12} md={12} sm={12}>
//                                 <Typography id="modal-modal-title" variant="h4" component="h4">
//                                   <center>
//                                       ADDIS ABABA SCIENCE AND TECHNOLOGY UNIVERSITY   
//                                   </center>
//                                 </Typography>
//                                 <Typography id="modal-modal-title" variant="h6" component="h6">
//                                   <center>
//                                       College of Electrical and Mechanical Engineering  
//                                   </center>
//                                 </Typography>
//                               </Grid>
//                               <Grid item xs={12} md={12} sm={12} >
//                                 <hr/>
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="div" component="div">
//                                         Stream: {data[0].stream} stream
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="div" component="div">
//                                         Year: {data[0].attendance_year}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                         Adm.Classification: {data.admission_classification}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                         Semester: {data[0].semester}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                         Program: {data[0].program}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                         AC Year: {data[0].academic_year}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                      Student's Name: {data[0].student_first_name} {data.student_middle_name} {data.student_last_name}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
//                                 <center>
//                                   <Typography id="modal-modal-title" variant="p" component="p">
//                                         ID No.: {data[0].student_id}
//                                   </Typography>
//                                 </center> 
//                               </Grid>
//                               <Grid item xs={12} md={12} sm={12}>
//                                 <center>
//                                    <Slip_Table data={data} />
//                                 </center>
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6}>
//                                 <center>
//                                   <Button variant='contained'  color='primary'>Print</Button>
//                                 </center>
//                               </Grid>
//                               <Grid item xs={6} md={6} sm={6}>
//                                 <center>
//                                    <Button variant='contained'  color='primary'>Cancel</Button>
//                                 </center>
//                               </Grid>
//                             </Grid>
//                         </Box> 
//     </div>
//   )
// }

// export default Slip