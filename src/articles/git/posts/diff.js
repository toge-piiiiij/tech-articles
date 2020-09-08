import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';

/* 
    staged: 泛指暫存區 (green)，可以選擇將unstaged or untracked放進來
    unstaged: 工作目錄  (red)
    untracked: git還不知道 (red)

*/

function Diff() {
    const si = `
$ git s
On branch master
Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
    modified:   a
    deleted:    e
    new file:   x

Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
    modified:   b
    deleted:    f

Untracked files:
    (use "git add <file>..." to include in what will be committed)
    y
`
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                {/* 
                    untracked(new and not add)
                    tracked files(staged or unstaged)
                */}
                目前狀況，修改ab、刪除ef、新增xy，並且讓aex放到暫存區(GREEN)。<br></br>
                最後提交是新增efg也就是HEAD
                先將ＨEAD想簡單一點，它就是剛剛的最後提交，我們也沒有換分支，HEAD是我們同支。
            </Typography>
            <PrismCode code={si} language="sh" />


            <Typography variant="body1" gutterBottom>
                查看與目前最新提交的不同：暫存區 ＋ 工作目錄
                對於剛新增的xy，GIT只認得被放到工作目錄的x。
                結果為a, b, e, f, x.
            </Typography>
            <PrismCode code={`$ git diff HEAD`} language="sh" />


            <Typography variant="body1" gutterBottom>
                GIT的HEAD就是新增efg，對於HEAD^來說efg本來就不存在<br></br>
                現在我們在刪除ef，對HEAD^來說他本來就不知道有ef。<br></br>
                但g對HEAD^來說是新的東西所以有它。<br></br>
                而x因為放在工作目錄上，所以HEAD^也認為是新的。
                結果為 a, b, g, x
            </Typography>
            <PrismCode code={`$ git diff HEAD^`} language="sh" />


            <Typography variant="body1" gutterBottom>
                單純無參數代表不跟過去比較，只比對暫存區與工作目錄<br></br>
                aef都在暫存區，只有bf在工作目錄，而y根本還不被GIT知道<br></br>
                又可以當作要加到暫存區(GREEN)之前的檢查～
            </Typography>
            <PrismCode code={`$ git diff\n$ git diff . .`} language="sh" />




            <Typography variant="body1" gutterBottom>
                HEAD做了什麼？內容等於<InlineCode>git show</InlineCode>減去該提交metadata
            </Typography>
            <PrismCode code={`$ git diff HEAD^ HEAD\n$ git show `} language="sh" />


            <Typography variant="body1" gutterBottom>
                <InlineCode>581b</InlineCode>做了什麼？
            </Typography>
            <PrismCode code={`$ git diff 581b^ 581b\n$ git show 581b`} language="sh" />




            <Typography variant="body1" gutterBottom>
                暫存區的與HEAD差異<br></br>
                結果為 a, e, x
            </Typography>
            <PrismCode code={`$ git diff --cached HEAD\n$ git diff --staged\n$ git diff --cached`} language="sh" />



            <Typography variant="body1" gutterBottom>
                暫存區的與HEAD^差異<br></br>
                e刪除被加進去暫存區，對HEAD^來說本來就沒有這個檔案，所以沒差。<br></br>
                fg對HEAD^來說是新檔案。<br></br>
                結果為 a, f, g, x
            </Typography>
            <PrismCode code={`$ git diff --staged HEAD^`} language="sh" />

        </div>
    );
}

export default Diff;