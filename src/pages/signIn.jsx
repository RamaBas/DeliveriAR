import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const UseStyles= makeStyles(() =>({
root:{
    flexGrow:1
}
}));

export const SignIn = () => {
    
    const classes= UseStyles();
    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="column"
                alignItems="center"
            >
                <Grid item lg>
                    bloque1
                </Grid>
                <Grid item lg>
                    bloque2
                </Grid>
            </Grid>
            
        </div>
    )
}
