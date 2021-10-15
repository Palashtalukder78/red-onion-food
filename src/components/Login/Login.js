import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './login.css';
import logo from '../../images/logo.png'
import { Checkbox, FormControlLabel, Snackbar } from '@mui/material';

const Login = () => {
    const [istoggle, setIstoggle] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
    const handlePassword = (e) => {
        console.log(e.target.value);
    }
    const handleToggle = (e) => {
        setIstoggle(e.target.checked);
    }
    const handelLogin = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be 6 Character");
            setOpen(true);
        }
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
                                        <input className="input-box" type="text" placeholder="Enter Your Name" />}

                                    <input className="input-box" type="text" placeholder="Enter Email" onBlur={handleEmail} />
                                    <input className="input-box" type="password" placeholder="Enter Password" onBlur={handlePassword} />
                                    <div className="d-grid ">
                                        <button className="btn mx-auto text-light">{istoggle ? "Sign in" : "Sign up"}</button>
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