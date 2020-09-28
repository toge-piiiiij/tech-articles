import React, { useState, useRef } from 'react'
import * as Posts from "./posts";
import { Helmet } from "react-helmet";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useEventCallback } from "rxjs-hooks";
import { fromEvent } from "rxjs";
import { map, switchMap, takeUntil, withLatestFrom } from "rxjs/operators";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxShadow: '1px 1px 4px 0px rgba(0,0,0,0.2)',
    marginTop: '24px',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '70vh',
    overflowY: 'scroll',
    boxShadow: '1px 1px 4px 0px rgba(0,0,0,0.2)',
    flex: '1 1 100px',

  },
  render: {
    maxHeight: '70vh',
    overflowY: 'scroll',
    background: '#ffffff',
    padding: '24px',
    flex: '1 1 0',
  },
  resizer: {
    background: 'orange',
    cursor: 'pointer',
    alignItems: 'center',
    color: 'white',
    width: '20px'
  },
}));

function Gits() {
  const [Post, setPost] = useState(null)
  const classes = useStyles();
  const handleGistRender = (c) => {
    setPost(c())
  }

  const leftEle = useRef(null);
  const [onMouseDown, leftX] = useEventCallback(
    (event$, inputs$) => {
      return event$.pipe(
        withLatestFrom(inputs$.pipe(map(([leftEle]) => leftEle))),
        switchMap(([event, leftEle]) => {
          console.log(event);
          const leftStyle = getComputedStyle(leftEle.current);
          const width0 = parseFloat(leftStyle.getPropertyValue("width"));
          const startX = event.clientX;
          return fromEvent(window, "mousemove").pipe(
            map((moveEvent) => moveEvent.clientX - startX + width0),
            takeUntil(fromEvent(window, "mouseup"))
          );
        })
      );
    },
    null,
    [leftEle]
  );

  const leftStyle = {
    flexBasis: leftX === null ? 0 : Math.max(200, leftX),
    flexGrow: leftX === null ? 1 : 0,
    flexShrink: 0
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Git snippet</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js" integrity="sha512-WkVkkoB31AoI9DAk6SEEEyacH9etQXKUov4JRRuM1Y681VsTq7jYgrRw06cbP6Io7kPsKx+tLFpH/HXZSZ2YEQ==" crossorigin="anonymous"></script>
      </Helmet>
      <List className={classes.list} style={leftStyle} ref={leftEle}>
        {Posts.default.map(a =>
          <ListItem
            button
            className={classes.card}
            onClick={() => handleGistRender(a.component)}>
            <ListItemText primary={a.title} />
          </ListItem>
        )}
      </List>
      <div className={classes.resizer} onMouseDown={onMouseDown}></div>
      <div className={classes.render}>
        {Post || 'NOTHING'}
      </div>
    </div>
  );
}

export default Gits;