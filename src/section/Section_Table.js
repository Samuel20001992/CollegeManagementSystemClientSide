import React,{useEffect, useState} from 'react';
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
import {Modal, TextField} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getStudent_Details, updateStudent_Detail} from '../action/student_detail.action';
import {createStudent_Section} from '../action/student_section.action';

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
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'student_id',
    numeric: false,
    disablePadding: false,
    label: 'Student Id',
  },
  {
    id: 'first_name',
    numeric: false,
    disablePadding: true,
    label: 'First Name',
  },
  {
    id: 'middle_name',
    numeric: true,
    disablePadding: false,
    label: 'Middle Name',
  },
  {
    id: 'last_name',
    numeric: true,
    disablePadding: false,
    label: 'Last Name',
  },
  {
    id: 'Gender',
    numeric: true,
    disablePadding: false,
    label: 'Gender',
  },
 
  {
    id: 'department',
    numeric: true,
    disablePadding: false,
    label: 'Department',
  },
  {
    id: 'program',
    numeric: true,
    disablePadding: false,
    label: 'Program',
   },
   {
    id: 'learning_modality',
    numeric: true,
    disablePadding: false,
    label: 'Learning Modality ',
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
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
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
          Section Table
        </Typography>
      </div>
        
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
          ) : (
                  null
        //  <Tooltip title="Filter list">
        //   <IconButton>
        //     <FilterListIcon />
        //   </IconButton>
        // </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
let rows;
export default function Section_Table(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('First Name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
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

  const isSelected = (email) => selected.indexOf(email) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  rows = props.rows;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [record, setRecord] = useState();
    const [open, SetOpen] = useState(false);
    const handleOpen = (row) =>{
       SetOpen(true)
      };
    const handleClose = () => SetOpen(false);
    const [currentId, setCurrentId] = useState();
    
   
   const dispatch = useDispatch();
    const [section, setSection] = useState('');


    const handleSubmit = () =>{
       console.log('rows ' + record)
       rows.map((row)=>{
        if(record == row.student_id){
          row.section = studentSection.section_name;
          dispatch(updateStudent_Detail(row._id,row));
          studentSection.first_name = row.first_name;
          studentSection.middle_name = row.middle_name;
          studentSection.last_name = row.last_name;
          studentSection.student_id = row.student_id;
          studentSection.department = row.department;
          studentSection.learning_modality = row.learning_modality;
          studentSection.program = row.program;
        }
       })
         
       
       dispatch(createStudent_Section(studentSection));
            
            
          window.location.reload();
      } 


      const [studentSection, setStudentSection] = useState({
        first_name:'',
        middle_name:'',
        last_name:'',
        student_id:'',
        section_name:'',
        department:'',
        learning_modality:'',
        program:'',
        attendance_year:'',
        semester:'',
        academic_year:''
      })

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2,ml:2,mr:2,mt:2}}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
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
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                if(row.section == ''){
                  const isItemSelected = isSelected(row.email);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.email)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell align="left">{row.student_id}</TableCell>
                      <TableCell align="left">{row.first_name}</TableCell>
                      <TableCell align="left">{row.middle_name}</TableCell>
                      <TableCell align="left">{row.last_name}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                      <TableCell align="left">{row.department}</TableCell> 
                      <TableCell align="left">{row.program}</TableCell>
                      <TableCell align="left">{row.learning_modality}</TableCell>
                      <TableCell align="left">
              
                        <Button variant='contained' color='secondary' style={{ marginLeft: '15px' }}
                          onClick={(e) =>{handleOpen()
                          setRecord(row.student_id)
                          }}
                        >Add to Section</Button>
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'15%', height:'50%'}}>
                        
                        <Grid container spacing={3}>
                          <Grid item xs = {12}>
                          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }}  label="Section Name" variant="outlined" size="small"
                             value={studentSection.section_name}   name='section_name' onChange={(e) => setStudentSection({...studentSection, section_name: e.target.value })} 
                             
                            />
                          </Grid>
                          <Grid item xs = {12}>
                          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }}  label="Attendance Year" variant="outlined" size="small"
                               onChange={(e) => setStudentSection({...studentSection, attendance_year: e.target.value })} 
                            value={studentSection.attendance_year}
                            />
                          </Grid>
                          <Grid item xs = {12}>
                          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }}  label="Semester" variant="outlined" size="small"
                                onChange={(e) => setStudentSection({...studentSection, semester: e.target.value })} 
                             value={studentSection.semester}
                            />
                          </Grid>
                          <Grid item xs = {12}>
                          < TextField id="outlined-basic" style={{ width: '230px', align: 'left' }}  label="Academic Year" variant="outlined" size="small"
                                onChange={(e) => setStudentSection({...studentSection, academic_year: e.target.value })} 
                             value={studentSection.academic_year}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <center>
                          <Button variant='contained' color='primary'
                            onClick={(e) => {handleSubmit(row)}}
                            >Submit</Button></center>
                          </Grid>
                        </Grid>
                        
                        </Box>
                        </Modal>
                      </TableCell>
                    </TableRow>
                  );
                }
                }
                )
                
                }
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
      
    </Box>
  );
}
