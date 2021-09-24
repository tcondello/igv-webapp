import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
// TODO Set up Auth check in here
  const [auth] = React.useState(true);
  // Auth.currentUserInfo()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IGV-Amplify-POC
          </Typography>
          {auth && (
            <div>
              <AmplifySignOut />               
            </div>
          )}
        </Toolbar>        
      </AppBar>
    </div>
  );
}
