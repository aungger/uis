import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from 'static/test.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cover: {
    width: 700,
  },
}));

export const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.intro}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Breaking
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            I started breakdancing in 2010 in college with a group called HHCO (Hip Hop Culture Organization). In 2016, I was asked to join a crew called Knock Out Kingz. Everyday I learn more about this dance and it has really shaped the way I view the world.
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
          // title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={image}
          // title="Live from space album cover"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Software Engineer
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            In college, I started as a Finance major, until my senior year where I which to Computer Science. As a kid, I alwayed love being on the computer. I really love the challenges and creative thinking that computer science has to offer.
            </Typography>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Writing
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            This is one of my newer hobbies that I have recently picked up. I believe that it is healthy for us to write about our thoughts and ideas. It gives us a way to express how we feel and reflect on it.
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
          // title="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default Home;