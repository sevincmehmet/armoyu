import React from 'react';
import './LoginPage.css'
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../css/Responsive.css'

const LoginPage = ({navigate}) => {
    return (
        <>
        <div className="main-login-container " >
                <div className="login-container">
                    
                    <div className="login-box bg-white">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="login-wrapper">
                                    <div className="header-box d-flex justify-content-end">
                                        <div style={{ cursor: "pointer" }}>
                                            <ClearIcon onClick={()=> navigate("/")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="inp-login-wrapper">
                                    <Box
                                        className="inp-login"
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Kullanıcı Adı" variant="outlined" />
                                    </Box>
                                    <Box
                                        className="inp-login"
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField id="outlined-basic" label="Şifre" variant="outlined" />
                                    </Box>
                                    <div className="checkBox-wrapper">
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Beni Hatırla" />
                                        </FormGroup>
                                    </div>
                                    <div className="login-btn-wrapper">
                                        <button className="login-btn">Giriş Yap</button>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <span className="pasword-span">Şifreni mi unuttun? </span> <a className="pasword-link" href="">Şifre al</a>
                                    </div>
                                    <div className="img-logo-box">
                                        <img src="https://aramizdakioyuncu.com/galeri/ana-yapi/facebook-logo.png" alt="" />
                                        <img src="https://aramizdakioyuncu.com/galeri/ana-yapi/steam-logo.png" alt="" />
                                        <img src="https://aramizdakioyuncu.com/galeri/ana-yapi/google-logo.png" alt="" />
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-6 ">
                                <div className="login-img-wrapper">
                                    <img src="https://aramizdakioyuncu.com/galeri/ana-yapi/armoyu.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;