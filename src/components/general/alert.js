import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

function Alert(props) {
    const {handleClick, render} = props;
    return (
      <div>        
        <Dialog
          open={render}
          onClose={handleClick}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Welcome to Rightclick.gg"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
               If you don't have a league account look up 'shiptur'. He is a popular league streamer!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary">
              ok
            </Button>            
          </DialogActions>
        </Dialog>
      </div>
    );
  
}

export default Alert;