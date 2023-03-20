import { Button, Grid, TextField, Box } from "@mui/material";
import React from "react";
import styles from "./Login.module.css";
import AuthLayout from "../layouts/AuthLayouts";
import { useNavigate } from "react-router-dom";

function Login() {
   const logo = 'https://images.tokopedia.net/img/cache/215-square/shops-1/2020/2/29/7912171/7912171_86311405-12e7-41f8-81bf-01fadd3c093f.jpg'
   const h = window.innerHeight
   const navigate = useNavigate()

   return (
      <AuthLayout>
         <div>
            <Box width='100%' height={h} >
               <img src={logo} alt="logo" width='40px' />
               <p className={styles.titleInput}>Wellcome Back</p>
               <p className={styles.register}>Login to your account</p>
               <div className={styles.input}>
                  <TextField fullWidth label="Email" className={styles.form} />
               </div>
               <div className={styles.input}>
                  <TextField fullWidth label="Password" className={styles.form} />
               </div>
               <div className={styles.btn}>
                  <Button onClick={() => navigate('/home')} fullWidth variant="contained" sx={{ backgroundColor: "#1ac073" }}>Login</Button>
               </div>
               <Box textAlign='end'>
                  <p>Don't have an account yet? <a onClick={() => navigate('/register')} style={{ color: "blue", cursor: 'pointer' }}>Register</a></p>
               </Box>
            </Box>
         </div>
      </AuthLayout>
   );
}

export default Login