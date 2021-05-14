import React from 'react'
import {Button, Grid} from '@material-ui/core'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import lauchIMG from '../assets/img/lauch.png'

const UseStyles= makeStyles((theme:Theme) =>(
    createStyles({
        root:{
            flexGrow:1,
            //backgroundColor: '#7cccd3',
        },
        header:{
            fontSize: 24,
            margin: theme.spacing(6),

        },
        button:{
            margin: theme.spacing(1),
        }
    })
));

export const LauchAccount = () => {
    
    const classes= UseStyles();
    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="column"
                alignItems="center"
            >
                <Grid item lg className={classes.header}>
                    DeliveriAR
                </Grid>
            
                <Button variant="outlined" color="primary" size="large" fullWidth className={classes.button}>
                    Crear Cuenta
                </Button>
                <Button variant="outlined" color="secondary" size="large" fullWidth className={classes.button}>
                    Ingresar
                </Button>                
            </Grid>
            
        </div>
    )
}
