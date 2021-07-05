import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import * as moment from 'moment';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    minWidth: 500,
    [theme.breakpoints.down("sm")]: { minWidth: 'auto' },
  },
  media: {
    height: 0,
    marginTop: 10,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({detail}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const startDate = moment(detail.date, 'YYYY-MM-DD hh:mm:ss GMT+0000');
  const updatedDate =  startDate.format("MMMM D, YYYY")

  return (
    <Card className={classes.root}>
      <CardHeader
        title={detail.title}
        subheader={updatedDate}
      />
      <CardMedia
        className={classes.media}
        image={detail.logoURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {detail.paragraph}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link href={detail.url} target="_blank">
            {detail.url}
          </Link>
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="subtitle1">Head Title:</Typography>
          <Typography paragraph variant="body2">
            {detail.hTitle}
          </Typography>
          <Typography paragraph variant="subtitle1">Head Description:</Typography>
          <Typography paragraph variant="body2">
            {detail.hdTitle}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}