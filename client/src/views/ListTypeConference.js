import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Link from '@material-ui/core/Link';
import ViewDialog from './ViewDialog';
import * as moment from 'moment';

import { Box, IconButton, MenuItem, ListItemIcon, ListItemText, Popover, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: 3
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

const ChipButton = withStyles((theme) => ({
  root: {
    fontWeight: 100,
    fontSize: 11,
    padding: theme.spacing(0.2, 1),
    borderRadius: 3,
    marginRight: 5,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    }
  }
}))(Button);

ListTypeConference.propTypes = {
  logoURL: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  hdTitle: PropTypes.string,
  hTitle: PropTypes.string,
  paragraph: PropTypes.string,
  url: PropTypes.string
};

export default function ListTypeConference({ logoURL, title, date, hdTitle, hTitle, paragraph, url }) {
  const classes = useStyles();
  const theme = useTheme();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const detailed = { logoURL, title, date, hdTitle, hTitle, paragraph, url };
  const startDate = moment(date, 'YYYY-MM-DD hh:mm:ss GMT+0000');
  const updatedDate =  startDate.format("MMM D, YYYY")
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const viewContents = () => {
    console.log(logoURL, title, date, hdTitle, hTitle, paragraph, url);
    setOpenDialog(true);
    setOpen(false);
  }
  const handleCloseModal = () => {
    setOpenDialog(false);
  }
  return (
    <Card className={classes.root} variant="contained">
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flex: 1,
              [theme.breakpoints.down('md')]: { display: 'block' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar alt={title} src={logoURL} className={classes.large} />
              <Box sx={{ display: 'block' }}>
                <Typography variant="h4" sx={{ textAlign: 'left', maxWidth: 500, marginLeft: 2 }}>
                  {title}
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'left', maxWidth: 500, marginLeft: 2, marginTop: 1 }}>
                  {paragraph}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left', maxWidth: 500, marginLeft: 2}}>
                  <Link href={url} target="_blank">
                    {url}
                  </Link>   
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 2,
                width: 'fit-content',
                [theme.breakpoints.down('md')]: { mt: 2, paddingLeft: '84px' },
                [theme.breakpoints.down('sm')]: { display: 'block' }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: '10px',
                  marginLeft: 'auto',
                  alignItems: 'center',
                  // [theme.breakpoints.down('sm')]: { justifyContent: 'left', mt: 2 }
                }}
              >
                <CalendarTodayIcon sx={{ mr: 1, width: 15, height: 15 }} />
                <Typography variant="caption">{updatedDate}</Typography>
              </Box>
            </Box>
          </Box>
          <IconButton size="small" ref={anchorRef} aria-label="detail" onClick={handleOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </CardContent>
      <Popover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ py: 1, px: 2.5 }} onClick={viewContents}>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'caption' }} >View Contents</ListItemText>
        </MenuItem>
      </Popover>
      <ViewDialog open = {openDialog} handleClose = {handleCloseModal} detailed = {detailed}/>
    </Card>
  );
}
