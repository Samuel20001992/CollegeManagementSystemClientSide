import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useDispatch, useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
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
import {Grid} from '@mui/material';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import Modal from '@mui/material/Modal';
import { deleteInstructor_Course, getInstructor_Courses } from '../action/instructor_course.action';
import { Link } from 'react-router-dom';
import { updateInstructor_Course } from '../api/instructor_course.api';
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
    id: 'instructor_id',
    numeric: true,
    disablePadding: false,
    label: 'Insturctor Id',
  },
  {
    id: 'course',
    numeric: true,
    disablePadding: false,
    label: 'Course ',
    },
  {
    id: 'course_code',
    numeric: true,
    disablePadding: false,
    label: 'Course Code',
    },
  {
    id: 'section',
    numeric: true,
    disablePadding: false,
    label: 'Section',
    },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
  {
    id: 'operation',
    numeric: true,
    disablePadding: false,
    label: 'Operation',
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
          Instructor Course 
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

export default function Instructor_Course_Table(props) {
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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

   const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getInstructor_Courses());
  }, [currentId, dispatch]);

  const instructorCourseRows =  useSelector((state) => state.departmentReducer);

  const rows = instructorCourseRows;
  const handleDelete = (id) => {
    dispatch(deleteInstructor_Course(id))
  }
  let status;

  const handleUpdate = (row) =>{
    if(status == 'active'){
      row.status = 'inactive';
    }
    else{
      row.status ='active';
    }
    dispatch(updateInstructor_Course(row._id, row));
  }
  
  return (
    <Box sx={{ width: '90%' }}>
      <Paper sx={{ width: '90%', mb: 2,ml:2,mr:2,mt:2}}>
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
                  const isItemSelected = isSelected(row.email);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if(props.status == 'active'){
                      if(row.status == 'active'){
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
                          
                          <TableCell align="left">{row.instructor_id}</TableCell>
                          <TableCell align="left">{row.course_title}</TableCell>
                          <TableCell align="left">{row.course_code}</TableCell>
                          <TableCell align="left">{row.section}</TableCell>
                          <TableCell align="left">
                            <Button color='primary' variant='contained'
                                onClick={(e)=>{
                                  status = props.status;
                                  handleUpdate(row);
                                }}
                            >
                              {
                                props.status == 'active' ? `Inactive` : `Active`
                            } </Button>
                          </TableCell>
                          <TableCell align="left">
                            {/* <VisibilityIcon color="primary" /> */}
                            <DeleteIcon color="primary" onClick={(e) => {
                              handleDelete(row._id)
                            } } />
                            
                            </TableCell>
                        </TableRow>
                        );
                      }
                  } else{
                    if(row.status != 'active'){
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
                          
                          <TableCell align="left">{row.instructor_id}</TableCell>
                          <TableCell align="left">{row.course_title}</TableCell>
                          <TableCell align="left">{row.course_code}</TableCell>
                          <TableCell align="left">{row.section}</TableCell>
                          <TableCell align="left">
                            <Button color='primary' variant='contained'
                                onClick={(e)=>{
                                  status = props.status;
                                  handleUpdate(row);
                                }}
                            >
                              {
                                props.status == 'active' ? `Inactive` : `Active`
                            } </Button>
                          </TableCell>
                          <TableCell align="left">
                            {/* <VisibilityIcon color="primary" /> */}
                            <DeleteIcon color="primary" onClick={(e) => {
                              handleDelete(row._id)
                            } } />
                            
                            </TableCell>
                        </TableRow>
                      );
                    }
                  }
                  
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
          
    </Box>
  );
}
