import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createWithdrawal } from '../action/withdrawal.action';
import { deleteStudent, getStudents } from '../action/student.action';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
function Add_Withdrawal() {
  
  const dispatch = useDispatch();
  const [withdrawalData, setWithdrawalData] = useState({
      
        student_id:'', date:'', reason:'',phone:'', letter:'', remark :'',
         first_name:'', middle_name:'', last_name:'',gender:'', department:'',
         program:'', learning_modality:'', photo:''
    })

    
    const [currentId, setCurrentId] = useState(0);
    useEffect(() => {
      dispatch(getStudents());
    }, [currentId, dispatch]);

  const studentRows =  useSelector((state) => state.studentReducer);

  const datas = studentRows;

  
    const handleSubmit = async (e) => {
    e.preventDefault();
    let x = 0;
    datas.map((data)=>{
      if(data.student_id == withdrawalData.student_id){
        x++;
      }
    }) 
    
    if(x == 0){
      alert("The student Id doesn't exist")
      return;
    }

      datas.map((data) => {
        if (withdrawalData.student_id == data.student_id) {
          withdrawalData.first_name = data.first_name;
          withdrawalData.middle_name = data.middle_name;
          withdrawalData.last_name = data.last_name;
          withdrawalData.gender = data.gender;
          withdrawalData.department = data.department;
          withdrawalData.program = data.program;
          withdrawalData.learning_modality = data.learning_modality;
          withdrawalData.photo = data.photo;

          dispatch(createWithdrawal(withdrawalData)); 
          dispatch(deleteStudent(data._id))
        }
   })   
  }

  

  return (
      <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Student Id" variant="outlined" size="small" multiline
                    onChange={(e) => setWithdrawalData({ ...withdrawalData, student_id: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Reason" variant="outlined" size="small" multiline
                  onChange={(e) => setWithdrawalData({ ...withdrawalData, reason: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Letter" variant="outlined" size="small"
                  onChange={(e) => setWithdrawalData({ ...withdrawalData, letter: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Remark" variant="outlined" size="small" multiline
                  onChange={(e) => setWithdrawalData({ ...withdrawalData, remark: e.target.value })}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6} >
                    <Button color='primary' variant='contained' type='submit'>Submit</Button>
                </Grid>
                <Grid item xs={6} md={6} sm={6}>
                    <Button color='primary' variant='contained'>Reset</Button>
                </Grid>
              </Grid>
              </form>
       </div>
  )
}

export default Add_Withdrawal