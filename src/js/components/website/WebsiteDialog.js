import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@material-ui/core';

export default function WebsiteDialog({
  websites,
  dispatch,
  websiteDialogIndex,
  setWebsiteDialogIndex,
}) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [icon, setIcon] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const close = () => {
    setWebsiteDialogIndex(undefined);
    setName('');
    setUrl('');
    setIcon('');
    setBackgroundColor('#ffffff');
  };

  const submit = e => {
    e.preventDefault();

    if (websiteDialogIndex === null) {
      dispatch({
        type: 'push',
        path: 'websites',
        value: {
          name,
          url,
          icon,
          backgroundColor,
        },
      });
    } else {
      dispatch({
        type: 'set',
        path: 'websites',
        index: websiteDialogIndex,
        value: {
          name,
          url,
          icon,
          backgroundColor,
        },
      });
    }

    close();
  };

  useEffect(() => {
    if (typeof websiteDialogIndex === 'number') {
      setName(websites[websiteDialogIndex].name);
      setUrl(websites[websiteDialogIndex].url);
      setIcon(websites[websiteDialogIndex].icon);
      if (websites[websiteDialogIndex].backgroundColor) {
        setBackgroundColor(websites[websiteDialogIndex].backgroundColor);
      }
    }
  }, [websiteDialogIndex, websites]);

  return (
    <Dialog open={websiteDialogIndex !== undefined} onClose={close}>
      <form onSubmit={submit}>
        <DialogTitle>{`${
          websiteDialogIndex !== null ? 'Edit' : 'Add'
        } Website`}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="URL"
            onChange={e => {
              setUrl(e.target.value);
            }}
            value={url}
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            label="Icon URL"
            onChange={e => {
              setIcon(e.target.value);
            }}
            value={icon}
            variant="outlined"
          />
          <br />
          <br />
          <span>
            <Typography>
              Background Color:&nbsp;&nbsp;
              <input
                type="color"
                value={backgroundColor}
                onChange={e => setBackgroundColor(e.target.value)}
              />
            </Typography>
          </span>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
