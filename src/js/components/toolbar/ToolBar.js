import {
  AppBar,
  Grow,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Add, Close, Edit, Settings } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Clock from './Clock';

const useStyles = makeStyles({
  time: {
    flexGrow: 1,
  },
});

export default function ToolBar({
  editMode,
  setEditMode,
  setWebsiteDialogIndex,
  setSettings,
}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography classes={{ root: classes.time }} variant="h6">
          <Clock />
        </Typography>
        <Grow in={editMode}>
          <IconButton
            onClick={() => {
              setWebsiteDialogIndex(null);
            }}
            color="inherit"
          >
            <Add />
          </IconButton>
        </Grow>
        <IconButton
          onClick={() => {
            setEditMode(!editMode);
          }}
          color="inherit"
        >
          {editMode ? <Close /> : <Edit />}
        </IconButton>
        <IconButton
          onClick={() => {
            setSettings(true);
          }}
          color="inherit"
        >
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
