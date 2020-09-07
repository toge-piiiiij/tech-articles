import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'


function Diff() {
    const si = `
Changes to be committed:
(use "git restore --staged <file>..." to unstage)
modified:   a.txt
deleted:    e.txt
new file:   x

Changes not staged for commit:
(use "git add/rm <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified:   b.rxr
deleted:    f.txt

Untracked files:
(use "git add <file>..." to include in what will be committed)
y
`
    const gits = 
        [
            `$ git diff HEAD`,          // a, b, e, f, x, print tracked file, ef deleted
            '$ git diff HEAD^',         // print a, b, g, x, 上上一個commit本來就還沒有efg，顯示g為new
            `$ git diff`,               // print b, f (print unstaged and untrackeed)，git add 之前用
            `$ git diff . .`,           // print b, f (print unstaged and untrackeed)
            
            `$ git diff HEAD HEAD^`,    // 單純比較commit改動
            
            `$ git diff 581b^ 581b`,    // 該次改動 等於git show 581b
            `$ git diff HEAD^ HEAD`,    // 該次改動 等於git show
            
            
            `$ git diff --cached HEAD`, // 綠色a, e, x
            `$ git diff --staged`,      // 綠色a, e, x
            `$ git diff --cached`,      // 綠色a, e, x
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                Current status: and the last change is create e, f, g
            </Typography>
            <PrismCode code={si} language="sh" />
        </div>
    );
}

export default Diff;