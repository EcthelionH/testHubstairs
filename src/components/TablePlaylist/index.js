import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});

class TablePlaylist extends Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.state = {
      songsInPlaylist: [{titre: 'song2', duration: 3.2, id: 1}]
    }
  }

  HandlePlayClick = () => {
    console.log('Play');
  }

  HandleDeleteClick = () => {
    console.log('Delete');
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table>
        <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.songsInPlaylist.map(element => {
              return (
              <TableRow key={element.id}>
                  <TableCell>{element.titre}</TableCell>
                  <TableCell><i className='material-icons' style={{cursor:'pointer'}} onClick={this.HandlePlayClick}>play_arrow</i></TableCell>
                  <TableCell><i className='material-icons' style={{cursor:'pointer'}} onClick={this.HandleDeleteClick}>delete</i></TableCell>
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TablePlaylist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TablePlaylist);