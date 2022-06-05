import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';

class MDialog extends React.Component {
  render() {
    const { tool, open, onClose } = this.props;

    return (
      <Dialog
        open={open}
        BackdropProps={{ sx: { backdropFilter: 'blur(5px)' } }}
        TransitionComponent={Zoom}
        maxWidth="sm"
        fullWidth
        onClose={onClose}
      >
        <DialogTitle sx={{ alignItems: 'center', display: 'flex' }}>
          {tool.title}
          <div style={{ marginLeft: 'auto', width: 64 }}>
            {tool.icon}
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="justify" sx={{ textIndent: '1.2cm' }}>
            {tool.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

MDialog.propTypes = {
  tool: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MDialog;
