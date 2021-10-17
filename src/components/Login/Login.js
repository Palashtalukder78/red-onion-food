import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './login.css';
import logo from '../../images/logo.png'
import { Checkbox, FormControlLabel, Snackbar } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
const Login = () => {
    const { firebaseContext } = useAuth();
    const { createUser, setUser } = firebaseContext;
    const [istoggle, setIstoggle] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [user, setUser] = useAuth({});

    const location = useLocation();
    const history = useHistory();

    // Set Notify for Error start
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    // Set Notify for Error End

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleToggle = (e) => {
        setIstoggle(e.target.checked);
    }

    const redirectUri = location.state?.from || '/home';
    const handelLogin = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be 6 Character");
            setOpen(true);
        }
        !istoggle ?
            handleCreateUser(email, password, name)
            :
            handleLogedinUser(email, password)
    }
    const handleCreateUser = (email, password, name) => {
        createUser(email, password, name);
    }
    const auth = getAuth();
    const handleLogedinUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                history.push(redirectUri);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }
    return (
        <div id="login">
            <Container>
                <div className="row py-5">
                    <div className="col-md-5 m-auto">
                        <div className="form ">
                            <div className="text-center">
                                <img className="img-fluid mb-4" style={{ width: "45%" }} src={logo} alt="" />
                            </div>
                            <form onSubmit={handelLogin}>
                                <div className="text-center">
                                    {!istoggle &&
                                        <input className="input-box" type="text" placeholder="Enter Your Name" onBlur={handleName} />}

                                    <input className="input-box" type="text" placeholder="Enter Email" onBlur={handleEmail} />
                                    <input className="input-box" type="password" placeholder="Enter Password" onBlur={handlePassword} />
                                    <div className="d-grid ">
                                        <button type="submit" className="btn mx-auto text-light">{istoggle ? "Sign in" : "Sign up"}</button>
                                    </div>
                                </div>
                                <div className="flexible checkbox">
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        labelPlacement="end"
                                        style={{ margin: ' 0 0 0 0' }}
                                        label="Already Registered?"
                                        onChange={handleToggle}
                                    />
                                </div>
                                {istoggle &&
                                    <p className="my-2 text-primary text-center">Reset Password</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Error Notify Start */}
            {error &&
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message={error}
                />
            }
            {/* Error Notify Start */}
        </div>
    );
};

export default Login;