import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createWithdrawal } from '../action/withdrawal.action';
import { deleteStudent, getStudents } from '../action/student.action';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
function Add_Withdrawal() {
    const [withdrawalData, setWithdrawalData] = useState({
      
        student_id:'', date:'', reason:'',phone:'', letter:'', remark :''
   
    })

    
  

  const staffRows =  useSelector((state) => state.studentReducer);

  const datas = staffRows;

  const dispatch = useDispatch();
    const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(createWithdrawal(withdrawalData)); 
      datas.map((data) => {
        if (withdrawalData.student_id == data.student_id) {
          dispatch(deleteStudent(data._id))
        }
   })   
  }

  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getStudents());
  }, [currentId, dispatch]);

  return (
      <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                  <FormControl  style={{ float:'left', marginLeft:'0px', width:'300px'}}   size="small">
                    <InputLabel id="demo-simple-select-label">Student Id</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={withdrawalData.student_id}
                    name='student_id'
                    onChange={(e) => setWithdrawalData({ ...withdrawalData, student_id: e.target.value })}
                                >
                                    {
                                        datas.map((data) => {
                                            return <MenuItem value={data.student_id}>{data.student_id}</MenuItem>
                                        })
                                    }
                          
                         
                    </Select>
                </FormControl>
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