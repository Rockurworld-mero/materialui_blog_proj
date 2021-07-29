import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundcolor: 'red',
  },
  hero:{
    backgroundImage: `linear~gradient(rgba(0, 0, 0.5), rgba(0 ,0 , 0.5)), url
    ('https://images.unsplash.com/photo-1624319597720-1e197203857b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjQ0MDkwMw&ixlib=rb-1.2.1&q=80&w=1080')`,
    hight: '500px',
    BackgroundPosition: 'center',
    backgroundRepeate: 'no-repeat',
    bckgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justified: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: '4rem',
  },
  blogContainer:{
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 80,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth :'100%'
  },
  media: {
    height: 140
  },
  CardActions: {
    display: 'flex',
    margin:'0 10px',
    justifyContent: 'space-between'
  },
  authoer: {
    display: "flex",
  }

}));


function App() {
  const classes = useStyles();
  return (
    <>
    <div className="App">
    <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color='secondary'>
            Blog
          </Typography>
        </Toolbar>
      </AppBar>


      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth='lg' className={classes.blogsContainer}>
          <Typography variant="h6" className={classes.blogTitle} color='secondary'>
            Blog
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.Card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1624319597720-1e197203857b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjQ0MDkwMw&ixlib=rb-1.2.1&q=80&w=1080"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext Add GitHub, add branch
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={CardActions} >
              <Box className={classes.author}>
                <Avatar 
                src="https://images.unsplash.com/photo-1624319597720-1e197203857b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjQ0MDkwMw&ixlib=rb-1.2.1&q=80&w=1080"
                />
                <Box ml={2}>
                <Typography variant="subtitle2" component="p">
                  Guy Clons
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                  May 14, 2020
                </Typography>
                </Box>
              </Box>
             <Box >
              <BookmarkBorderIcon/>
             </Box>
            </CardActions>
          </Card>


            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            
            </Grid>
          </Grid>
      </Container>
    </div>
    
    </>
  );
}

export default App;
