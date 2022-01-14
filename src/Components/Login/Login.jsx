import { Container } from '@mui/material';
import React, { useState } from 'react';
import Header from '../Templates/Header';
import ForgetPassword from './ForgetPassword';
import Register from './Register';
import Signin from './Signin';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import '../../Styles/Login/Login.scss';


function Login() {
    let [currentPage, updatecurrentPage] = useState(0)
    function chanegeCurrentPage(pageId) {
        updatecurrentPage(pageId)
    }
    return (
        <div className='LoginPageContainer'>
            <Header />
            <hr />
            <Container>
                <div className="homeOption">
                    <NavLink to="/" className="backOption">
                        <ArrowBackIcon />
                        <p>
                            Back to store
                        </p>
                    </NavLink>
                </div>
                <div className="loginContainer">
                    {
                        currentPage === 1 ? (
                            <>
                                <Register swapForm={chanegeCurrentPage} />
                            </>
                        ) : (<>
                            {
                                currentPage === 2 ? (
                                    <>
                                        <ForgetPassword swapForm={chanegeCurrentPage} />
                                    </>
                                ) : (<>
                                    <Signin swapForm={chanegeCurrentPage} />
                                </>)
                            }
                        </>)
                    }
                </div>

            </Container>
        </div>
    )
}

export default Login
