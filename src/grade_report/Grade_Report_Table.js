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
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import { getStudent_Course_Registrations } from '../action/student_course_registration.action';
import Modal from '@mui/material/Modal';

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



function createData(acc_year, att_year, semester,cgpa) {
  return {
      acc_year, att_year, semester,cgpa
  };
}

const rows = [
    createData('2011', '2022', '3', '3'),
    createData('2011', '2022', '3', '3'),
    createData('2011', '2022', '3', '3'),
    createData('2011', '2022', '3', '3'),
    createData('2011', '2022', '3', '3')
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
    id: 'accademic_year',
    numeric: true,
    disablePadding: false,
    label: 'Accademic Year',
  },
  {
    id: 'attendance_year',
    numeric: true,
    disablePadding: false,
    label: 'Attendance Year',
  },
   
  {
    id: 'semester',
    numeric: true,
    disablePadding: false,
    label: 'Semester',
    },
    {
    id: 'cgpa',
    numeric: true,
    disablePadding: false,
    label: 'CGPA',
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


export default function Grade_Report_Table() {
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

  

 

  

  const isSelected = (email) => selected.indexOf(email) !== -1;



   const dispatch = useDispatch();
  
  
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2,ml:2,mr:2,mt:2}}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                  const isItemSelected = isSelected(row.email);
                  const labelId = `enhanced-table-checkbox-${index}`;
               
                    return (
                      
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                      >
                          
                          <TableCell >{row.acc_year}</TableCell> 
                          <TableCell >{row.att_year}</TableCell> 
                          <TableCell >{row.semester}</TableCell> 
                          <TableCell >{row.cgpa}</TableCell> 
                          <TableCell >
                            <Link to='/Grade_Report' style={{textDecoration: 'none'}}>
                              <Button color='primary' variant='contained'>Grade Report</Button>
                            </Link>
                          </TableCell>
                    </TableRow>
                    
                  );
                })}
              
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>
          
    </Box>
  );
}
