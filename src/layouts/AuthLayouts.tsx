import { Grid, Box } from "@mui/material";
import React, { Children } from "react";
import wellcome from "../assets/wellcome.svg";
import styles from "./AuthLayout.module.css";
interface Props {
   children: React.ReactNode
}

function AuthLayout({ children }: Props) {
   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={6} className={styles.containerBox}>
            <p className={styles.title} style={{ fontFamily: "Public Sans, sans-serif" }}>Wellcome To App</p>
            <div>
               <Box component="img" src={wellcome} alt='wellcome image' width="200px" />
            </div>
            <h5 className={styles.footer} style={{ fontFamily: "Public Sans, sans-serif" }}>© Copyright 2023 </h5>
         </Grid>
         <Grid item xs={12} sm={12} md={6} sx={{ p: { xs: 2, sm: 2, md: 6 } }}>{children}</Grid>
      </Grid>
   );
}

export default AuthLayout;