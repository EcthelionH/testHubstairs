import React, { Component } from 'react';
import Papa from 'papaparse';
import { VictoryLine, VictoryChart, VictoryTheme} from 'victory';
import Grid from '@material-ui/core/Grid';

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData : []
        };
    }

    componentWillMount = () => {
        this.CsvToJson();        
    }

    CsvToJson = () => {
        Papa.parse('../data/data_graph.csv', {
        header: true,
        dynamicTyping: true,
        download: true,
        complete: this.ParseDone
        });
    }

    ParseDone = (result) => {
        const jsonData = result.jsonData;
        this.setState({ jsonData });
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={3}>
                    <h3>Courbes des données</h3>
                    <VictoryChart
                    theme={VictoryTheme.material}
                    >
                        <VictoryLine
                            style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                            }}
                            data={this.state.jsonData}
                        />
                    </VictoryChart>
                </Grid>
            </Grid>
        )
    }
}

export default Graph;