import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import TextField from '@mui/material/TextField'; 
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createSlip } from '../action/slip.action';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import { getCourse_Registrations } from '../action/course_registration.action';
import Modal from '@mui/material/Modal';
import Slip_Table from './Slip_Table';
import {createStudent_Course_Registration} from '../action/student_course_registration.action'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



function createData(first_name, middle_name, last_name, gender, phone,email) {
  return {
      first_name,
      middle_name,
      last_name,
      gender,
      phone,
      email
  };
}

const rows = [
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609', 'samuelhailemariam4@gmail.com'),
    createData('Sennay', 'wo', 'fe', 'Male', '0903449609','sennay4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
    createData('Samuel', 'Hailemariam', 'Seifu', 'Male', '0903649609','samuelhailemariam4@gmail.com'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a, b);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el);
}

const headCells = [
  
  {
    id: 'course_code',
    numeric: true,
    disablePadding: false,
    label: 'Course Code',
  },
   {
    id: 'course_title',
    numeric: true,
    disablePadding: false,
    label: 'Course Title',
  },
  {
    id: 'credit hour',
    numeric: true,
    disablePadding: false,
    label: 'Credit Hour',
  },
  
  {
    id: 'opertations',
    numeric: true,
    disablePadding: false,
    label: 'Operations',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
      <div>
        <Typography
          // sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{float:'left'}}
        >
          Student Course Registration Table
        </Typography>
                
      </div>
        
      )}

      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Student_Course_Registration_Table() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('First Name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.course_code);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, course_code) => {
    const selectedIndex = selected.indexOf(course_code);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, course_code);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (course_title) => selected.indexOf(course_title) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

   const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getCourse_Registrations());
  }, [currentId, dispatch]);

  const courseRows =  useSelector((state) => state.course_registrationReducer);

  const rows = courseRows;
  console.log('rows ' + rows)
  const [registration, setRegistration] = useState(
    {
    student_id:'',
    course_offering_id:'',
      course_code: '',
      credit_hour: '',
    course_category_option:'',
      accademic_year: '',
    attendance_year:'',
    instructor_id: '',
    first_assessment: '',
    second_assessment:'',
    third_assessment:'',
    fourth_assessment:'',
    fifth_assessment: '',
    final_assessment: '',
    total:'',
      letter_grade: '',
    grade_point:'',
    semester:'',
    date:'',
    advisor:'',
    registered_by:''
  }
  ) 
 
  
   
  

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = (e, row) => {
    e.preventDefault();
    
    
  };

  
  const handleClose1 = () => setOpen1(false);
  const [choice,setChoice] = useState(false); 
  const records = [10];

  
  
  const handleChoice = (event, row) => {
   

    records.push({course_title: row.course_title,
      course_code: row.course_code,
      credit_hour: row.credit_hour
    }); 
    
    records.map((record) => {
    console.log('record ' + record.course_title);
    });
    
    
     console.log('records ' + records.length);
 }
 
  const [slip, setSlip] = useState({
    stream:'',
    attendance_year:'',
    admission_classification:'',
    program:'',
    semester:'',
    academic_year:'',
    student_first_name:'',
    student_middle_name:'',
    student_last_name:'',
    student_id:'',
    course_title:'',
    course_code:'',
    credit_hour:'',
    lecture_hour:'',
    tutorial_hour:'',
    lab_hour:'',
    category:'',
    option:'',
    remark:''
  })
  
  const handleSubmit = async (e, row) => {
      e.preventDefault();
      slip.course_title = row.course_title;
      slip.course_code = row.course_code;
      slip.credit_hour = row.credit_hour;
      slip.lecture_hour = row.lecture_hour;
      slip.tutorial_hour = row.tutorial_hour;
      slip.lab_hour = row.practical_hour;
      slip.category = row.course_category;
    slip.option = row.course_category_option;
    
    
    // dispatch(); 
    registration.course_code = row.course_code;
    registration.credit_hour = row.credit_hour;
    registration.course_category_option = row.course_category_option;
    registration.course_title = row.course_title;
    dispatch(createStudent_Course_Registration(registration))
    dispatch(createSlip(slip));
    
    }

  
  return (
    <Box sx={{ width: '70%' }}>
      <form autoComplete="off" noValidate>
        <Grid container spacing={1}>
          <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Student Id" variant="outlined" size="small"
              onChange={(e) => {
                setSlip({ ...slip, student_id: e.target.value });
                setRegistration({ ...registration, student_id: e.target.value })
              }}
              
                        />
        </Grid>
          <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Student First Name" variant="outlined" size="small"
                        onChange={(e) => setSlip({ ...slip, student_first_name: e.target.value })}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Student Middle Name" variant="outlined" size="small"
                        onChange={(e) => setSlip({ ...slip, student_middle_name: e.target.value })}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Student Last Name" variant="outlined" size="small"
                        onChange={(e) => setSlip({ ...slip, student_last_name: e.target.value })}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Stream" variant="outlined" size="small"
                        onChange={(e) => setSlip({ ...slip, stream: e.target.value })}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Attendance Year" variant="outlined" size="small"
                        onChange={(e) =>{ setSlip({ ...slip, attendance_year: e.target.value })
                                        setRegistration({...registration, attendance_year: e.target.value })}}           
            />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Accademic Year" variant="outlined" size="small"
              onChange={(e) => {
                setSlip({ ...slip, academic_year: e.target.value })
                setRegistration({ ...registration, academic_year: e.target.value })
              }}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Semester" variant="outlined" size="small"
              onChange={(e) => {
                setSlip({ ...slip, semester: e.target.value })
                setRegistration({ ...registration, semester: e.target.value })
              }}
                        />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }} label="Program" variant="outlined" size="small"
                        onChange={(e) => setSlip({ ...slip, program: e.target.value })}
                        />
        </Grid>
        </Grid>
        
      <Paper sx={{ width: '100%', mb: 2,ml:2,mr:2,mt:2}}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              // rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {rows.map((row, index) => {
                  const isItemSelected = isSelected(row.course_title);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {console.log('rows ' + rows[0].course_code)}
                      <TableCell align="left">{row.course_code}</TableCell>
                      <TableCell align="left">{row.course_title}</TableCell>
                      <TableCell align="left" >{row.credit_hour}</TableCell>
                      <TableCell style={{width:'200px'}}>
                       
                        
                        
                        <Button variant='contained' color='primary' style={{ marginLeft: '10px' }} onClick={(e) => {
                          handleSubmit(e, row);
                           handleOpen1(e, row)
                        }}> Register </Button>
                        <Button variant='contained' color='primary' > Remove </Button>
                      </TableCell>
                    </TableRow>
                    
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        style={{float:'left'}}
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
          />
           
        <Grid item xs={12} md={6} sm={12} style={{marginTop:'50px'}}>
                  <center>
                    Total registered course credit hours 23
                  </center>
        </Grid>
        <Grid item xs={12} md={6} sm={12} style={{marginTop:'50px'}}>
                  <center>
            <Button color='primary' variant='contained' onClick={
              () => {
    //              rawDatas.map((rawData) => {
    //   if (rawData.attendance_year == slip.attendance_year && rawData.semester == slip.semester && rawData.student_id == slip.student_id) {
    //     data.push(rawData);
    //   }
    // })
    
    setOpen1(true)
    
              }
                    }>Save</Button>
                  </center>
        </Grid>
        </form>
         <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
      >
        <div>
                        <Box sx={style} style={{width:'1000px', height:'600px'}}>
                            <Grid container >
                              <Grid item xs={12} md={12} sm={12}>
                                <Typography id="modal-modal-title" variant="h4" component="h4">
                                  <center>
                                      ADDIS ABABA SCIENCE AND TECHNOLOGY UNIVERSITY   
                                  </center>
                                </Typography>
                                <Typography id="modal-modal-title" variant="h6" component="h6">
                                  <center>
                                      College of Electrical and Mechanical Engineering  
                                  </center>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={12} sm={12} >
                                <hr/>
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="div" component="div">
                                        Stream: {slip.stream} stream
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="div" component="div">
                                        Year: {slip.attendance_year}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Adm.Classification: {slip.admission_classification}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Semester: {slip.semester}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        Program: {slip.program}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        AC Year: {slip.academic_year}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{align:'left'}}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                     Student's Name: {slip.student_first_name} {slip.student_middle_name} {slip.student_last_name}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={6} md={6} sm={6} style={{ align: 'right', float:'right' }}>
                                <center>
                                  <Typography id="modal-modal-title" variant="p" component="p">
                                        ID No.: {slip.student_id}
                                  </Typography>
                                </center> 
                              </Grid>
                              <Grid item xs={12} md={12} sm={12}>
                                <center>
                                   <Slip_Table attendance_year={slip.attendance_year} student_id = {slip.student_id} semester = {slip.semester} />
                                </center>
                              </Grid>
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
       </Modal>
    </Box>
  );
}
