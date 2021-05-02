import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const UseStyles= makeStyles(() =>({
root:{
    flexGrow:1
}
}));

export const signIn = () => {
    
    const classes= UseStyles();
    return (
        <div className={classes.root}>
            login! 
            <Grid>
                <h1>Hola!</h1>
            </Grid>
            
        </div>
    )
}
