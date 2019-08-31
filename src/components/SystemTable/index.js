import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Paper,
  Typography,
  Grid
} from '@material-ui/core';

import TableHeader from './TableHeader';

const styles = () => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    border: 'none',
    boxShadow: 'none'
  },
  table: {
    Width: '100%',
    overflow: 'hidden'
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  noData: {
    textAlign: 'center',
    fontWeight: 1000
  },
  tableBodyCell: {
    border: 'none',
    padding: '0px 20px 0px 0px',
    whiteSpacing: 'no-wrap'
  }
});

function SystemTable({
  classes,
  columns,
  rows,
  pagination,
  handleSort,
  handlePageChange,
  noDataText,
  showPagination,
  orderBy,
  page,
  order
}) {
  const handleRequestSort = (event, property) => {
    handleSort(property);
  };

  const handleChangePage = (event, newPage) => {
    handlePageChange(newPage);
  };

  return (
    <div className={classes.root}>
      {rows.length === 0 && (
        <Typography variant="h4" className={classes.noData}>
          {noDataText}
        </Typography>
      )}
      {rows.length > 0 && (
        <Grid item container direction="row">
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                  <TableHeader
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    classes={classes}
                    columns={columns}
                  />
                  <TableBody>
                    {rows.map(row => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                        {columns.map(column => (
                          <TableCell align={row.align} className={classes.tableBodyCell}>
                            {column.component(row[column.id])}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {showPagination && (
                <TablePagination
                  rowsPerPageOptions={[pagination.itensPerPage]}
                  component="div"
                  count={pagination.totalNumOfRows}
                  rowsPerPage={pagination.itensPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page'
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page'
                  }}
                  onChangePage={handleChangePage}
                  labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

SystemTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  noDataText: PropTypes.string.isRequired,
  showPagination: PropTypes.bool,
  orderBy: PropTypes.string,
  page: PropTypes.number,
  order: PropTypes.string
};

SystemTable.defaultProps = {
  showPagination: true,
  orderBy: '',
  page: 0,
  order: 'asc'
};

export default withStyles(styles)(SystemTable);