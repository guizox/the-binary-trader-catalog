import { useState } from 'react';

const initialState = {
    balance: '',
    bidValue: 0,
    stopLoss: 0,
    stopWin: 0,
};

const AccountSettingsState = () => {
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

    return { state, setState, onChangeBalance, onBlur, initialState }
}

export default AccountSettingsState;