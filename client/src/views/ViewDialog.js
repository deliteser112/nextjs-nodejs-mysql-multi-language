import { forwardRef, useState } from 'react';
// material
import {
  Slide,
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
  Box
} from '@material-ui/core';
import { useRouter } from 'next/router';
import * as Multi from '../localize';
import Block from '../components/Block';
import Divider from '@material-ui/core/Divider';
import ContentCard from './ContentCard';

// ----------------------------------------------------------------------

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const styles = {
  paragraph: {
    marginBottom: 10
  }
}
export default function TransitionsDialogs({open, handleClose, detailed}) {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router;
  console.log(detailed);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        scroll = "paper"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {Multi.multi[locale].detail}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ContentCard detail={detailed}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
