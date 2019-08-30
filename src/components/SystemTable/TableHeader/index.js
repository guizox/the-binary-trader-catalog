import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = () => ({
  tableHeadCell: {
    backgroundColor: '#f6f7f6',
    fontWeight: 700,
    border: '0px',
    whiteSpacing: 'no-wrap',
    padding: '4px',
    fontSize: '16px'
  }
});

function TableHeader(props) {
  const { order, orderBy, onRequestSort, classes, columns } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map(row => (
          <TableCell
            key={row.id}
            align="left"
            sortDirection={orderBy === row.id ? order : false}
            className={classes.tableHeadCell}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};

export default withStyles(styles)(TableHeader);