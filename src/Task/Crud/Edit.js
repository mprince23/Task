import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Typography, Container, Box, CircularProgress } from "@mui/material";
import useSWR, { useSWRConfig } from "swr";
import { Bounce, toast } from "react-toastify";

const fetcher = url => axios.get(url).then(res => res.data);

const createUser = async (user) => axios.post("https://6620a4483bf790e070b02da3.mockapi.io/User", user).then(res => res.data);

const updateUser = async (user) => axios.put(`https://6620a4483bf790e070b02da3.mockapi.io/User/${user.id}`, user).then(res => res.data);
 
function Edit() {
    const { id } = useParams();

    const navigate = useNavigate();

    const { mutate } = useSWRConfig();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        contact: "",
    });

    const { data: userData, error, isLoading } = useSWR(
        id ? `https://6620a4483bf790e070b02da3.mockapi.io/User/${id}` : null,
        fetcher
    );

    useEffect(() => {
        if (userData) {
            setUser({
                firstName: userData.firstName,
                lastName: userData.lastName,
                contact: userData.contact,
            });
        }
    }, []);

    const handleSaveUser = async () => {
        try {
            if (id) {
                await updateUser({ ...user, id });
                mutate(`https://6620a4483bf790e070b02da3.mockapi.io/User/${id}`);
                toast.success('User Updated successfully !', {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce,
                });
            } else {
                await createUser(user);
                mutate("https://6620a4483bf790e070b02da3.mockapi.io/User");
                toast.success('User Added successfully !', {
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

            setTimeout(() => navigate("/"));

        } catch (err) {
            toast.error('Something went wrong !', {
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
        <Box sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundColor: "#FAFAFA" }}>
            <Container maxWidth="sm" sx={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", p: 6 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    {id ? "Edit User" : "Add User"}
                </Typography>
                <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                />
                <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                />
                <TextField
                    label="Contact"
                    fullWidth
                    margin="normal"
                    value={user.contact}
                    onChange={(e) => setUser({ ...user, contact: e.target.value })}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveUser}
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    {id ? "Save" : "Add"}
                </Button>
            </Container>
        </Box>
    );
}

export default Edit;