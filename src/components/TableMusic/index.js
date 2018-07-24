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

class TableMusic extends Component {
  constructor(props) {
    super(props);
    const { classes, data } = props;
    this.state =  {
      addedToPlaylist: [],
      addedSong: {}
    }
  }

  HandleAddToPlaylistClick = () => {
    return console.log('Added to playlist: ');
  }
  
  HandlePlayClick = () => {
    return console.log('test play');
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(element => {
              return (
                <TableRow key={element.key}>
                  <TableCell>{element.titre}</TableCell>
                  <TableCell><i className='material-icons' style={{cursor:'pointer'}} onClick={this.HandlePlayClick}>play_arrow</i></TableCell>
                  <TableCell><i className='material-icons' style={{cursor:'pointer'}} onClick={this.HandleAddToPlaylistClick}>playlist_add</i></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
} 

TableMusic.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(TableMusic);