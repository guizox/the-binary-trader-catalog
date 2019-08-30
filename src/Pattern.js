import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Pattern = ({ data }) => {

    return (
        <Grid container direction="row" spacing={2}>
            {data.split(',').map((item, index) => (
            <Grid item xs={3} style={{ width: 20, height: 40, backgroundColor: item, padding: 10 }} key={`${item}-${index}`}>
                <Typography component="h1" style={{ color: 'white', textAlign: 'center'}}>
                    { item }
                </Typography>
            </Grid> 
            ))}
        </Grid>
    );
}

export default Pattern;