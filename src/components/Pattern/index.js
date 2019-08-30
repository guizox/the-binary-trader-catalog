import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Pattern = ({ data }) => {

    return (
        <Grid container direction="row" spacing={2}>
            {data.split(',').map((item, index) => (
            <Grid item xs={3} key={`${item}-${index}`} style={{ textAlign: 'center'}}>
                <Grid item xs={12} style={{ width: 80, height: 40, padding: 5, backgroundColor: item }}>
                    <Typography component="h1" style={{ color: 'white', textAlign: 'center' }}>
                        { item }
                    </Typography>
                </Grid>
            </Grid> 
            ))}
        </Grid>
    );
}

export default Pattern;