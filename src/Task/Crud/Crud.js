import React from "react";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Box, Container, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Bounce, toast } from "react-toastify";

const fetcher = url => axios.get(url).then(res => res.data);

const deleteUser = async (id) => axios.delete(`https://6620a4483bf790e070b02da3.mockapi.io/User/${id}`);

function Crud() { 
  const navigate = useNavigate();

  const { data: users, error, isLoading } = useSWR("https://6620a4483bf790e070b02da3.mockapi.io/User", fetcher);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      mutate("https://6620a4483bf790e070b02da3.mockapi.io/User");
      toast.success('User deleted successfully !', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    } catch (err) {
      toast.error('Failed to delete user !', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>
        <Box>
          <CircularProgress />
          <Typography mt={1}>Loading...</Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading users</Typography>;
  }

  return (
    <>
      <Box sx={{ pt: 5, backgroundColor: "#FAFAFA" }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Users List
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/add-user")}
              sx={{ mb: 2, textTransform: "capitalize" }}
            >
              <AddIcon sx={{ mr: 1 }} />
              Add User
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sr No</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.firstName}</TableCell>
                      <TableCell>{item.lastName}</TableCell>
                      <TableCell>{item.contact}</TableCell>
                      <TableCell>{item.createdAt}</TableCell>
                      <TableCell>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={() => navigate(`/edit-user/${item.id}`)}
                          sx={{ mr: 1 }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          variant="contained"
                          color="error"
                          onClick={() => handleDelete(item.id)}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Crud;