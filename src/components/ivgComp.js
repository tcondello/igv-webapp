import React, { Component } from 'react'
import SimpleSelect from './formSelection'
import igv from 'igv';

var igvStyle = {
    paddingTop: '10px',
    paddingBottom: '10px',
    margin: '8px',
    border: '1px solid lightgray'
  }
  
// put all the logic from the other app.js into here
// need to add a container to the classs
// go through and test auth
class AppIgv extends Component {
    setGenome = genome => {
        this.setState({ genome })
    };
    state = {
        genome: 'rn7',
        locus: '',
        setGenome: this.setGenome
    };
    createIGV() {
        const igvContainer = document.getElementById('igv-div');
        const igvOptions = {genome: this.state.genome , locus: this.state.locus};
        return igv.createBrowser(igvContainer, igvOptions);
    };
    updateIGV = (event) => {
        this.setGenome(event.target.value)
        console.log(event.target.value)
    }

    componentDidMount() {
        this.createIGV()
    }    
  
    render() {
      return (

        <div>
            <SimpleSelect 
                postUp=''
                changeGenome={this.updateIGV}
            />
            <div id="igv-div" style={igvStyle}></div>            
        </div>
            
      );
    }
  }

export default AppIgv