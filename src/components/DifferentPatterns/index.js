import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const bluePatterns = [['green', 'green', 'green'], ['green', 'red', 'green'], ['red', 'green', 'red'], ['red', 'red', 'red']];
const pinkPatterns = [['green', 'green', 'red'], ['green', 'red', 'red'], ['red', 'red', 'green'], ['red', 'green', 'green']];

const DifferentPatterns = () => (
    <Grid item container direction="row">
        <Grid item xs={6}>
            <h2>Ciclos Azuis</h2>
            {   bluePatterns.map((item, index) => (
                <Grid item xs={12} container direction="row" spacing={2} key={`${item}-${index}`} style={{ padding: 10}}>
                    {item.map(candle => (
                        <Grid item xs={4} style={{ width: 120, height: 40, padding: 5 }}>
                            <Typography component="h1" style={{ color: 'white', textAlign: 'center', backgroundColor: candle, width: 50, border: 'solid 1px black' }}>
                                { candle }
                            </Typography>
                        </Grid>))
                    }
                </Grid> 
            ))}
        </Grid>
        

        <Grid item xs={6}>
                <h2>Ciclos Rosas</h2>
                {   pinkPatterns.map((item, index) => (
                    <Grid item xs={12} container direction="row" spacing={2} key={`${item}-${index}`} style={{ padding: 10}}>
                        {item.map(candle => (
                            <Grid item xs={4} style={{ width: 120, height: 40, padding: 5 }}>
                                <Typography component="h1" style={{ color: 'white', textAlign: 'center', backgroundColor: candle, width: 50, border: 'solid 1px black' }}>
                                    { candle }
                                </Typography>
                            </Grid>))
                        }
                    </Grid> 
                ))}
            </Grid>
    </Grid>
);

export default DifferentPatterns;