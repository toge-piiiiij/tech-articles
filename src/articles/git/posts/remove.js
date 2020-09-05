import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Remove() {
    const gits =
        [
            `# git rm = rm  + git add
$ git rm [file]`,
            '$ git rm -r [folder] ',
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
                Remove file and let git know
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Remove folder and let git know
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                If file is new to .git and already be added to staged: <InlineCode>A</InlineCode> -&gt; <InlineCode>??</InlineCode>
            </Typography>
            <Typography variant="body1" gutterBottom>
                If file is already recognized by git: <InlineCode>M</InlineCode> -&gt; <InlineCode>D</InlineCode> & <InlineCode>??</InlineCode>
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                edit the commit prior to committing.
            </Typography>
            <PrismCode code={gits[3]} language="sh" />

            <Typography variant="h5" gutterBottom>Kind of confusing</Typography>

            <Typography variant="body1" gutterBottom>
                We cannot remove the staged file whether the file is new or not. <b>This failed.</b>
            </Typography>
            <PrismCode code={gits[4]} language="sh" />
            <Typography variant="body1" gutterBottom>
                Or using <InlineCode>-f</InlineCode> will work for you!
            </Typography>
            <PrismCode code={gits[5]} language="sh" />

            <Typography variant="h5" gutterBottom><InlineCode>--cached</InlineCode> on folder?</Typography>

            <Typography variant="body1" gutterBottom>
                Delete the folder but you use <InlineCode>--cached</InlineCode> for keeping the file inside.<br></br>
                That means do nothing. Here's the result:
            </Typography>
            <PrismCode code={gits[6]} language="sh" />


            <Typography variant="body1" gutterBottom>
                Delete directly, don't think too much lol
            </Typography>
            <PrismCode code={gits[7]} language="sh" />


            <Typography variant="h5" gutterBottom><InlineCode>--cached</InlineCode> on file?</Typography>

            <Typography variant="body1" gutterBottom>
                You modified files, and create files, then add all to staged and run this:
            </Typography>
            <PrismCode code={gits[8]} language="sh" />



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