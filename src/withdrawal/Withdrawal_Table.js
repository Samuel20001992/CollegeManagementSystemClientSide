import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility'; 
//import FilterListIcon from '@mui/icons-material/FilterListIcon';
import { visuallyHidden } from '@mui/utils';
import Modal from '@mui/material/Modal';
import Add_Withdrawal from './Add_Withdrawal';
import Add_Readmission from './Add_Readmission';
import { getWithdrawals } from '../action/withdrawal.action';

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
    id: 'student_id',
    numeric: true,
    disablePadding: false,
    label: 'Student Id',
  },
  
  
  {
    id: 'remark',
    numeric: true,
    disablePadding: false,
    label: 'Remark',
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
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
 
  return (
    <Toolbar
     
    >
      
      <div>
        <Typography
          // sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{float:'left'}}
        >
          Withdrawal Table
        </Typography>
                      <Button variant='contained' color='primary' style={{ marginLeft: '960px', float: 'right', right: 0 }} onClick={handleOpen1}>Add New</Button>
                      <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'300px', height:'300px'}}>
                            
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add Withdrawal
                            </Typography>
                            <Add_Withdrawal/>
                        </Box>
                        </Modal>
      </div>
        
      
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Withdrawal_Table() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('First Name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

 const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true)

  };
  const handleClose2 = () => setOpen2(false);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  
  let value;
  

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
    dispatch(getWithdrawals());
  }, [currentId, dispatch]);
  
const withdrawalRows =  useSelector((state) => state.withdrawalReducer);

  const rows = withdrawalRows;
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  let student_id;
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
              order={order}
              orderBy={orderBy}
              
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

                  return (
                    <TableRow
                      hover
                
                      tabIndex={-1}
                      key={row.name}
                    >
                     
                      <TableCell align="left">{row.student_id}</TableCell>
                      <TableCell align="left">{row.remark}</TableCell>
                      <TableCell align="left">
                        <Button variant='contained' color='secondary' style={{ marginLeft: '15px' }} onClick={(e) => {
                          handleOpen2()
                          value = row._id;
                          student_id = row.student_id;
                        }
                        }>Readmit</Button>
                      </TableCell>
                      <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'300px', height:'300px'}}>
                            
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Add Readmission
                            </Typography>
                         <Add_Readmission value={row._id} student_id={row.student_id} />
                        </Box>
                        </Modal>
                      <TableCell align="left">
                         <VisibilityIcon color="primary" onClick={handleOpen1} />
                        <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} style={{width:'500px', height:'300px'}}>
                            
                              <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.student_id}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.reson}
                            </Typography>
                            <Typography id="modal-modal-title" variant="div" component="h2">
                                {row.remark}
                            </Typography>
                        </Box>
                        </Modal>
                        <DeleteIcon color="primary"/>
                        <EditIcon color="primary"/>
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
    </Box>
  );
}
