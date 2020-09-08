import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Remove() {
    const gits =
        [
            `# git rm = rm  + git add
$ git rm [file]`,
            '$ git rm -r [folder]',
            '$ git rm --cached [filename]',
            '$ git rm -r --cached [folder]',
            '$ git rm [file on staged]',
            '$ git rm -f [file on staged]',
            `$ git rm -r --cached dir/
$ git sts
D  dir/d.txt
?? dir/
$ git ac 'remove'
On branch master
nothing to commit, working tree clean
`,


            `$ git rm -r dir/`,
            `git rm -r --cached .`

        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                讓GIT知道有刪除檔案，刪除本身也是一種改動
            </Typography>
            <PrismCode code={`# git rm = rm  + git add\n$ git rm [file]`} language="sh" />

            <Typography variant="body1" gutterBottom>
                Remove folder and let git know
            </Typography>
            <PrismCode code={'$ git rm -r [folder]'} language="sh" />

            <Typography variant="body1" gutterBottom>
                若檔案是新的，改動結果會是<b>未被追蹤<InlineCode>??</InlineCode></b>
            </Typography>
            <Typography variant="body1" gutterBottom>
                如果檔案是在暫存區，改動結果會是<b>暫存區呈現刪除<InlineCode>D</InlineCode>＋未被追蹤<InlineCode>??</InlineCode></b>的雙重狀態
            </Typography>
            <PrismCode code={'$ git rm --cached [filename]'} language="sh" />

            <Typography variant="body1" gutterBottom>
                edit the commit prior to committing.
            </Typography>
            <PrismCode code={`$ git rm -r --cached [folder]`} language="sh" />

            <Typography variant="h5" gutterBottom>Kind of confusing</Typography>

            <Typography variant="body1" gutterBottom>
                在暫存區的都無法以此刪除
                We cannot remove the staged file whether the file is new or not. <b>This failed.</b>
            </Typography>
            <PrismCode code={`$ git rm [file on staged]`} language="sh" />
            <Typography variant="body1" gutterBottom>
                但可以新增參數 <InlineCode>-f</InlineCode>達到你要的行為
            </Typography>
            <PrismCode code={`$ git rm -f [file on staged]\n$ git sts\n
D  dir/d.txt\n?? dir/\n$ git ac 'remove'\nOn branch master\nnothing to commit, working tree clean\n`} language="sh" />

            <Typography variant="h5" gutterBottom><InlineCode>--cached</InlineCode> on folder?</Typography>

            <Typography variant="body1" gutterBottom>
                你做的事情是徒勞無功的
                Delete the folder but you use <InlineCode>--cached</InlineCode> for keeping the file inside.<br></br>
                That means do nothing. Here's the result:
            </Typography>
            <PrismCode code={`$ git rm -r --cached dir/`} language="sh" />


            <Typography variant="body1" gutterBottom>
                直接刪除
            </Typography>
            <PrismCode code={`$ git rm -r dir/`} language="sh" />


            <Typography variant="h5" gutterBottom><InlineCode>--cached</InlineCode> on file?</Typography>

            <Typography variant="body1" gutterBottom>
                You modified files, and create files, then add all to staged and run this:
            </Typography>
            <PrismCode code={`git rm -r --cached .`} language="sh" />



            <Typography variant="body1" gutterBottom>
                It remove the files,<br></br>
                New files go to untracked<br></br>
                Existing files go to <InlineCode>D</InlineCode> and go to untracked<br></br>
                All the changed was kept and you did in vain.
            </Typography>
        </div>
    );
}

export default Remove;