import React from 'react';
import styles from 'stylesheets/blog';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {BLOGPOSTS} from 'utils/constants';

export const Blog = () => {
  const blogPosts = BLOGPOSTS.map((entry) => {
    return (
      <div
        key={entry.name}
        style={{padding: '10px'}}
      >
          <Card
            onClick={() => {console.log('something');}}
            style={{maxWidth: '300px', maxHeight: '500px'}}
          > 
            <CardActionArea>
              <CardMedia
                style={{height: '140px'}}
                image={entry.image}
                title={entry.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {entry.title}
                </Typography>
                <Typography component="p">
                  {entry.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
    );
  });

  return (
    <div
      className={`${styles.blog__wrapper}`}
    >
      {blogPosts}
    </div>
  );
}

export default Blog;