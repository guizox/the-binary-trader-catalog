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
        const mutiplicator = balance < 150 ? 0.0075 : balance > 150 && balance < 300 ? 0.0062 : balance > 300 && balance < 500 ? 0.0058 : balance > 500 && balance < 1000 ? 0.0052 : 0.0045;
        debugger;
        const bidValue = balance * mutiplicator > 0.35 ? balance * mutiplicator : 0.35;
        const stopWin = bidValue > 0.35 ? (((balance * mutiplicator) * 0.88) * 2) * 0.9 : 0.62;
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