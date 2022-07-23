import  React,{useState, useEffect} from 'react';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Button, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import {Grid} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import { createApplication, getApplications } from '../action/application.action';
import { createClearance, getClearances } from '../action/clearance.action';


function createData(first_name, middle_name, last_name, gender, phone, email) {
  return {
      first_name,
      middle_name,
      last_name,
      gender,
      phone,
      email
  };
}

let rows = [];

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
  // const stabilizedThis = array.map((el, index) => [el, index]);
  // stabilizedThis.sort((a, b) => {
  //   const order = comparator(a[0], b[0]);
  //   if (order !== 0) {
  //     return order;
  //   }
  //   return a[1] - b[1];
  // });
  // return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Student Id',
    numeric: false,
    disablePadding: true,
    label: 'student_id',
  },
  {
    id: 'Reason',
    numeric: false,
    disablePadding: true,
    label: 'Reason',
  },
  {
    id: 'Store',
    numeric: false,
    disablePadding: true,
    label: 'Store',
    },
  {
    id: 'finanace',
    numeric: false,
    disablePadding: true,
    label: 'Finanace',
  },
  {
    id: 'Department',
    numeric: false,
    disablePadding: true,
    label: 'Department',
  },
  {
    id: 'Library',
    numeric: false,
    disablePadding: true,
    label: 'Library',
    },
  {
    id: 'Registarar',
    numeric: false,
    disablePadding: true,
    label: 'Registarar',
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
          Clearance Table
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

export default function Clearance() {
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
    dispatch(getClearances());
  }, [currentId, dispatch]);

  const courseRows =  useSelector((state) => state.applicationReducer);
   const [clearance, setClearance] = useState({
     student_id:'',
        reason:'',
        date:''
   })

  const handleSubmit = () => {
    dispatch(createClearance(clearance));
  }

  const rows = courseRows;
  
  return (
      <Box sx={{ width: '90%' }}>
        <Grid container spacing={1}>
          <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Student Id" variant="outlined" size="small"
              onChange={(e) => {
                setClearance({ ...clearance, student_id: e.target.value })
              }}
              
               />
        </Grid>
        <Grid item xs={4} md={4} sm={4}>
          < TextField id="outlined-basic" style={{ width: '300px', align: 'left' }} label="Reason" variant="outlined" size="small"
              onChange={(e) => {
                setClearance({ ...clearance, reason: e.target.value })
              }}
              
               />
        </Grid>
    
        <Grid item xs={4} md={4} sm={4}>
          <Button color='primary' variant='contained'
           onClick={handleSubmit}
          >Save</Button>
        </Grid>
        </Grid>
      <Paper sx={{ width: '90%', mb: 2,ml:2,mr:2,mt:2}}>
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
                      <TableCell align="left">{row.reason}</TableCell>
                      <TableCell align="left">{row.store}</TableCell>
                      <TableCell align="left">{row.finance}</TableCell>
                      <TableCell align="left">{row.department}</TableCell>
                      <TableCell align="left">{row.library}</TableCell>
                      <TableCell align="left">{row.registerar}</TableCell> 
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
    </Box>
  );
}
