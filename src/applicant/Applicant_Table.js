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
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import Modal from '@mui/material/Modal';
import { visuallyHidden } from '@mui/utils';
import {Link} from 'react-router-dom';
import { deleteApplicant, getApplicants } from '../action/applicants.action';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Add_Applicant from './Add_Applicant';
import { createStudent } from '../action/student.action';


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
    id: 'date_of_birth',
    numeric: true,
    disablePadding: false,
    label: 'Date of Birth',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
   {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
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
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
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
          Applicant Table
            </Typography>
          <Link to='Add_Applicants'>
              <Button variant='contained' color='primary' style={{marginLeft:'960px', float:'right', right:0}}>Add New</Button>
          </Link>
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

export default function Applicant_Table() {
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
    dispatch(getApplicants());
  }, [currentId, dispatch]);


  const handleDelete = (id) => {
    dispatch(deleteApplicant(id));
  }

  const handleApproveOne = (row) => {
    dispatch(createStudent(row));
    // dispatch(deleteApplicant(row._id));
  }

  

  const applicantRows =  useSelector((state) => state.applicantReducer);

const handleApproveAll = () => {
    applicantRows.map((row) => {
      dispatch(createStudent(row));
    })
  }

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  
  const [update, setUpdate] = useState(false);

  return (
    <Box sx={{ width: '90%' }}>
      
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
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(applicantRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
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
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.first_name}</TableCell>
                      <TableCell align="left">{row.middle_name}</TableCell>
                      <TableCell align="left">{row.last_name}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell> 
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        <Button variant='contained' color='secondary' style={{ marginLeft: '15px' }} onClick={(e) => {
                          handleApproveOne(row);
                        }}>Approve</Button>
                      </TableCell>
                      <TableCell align="left">
                        <VisibilityIcon color="primary" onClick={handleOpen1} />
                        <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'300px', height:'300px'}}>
                            
                              <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.first_name}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.middle_name}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.last_name}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.gender}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.phone}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.email}
                            </Typography>
                            <center>
                                  <Button variant='contained' color='primary' style={{bottom:'0', marginTop:'200px'}}>Print</Button>
                            </center>
                        </Box>
                        </Modal>
                        <DeleteIcon color="primary" onClick={() => {
                          handleDelete(row._id)
                        }} />
                        <EditIcon color="primary"
                          onClick={() => {
                            setUpdate(true)
                          }}
                        />
                        <Modal
                        open={update}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'100%', height:'100%'}}>
                            
                            {/* <Add_Applicant data={row} update={update} /> */}
                          
                        </Box>
                        </Modal>
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
      <center>
        <Button variant='contained' color='primary' style={{ marginBottom:'80px'}} onClick={handleApproveAll}>Approve</Button>
        <Button variant='contained' color='primary' style={{ marginBottom:'80px', marginLeft:'50px'}}>Cancel</Button>
      </center>
    </Box>
  );
}
