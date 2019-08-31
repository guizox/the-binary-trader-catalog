import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const initialState = {
    balance: '',
    bidValue: 0,
    stopLoss: 0,
    stopWin: 0,
};

const AccountSettings = () => {
    const [state, setState] = useState(initialState);

    const onChangeBalance = newBalance => {
        setState({
            ...state,
            balance: newBalance,
        })
    }

    const onBlur = () => {
        const { balance } = state;
        const bidValue = balance * 0.0075 > 0.35 ? balance * 0.0075 : 0.35;
        const stopWin = bidValue > 0.35 ? (((balance * 0.0075) * 0.88) * 2) * 0.9 : 0.62;
        const stopLoss = (bidValue + (bidValue * 2) + (bidValue * 4) + (bidValue * 8)) * 0.8;
        if (state.balance > 0) {
            setState({
                ...state,
                balance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance),
                bidValue: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(bidValue),
                stopWin: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stopWin),
                stopLoss: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(stopLoss)
            })
        }
    }

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