import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SystemTable from '@bit/vguilherme.organization.system-table';
import Pattern from './Pattern';

const columns = [
  {
    id: 'pattern',
    align: 'right',
    label: 'Padrão',
    component: content => <Pattern data={content} />
  },
  {
    id: 'repeat',
    align: 'left',
    label: 'Repetições',
    component: content => <h2 style={{ textAlign: 'center'}}> { content } </h2>
  },
];

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
        }

        setState({ ...state, foundPattern: JSON.parse(JSON.stringify(obj))});
    }

  return (
      <Container fixed>
          <Grid container direction="row" alignContent="center" justify="center">
              <Grid item xs={12}>
                <TextField value={state.input} onChange={ev => setState({ ...state, input: ev.target.value})} label="Padrões" placeholder="Coloque aqui os padrões" fullWidth ></TextField>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center"}}>
                  <Button onClick={onClick} >
                      Encontre o padrão
                  </Button>
              </Grid>
          </Grid>

          {
              state.foundPattern &&
              <Grid item xs={12}>
              <SystemTable columns={columns} 
              showPagination={false}
              noDataText="Nenhum comprador para esta oferta"
		      pagination={{}} 
              rows={Object.keys(state.foundPattern).map(key => ({
                  pattern: key,
                  repeat: state.foundPattern[key]
              }))} />
              </Grid>
          }
      </Container>
  );
}

export default App;
