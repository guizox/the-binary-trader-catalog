import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SystemTable from './components/SystemTable';
import Pattern from './components/Pattern';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountSettings from './components/AccountSettings';
import AccountSettingsState from './components/AccountSettings/accountSettingsState';

const columns = [
    {
        id: 'pattern',
        label: 'Padrão',
        component: content => <Pattern data={content} />
    },
    {
        id: 'repeat',
        label: 'Repetições',
        component: content => <h2 > {content} </h2>
    },
];

const accountSettingsColumns = [
    {
        id: 'nivel',
        label: 'Nível',
        component: content => <h2> {content} </h2>
    },
    {
        id: 'bidValue',
        label: 'Valor Aposta',
        component: content => <h2> $ {content} </h2>
    }
]

function App() {
    const [state, setState] = useState({ input: '', foundPattern: null });

    const onClick = () => {
        const arr = state.input.split(",");
        const obj = {};

        for (let i = 0; i < arr.length; i++) {
            if (i + 3 < arr.length) {
                if (obj.hasOwnProperty(`${arr[i]},${arr[i + 1]},${arr[i + 2]},${arr[i + 3]}`)) {
                    obj[`${arr[i]},${arr[i + 1]},${arr[i + 2]},${arr[i + 3]}`] = obj[`${arr[i]},${arr[i + 1]},${arr[i + 2]},${arr[i + 3]}`] + 1;
                } else {
                    obj[`${arr[i]},${arr[i + 1]},${arr[i + 2]},${arr[i + 3]}`] = 1;
                }
            }
            const pattern = `${arr[i]},${arr[i + 1]},${arr[i + 2]},${arr[i + 3]}`;
            if (pattern === 'blue,blue,blue,blue') {
                while (arr[i + 4] === 'blue') i++;
            }

            if (pattern === 'pink,pink,pink,pink') {
                while (arr[i + 4] === 'pink') i++;
            }
        }

        setState({ ...state, foundPattern: JSON.parse(JSON.stringify(obj)) });
    }

    const accountSettingsState = AccountSettingsState();

    return (
        <Grid container direction="row" spacing={2}>
            <AppBar>
                <Toolbar style={{ backgroundColor: '#2A3051'}}>
                    <Grid container direction="row" justify="space-around" alignContent="center" alignItems="center" >
                        <Grid item xs={2}>
                            <img alt="logo" src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46'%3E%3Cpath fill='%23fff' d='M39.057 6.937C30.2-1.926 15.792-1.926 6.934 6.934c-8.856 8.857-8.856 23.273 0 32.132 8.858 8.86 23.27 8.86 32.123-.002 8.87-8.857 8.87-23.273 0-32.127z'/%3E%3Cg fill='%23293152'%3E%3Cpath d='M16.666 28.957s.26 1.95 1.9 2.852l-.436-.815s.835-2.192-1.464-2.038zM37.908 8.085c-8.225-8.23-21.6-8.23-29.823-.002-8.223 8.226-8.223 21.608 0 29.834s21.603 8.224 29.823 0c8.233-8.226 8.233-21.608 0-29.832zm-2.18 27.648c-.23.228-.454.446-.688.656-5.066 4.13-8.97 2.074-9.014 2.074-2.645-.528-3.958-.537-4.7-1.033-.186-.124-.785-.445-.92-.368-.54.322-1.283.486-2.048-.12-.07-.058-.13-.117-.192-.174-.84-.84-.554-1.706-.275-2.006.194-.197-.147-.75-.147-.75s-.993-1.477-1.672-2.364c-.746-.975-.847-2.908-.856-2.933l-.01-.028c-.755-.897-.834-1.173-1.095-1.61-.153-.258-.387-.5-.585-.708-.136-.14-.263-.268-.35-.388-.022-.026-.026-.064-.018-.124.067-.42.97-1.342 1.163-1.47.238-.155 1.264-.778 1.264-.778s.578-.906 1.56-.906c.885.003 1.426-.05 2.953.447l.636.202c1.065.342 2.003.744 2.75 1.066.633.273 1.14.493 1.527.594 1.316.348 3.64-.718 4.13-1.17.806-.73 1.15-1.22 1.155-1.623.008-.227-.092-.423-.32-.66-.117-.11-.27-.313-.463-.507-.03-.03-.063-.066-.102-.094-2.23-2.37-1.844-3.855-1.84-3.88.094-1.065-.516-1.748-1.172-2.457l-.11-.133c-.034-.032-.075-.086-.075-.086.95.156 1.596.538 3.45.744 1.056.113.722.104 1.564.082 1.16-.037 2.08-.14 2.143-.402-.113-.096-.627.03-3.09-.912-1.14-.438-1.318-.502-2.045-.743-.932-.314-1.94-.75-1.94-.75 4.017 1.054 5.33 1.466 7.17 1.492.708.013 1.132-.073 1.38-.124.262-.046 1.072-.23 1.166-.51.028-.05-.778.13-2.27-.36-4.687-1.55-5.087-2.325-7.687-3.336-.904-.352-1.2-.546-3.94-1.252-1.254-.32-3.15-.138-3.407.024-3.556-.835-4.363-.743-5.406-.52 6.955-4.46 16.347-3.656 22.43 2.43.825.825 1.556 1.714 2.196 2.655l.084.13c1.953 2.923 2.994 6.353 2.994 9.945-.002 4.816-1.875 9.334-5.275 12.738zM23.922 15.405c1.765.63 2.332 2.51 2.332 2.51-2.242.51-1.77-1.78-1.77-1.78l-.56-.73z'/%3E%3C/g%3E%3C/svg%3E" />
                        </Grid>
                        <Grid item xs={8} style={{ textAlign: 'center' }}>
                            <Typography style={{ fontSize: 20, fontWeight: 900}}>
                                The Binary Trader
                            </Typography>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container direction="row" alignContent="center" justify="center" style={{ marginTop: 80 }}>
                    <AccountSettings {...accountSettingsState} />
                    <Grid item xs={12}>
                        <TextField
                            value={state.input}
                            margin="normal"
                            variant="outlined"
                            multiline
                            onChange={ev => setState({ ...state, input: ev.target.value })}
                            label="Padrões"
                            placeholder="Coloque aqui os padrões"
                            fullWidth
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        <Button onClick={onClick} style={{ background: '#2A3051', color: 'white', width: 280, height: 50 }}>
                            Encontre o melhor padrão
                  </Button>
                    </Grid>
                </Grid>

                {
                    state.foundPattern &&
                    <Grid container direction="row" spacing={2} style={{ marginTop: 10}}>
                        <Grid item md={4} xs={12}>
                            <SystemTable columns={accountSettingsColumns}
                                showPagination={false}
                                noDataText=""
                                pagination={{}}
                                handleSort={() => { }}
                                rows={[1,2,4,8].map(item => ({
                                    nivel: item,
                                    bidValue: parseFloat(accountSettingsState.state.bidValue.replace('$', '')) * item
                                }))} />

                            <Grid container direction="row" spacing={2} justify="space-around">
                                <Grid item xs={4}>
                                    <h2>
                                        Total:
                                    </h2>
                                </Grid>
                                <Grid item xs={8}>
                                    <h2>
                                        {
                                            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format([1,2,4,8].map(item => ({
                                                nivel: item,
                                                bidValue: accountSettingsState.state.bidValue ? parseFloat(accountSettingsState.state.bidValue.replace('$', '')) * item : ''
                                            })).reduce((acc, cur) => acc + cur.bidValue, 0))
                                        }
                                    </h2>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <SystemTable columns={columns}
                                showPagination={false}
                                noDataText="Digite valores para encontrar os padrões."
                                pagination={{}}
                                handleSort={() => { }}
                                rows={Object.keys(state.foundPattern).map(key => ({
                                    pattern: key,
                                    repeat: state.foundPattern[key]
                                }))} />
                        </Grid>
                    </Grid>
                }
            </Container>
        </Grid>
    );
}

export default App;
