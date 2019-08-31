import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const AccountSettings = ({ state, setState, onChangeBalance, onBlur, initialState }) => {
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item md={3} xs={12}>
                <TextField 
                    value={state.balance} 
                    margin="normal"
                    variant="outlined" 
                    onChange={ev => onChangeBalance(ev.target.value)} 
                    onBlur={onBlur}
                    onClick={() => setState(initialState)}
                    label="Banca" 
                    placeholder="Valor da banca" 
                    fullWidth
                />
            </Grid>
            <Grid item md={3} xs={12}>
                <TextField 
                    value={state.bidValue} 
                    margin="normal"
                    variant="outlined" 
                    label="Aposta" 
                    placeholder="Valor da aposta" 
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item md={3} xs={12}>
                <TextField 
                    value={state.stopWin} 
                    margin="normal"
                    variant="outlined" 
                    label="Meta" 
                    placeholder="Valor da meta" 
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item md={3} xs={12}>
                <TextField 
                    value={state.stopLoss} 
                    margin="normal"
                    variant="outlined" 
                    label="Stop loss" 
                    placeholder="Stop Loss" 
                    fullWidth
                    disabled
                />
            </Grid>
        </Grid>
    )
}

export default AccountSettings;