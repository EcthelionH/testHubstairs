import React, { Component } from 'react';
import TableMusic from './TableMusic'
import TablePlaylist from './TablePlaylist';
import Grid from '@material-ui/core/Grid';
import Songs from '../data/songs';

class Music extends Component {
    constructor () {
        super();
        this.state = {
            AddedSongs: []
        };
    }
    render() {
        return (
            <Grid container spacing={40}>
                <Grid item xs={6}>
                    <h3>
                        Liste de chansons
                    </h3>
                    <TableMusic data={Songs}/>
                </Grid>
                <Grid item xs={6}>
                    <h3>
                        Playlist
                    </h3>
                    <TablePlaylist data={this.state.AddedSongs}/>
                </Grid>
            </Grid>
        )
    }
}

export default Music;