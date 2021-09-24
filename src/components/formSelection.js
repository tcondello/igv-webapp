import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Slideshow from '@material-ui/icons/Slideshow';

const genomes = [
    'Human (GRCh38/hg38)',
    'Human (hg38 1kg/GATK)',
    'Human (CRCh37/hg19)',
    'Human (hg18)',
    'Mouse (GRCm39/mm39)',
    'Mouse (GRCm38/mm10)',
    'Mouse (NCBI37/mm9)',
    'Rat (rn7)',
    'Rat (RGCS 6.0/rn6)',
    'Gorilla (Kamilah_GGO_v0/gorGor6)',
    'Gorilla (gorGor4.1/gorGor4)',
    'Chimp (panTro6) (panTro6)',
    'Chimp (panTro6) (panTro5)',
    'Chimp (SAC 2.1.4/panTro4)',
    'Bonobo (MPI-EVA panpan1.1/panPan2)',
    'Dog (Broad CanFam3.1/canFam3)',
    'Dog (canFam5)',
    'Cow (ARS-UCD1.2/bosTau9)',
    'Cow (UMD_3.1.1/bosTau8)',
    'Pig (SGSC Sscrofa11.1/susScr11)',
    'Chicken (galGal6)',
    'Zebrafish (GRCZ11/danRer11)',
    'Zebrafish (GRCZ10/danRer10)',
    'C. elegans (ce11)',
    'D. melanogaster (dm6)',
    'D. melanogaster (dm3)',
    'D. melanogaster (dmel_r5.9)',
    'S. cerevisiae (sacCer3)',
    'S. pombe (ASM294v2)',
    'Sars-CoV-2 (ASM985889v3)',
    'A. thaliana (TAIR 10)',
    'Peanut (GCA_003086295.2)',    
]

const track_session = [
    'Local File',
    'Dropbox',
    'Google Drive',
    'URL....'
]

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1),
      },
  }));
  export default function SimpleSelect({ postUp, changeGenome }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        genome: '',
        tracks: '',
        session: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      const handleUploads = (event) => {
        const name = event.target.name;
        if (event.target.name === 'session'){
            console.log(event.target.value)
        }
        else {
            
        }
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
  
// NEED TO ALIGN THE GENOME TO A NEW LINE 
// make this a separate component to use 
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tracks</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.tracks}
          onChange={handleUploads}
          inputProps={{name: 'tracks'}}
        >
            {track_session.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sessions</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.session}
          onChange={handleUploads}
          inputProps={{name: 'session'}}
        >
            {track_session.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
        </Select>        
      </FormControl>
      <Button variant="contained" color="primary" className={classes.button} endIcon={<Slideshow></Slideshow>}>
          View
    </Button>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Genome</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.genome}
          onChange={changeGenome}
          inputProps={{name: 'genome'}}
        >
            {genomes.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
