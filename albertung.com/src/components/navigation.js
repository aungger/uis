import React from 'react';
import PropTypes from 'prop-types';
import styles from 'stylesheets/navigation';
import {TABS} from 'utils/constants';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Navigation = ({
  onTabClick
}) => {
  const tabs = TABS.map((entry) => {
    return (
      // <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label={entry.name} /> // need to figure out about icon
    );
  });


  
  return (
    <BottomNavigation
      value="Home"
      onChange={(event) => {
        onTabClick(event.currentTarget.textContent);
      }}
      showLabels
      // className={classes.root}
    >
      {tabs}
    </BottomNavigation>
  )
}

Navigation.propTypes = {
  onTabClick: PropTypes.func.isRequired
};

export default Navigation;