import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStudent_Details, getStudent_Details } from '../action/student_detail.action';

function View_Student(props) {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(()=>{
    dispatch(getOneStudent_Details(props.student_id));
  },[currentId, dispatch])
 

  const data = useSelector((state) => state.student_detailReducer);


  return (
    <div>
      {console.log("data " + data)}
      <center>
        <Typography variant='subtitle'>Student Detail Information</Typography>
      </center>
      <Typography variant='subtitle'>{data[0].photo}</Typography><br/>
      <Typography variant='subtitle'>{data[0].student_id}</Typography><br/>
      <Typography variant='subtitle'>{data[0].first_name}{" "} {data[0].middle_name} {" " }{data[0].last_name}</Typography> <br/>
      <Typography variant='subtitle'>{data[0].gender}</Typography><br/>
      <Typography variant='subtitle'>{data[0].email}</Typography><br/>
      <Typography variant='subtitle'>{data[0].phone}</Typography><br/>
    </div>
  )
}

export default View_Student