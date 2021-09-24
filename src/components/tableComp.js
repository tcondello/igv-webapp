import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Slideshow from '@material-ui/icons/Slideshow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    table: {
        minWidth: 550,
      },
  }));

const tableData = [
    {bucket: 'swb-mybucket', object: 'data/NA21144.bam', chromosome: 'chr11', location: 95577818},
    {bucket: 's3-sample-genomics-data-igv', object: 'data/NA21144.chrom11.ILLUMINA.bwa.GIH.low_coverage.20130415.bam', chromosome: 'chr11', location: 57425684},
    {bucket: 's3-sample-genomics-data-igv', object: 'data/NA21144.chrom11.ILLUMINA.bwa.GIH.low_coverage.20130415.bam', chromosome: 'chr11', location: 34158540},
    {bucket: 's3-sample-genomics-data-igv', object: 'data/NA21144.chrom20.ILLUMINA.bwa.GIH.low_coverage.20130415.bam', chromosome: 'chr20', location: 46812315},
    {bucket: 's3-sample-genomics-data-igv', object: 'data/NA21144.chrom20.ILLUMINA.bwa.GIH.low_coverage.20130415.bam', chromosome: 'chr20', location: 51435450}
]

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S3 Bucket</TableCell>
            <TableCell>Object</TableCell>
            <TableCell>Chromosome</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.bucket}
              </TableCell>
              <TableCell>{row.object}</TableCell>
              <TableCell>{row.chromosome}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell><Button variant="contained" color="primary" className={classes.button} endIcon={<Slideshow></Slideshow>}>View</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
