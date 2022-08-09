import React,{useState, useEffect} from 'react'
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createReadmission } from '../action/readmission.action';
import { deleteWithdrawal, getWithdrawals } from '../action/withdrawal.action';
import { createStudent } from '../action/student.action';
function Add_Readmission(props) {

    const [readmissionData, setReadmissionData] = useState({
        student_id:'', date:'', reason:'',withdrawal_date:'',phone:'', letter:'', remark:''
    })

    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
      e.preventDefault();
      readmissionData.student_id = props.student_id;
      dispatch(createReadmission(readmissionData)); 
      dispatch(createStudent(props.value));
     dispatch(deleteWithdrawal(props.value._id))
  }



  return (
      <div>
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Reason" variant="outlined" size="small" multiline
                  onChange={(e) => setReadmissionData({ ...readmissionData, reason: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Letter" variant="outlined" size="small"
                  onChange={(e) => setReadmissionData({ ...readmissionData, letter: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={12} sm={12}>
                  < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Remark" variant="outlined" size="small" multiline
                  onChange={(e) => setReadmissionData({ ...readmissionData, remark: e.target.value })}
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

export default Add_Readmission