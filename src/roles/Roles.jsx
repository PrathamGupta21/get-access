import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';

const Roles = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      roleID: 'AuthR',
      roleName: 'Domain Authentication Role',
      categoryName: 'GetAccess',
    },
  ]);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newData, setNewData] = useState({
    id: null,
    roleID: '',
    roleName: '',
    categoryName: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditMode(false);
    setEditIndex(null);
    setNewData({ id: null, roleID: '', roleName: '', categoryName: '' });
  };

  const handleDelete = (id) => {
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };

  const handleAdd = () => {
    if (editMode) {
      const updatedData = [...tableData];
      updatedData[editIndex] = newData;
      setTableData(updatedData);
      setEditMode(false);
    } else {
      setTableData([...tableData, { id: tableData.length + 1, ...newData }]);
    }
    setNewData({ id: null, roleID: '', roleName: '', categoryName: '' });
    setOpen(false);
  };

  const handleEdit = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNewData(tableData[index]);
    handleOpen();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        onClick={handleOpen}
        style={{ margin: 16 }}>
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role ID</TableCell>
              <TableCell>Role Name</TableCell>
              <TableCell>Category Name</TableCell>
              <TableCell>Modify</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{row.roleID}</TableCell>
                <TableCell>{row.roleName}</TableCell>
                <TableCell>{row.categoryName}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => handleEdit(index)}>
                    Modify
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => handleDelete(row.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? 'Edit Data' : 'Add Data'}</DialogTitle>
        <DialogContent>
          <TextField
            label='Role ID'
            name='roleID'
            value={newData.roleID}
            onChange={handleInputChange}
            fullWidth
            margin='normal'
          />
          <TextField
            label='Role Name'
            name='roleName'
            value={newData.roleName}
            onChange={handleInputChange}
            fullWidth
            margin='normal'
          />
          <TextField
            label='Category Name'
            name='categoryName'
            value={newData.categoryName}
            onChange={handleInputChange}
            fullWidth
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={handleAdd} color='primary'>
            {editMode ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Roles;
