import React from 'react';
import styles from 'stylesheets/skills';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {SKILLS} from 'utils/constants';

const Skills = () => {
  // TODO: Figure out way you can do different levels: (Beginner, Intermediate, Advanced)

  const skills = SKILLS.map((entry) => {
    const data = entry.data.map((result) => {
      return (
        <p
          key={result}
        >
          {result}
        </p>
      );
    });

    return (
      <Card
        key={entry.title}
      >
        <CardContent>
          <Typography variant="h5" component="h4">
            {entry.title}
          </Typography>
          <div className={`flex__column ${styles.languages}`}>
            {data}
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <div className={`flex__row ${styles.skills__wrapper}`}>
      {skills}
    </div>
  );
};

export default Skills;