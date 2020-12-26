import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import CreateIcon from '@material-ui/icons/Create';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';
import Home from 'components/home';
import Projects from 'components/projects';
import Experience from 'components/experience';
import Blog from 'components/blog';

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const drawerWidth = 240;
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export const renderContent = (tabName) => {
  switch(tabName) {
    case 'projects':
      return <Projects />;
    case 'experience':
      return <Experience />;
    case 'blog':
      return <Blog />;
    default:
      return <Home />;
  }
};

export const App = () => {
  const classes = useStyles();
  const [tab, setTab] = useState('home');

  const content = renderContent(tab);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <ToolbarStyled>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/albertung')} />
          <InstagramIcon onClick={() => window.open('https://www.instagram.com/alby.ung/')} />
          <GitHubIcon onClick={() => window.open('https://github.com/aungger')} />
        </ToolbarStyled>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button key="Home" onClick={() => setTab('home')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <List>
          <ListItem button key="Experience" onClick={() => setTab('experience')}>
            <ListItemIcon><TimelineIcon /></ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItem>
        </List>
        {/* <List>
          <ListItem button key="Skills" onClick={() => setTab('skills')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
        </List> */}
        {/* <List>
          <ListItem button key="Projects" onClick={() => setTab('projects')}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
        <List>
          <ListItem button key="Blog" onClick={() => setTab('blog')}>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div style={{height: '100%', display: 'flex'}}>
          {content}
        </div>
        {/* <Typography div>
          {content}
        </Typography> */}
      </main>
    </div>
  );
};

export default App;