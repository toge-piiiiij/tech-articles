import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Helmet } from "react-helmet";
import emoji from 'emoji-dictionary'
import { Button } from '@material-ui/core'

import posts from "./mds";
import './index.css'
const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

function AngularArticles() {
  const [md, setMd] = useState('')
  const handleSelectArticle = () => {
    const post = posts[Math.floor(Math.random() * Math.floor(posts.length))]
    fetch(post.component).then(res => res.text()).then(text => {
      setMd(text)
    })
  }

  return (
    <>
      <Helmet>
        <title>MurMuring .....</title>
      </Helmet>
      <div className="randomly-murmur">
        <Button
          className="randomly-click"
          variant="contained"
          size="large"
          color="primary"
          onClick={handleSelectArticle}>
          Click me to see random post
        </Button>
        <ReactMarkdown source={md} renderers={{ text: emojiSupport }} />
      </div>
    </>
  );
}

export default AngularArticles;