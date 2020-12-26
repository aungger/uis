import React, {useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from 'static/test.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const tileData = [
  {
    img: image,
    title: 'title1',
    author: 'Author1',
    cols: 2,
  },
  {
    img: image,
    title: 'title2',
    author: 'Author2',
    cols: 1,
  },
  {
    img: image,
    title: 'title3',
    author: 'Author3',
    cols: 3,
  },
  {
    img: image,
    title: 'title4',
    author: 'Author4',
  },
  {
    img: image,
    title: 'title5',
    author: 'Author5',
  },
  {
    img: image,
    title: 'title6',
    author: 'Author6',
  }
];

export const createOnClick = () => () => {
  console.log('in here');
};

export const Projects = () => {
  const classes = useStyles();
  const onClick = useCallback(createOnClick(), []);

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.cols || 1}
            onClick={onClick}
          >
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Projects;


