import React, { useState } from 'react'
import * as Posts from "./posts";
import { Helmet } from "react-helmet";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    boxShadow: '1px 1px 4px 0px rgba(0,0,0,0.2)',
    marginTop: '24px',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '70vh',
    overflowY: 'scroll',
    boxShadow: '1px 1px 4px 0px rgba(0,0,0,0.2)',
  },
  render: {
    maxHeight: '70vh',
    overflowY: 'scroll',
    background: '#ffffff',
    padding: '24px',
  }
}));

function Gits() {
  const [Post, setPost] = useState(null)
  const classes = useStyles();
  const handleGistRender = (c) => {
    setPost(c())
  }


  return (
    <div className={classes.root}>
      <Helmet>
        <title>Git snippet</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js" integrity="sha512-WkVkkoB31AoI9DAk6SEEEyacH9etQXKUov4JRRuM1Y681VsTq7jYgrRw06cbP6Io7kPsKx+tLFpH/HXZSZ2YEQ==" crossorigin="anonymous"></script>
      </Helmet>
      <List className={classes.list}>
         {Posts.default.map(a =>
          <ListItem
            button
            className={classes.card}
            onClick={() => handleGistRender(a.component)}>
            <ListItemText primary={a.title} />
          </ListItem>
        )}
      </List>
      <div className={classes.render}>
        {Post || 'NOTHING'}
      </div>
    </div>
  );
}

export default Gits;