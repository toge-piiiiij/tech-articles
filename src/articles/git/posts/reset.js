import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Reset() {
    const gits =
        [
            `$ git reset HEAD^ --soft`,
            `$ git reset HEAD^ --mixed`,
            `$ git reset HEAD^ --hard`,
            '$ git reset HEAD [file]',
            '$ git reset HEAD^ --hard',
            '$ git reset ORIG_HEAD --hard',
            '$ git checkout HEAD [file]',
        ]
    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Now let's suggest we want status back to last commit.
            </Typography>

            <Typography variant="body1" gutterBottom>
                Tear apart commit,<br></br>
                Prev committed changes is still on staged<br></br>
                Keep current status is still staged or untracked.
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Tear apart commit<br></br>
                Prev committed changes is moved to untracked<br></br>
                Keep current status is still staged or untracked.
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Tear apart commit<br></br>
                Give up committed changes<br></br>
                Give up current status which is staged, also the new files<br></br>
                Untracked new files are still untracked.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />


            <Typography variant="body1" gutterBottom>
                Spec file staged to be unstaged or untracked
            </Typography>
            <PrismCode code={gits[3]} language="sh" />

            <Typography variant="h5" gutterBottom> Doing something dangerous</Typography>
            <Typography variant="body1" gutterBottom>
                <InlineCode>ORIG_HEAD</InlineCode> will store the current sha. <b>Thanks GOD</b>
            </Typography>
            <PrismCode code={gits[4]} language="sh" />


            <Typography variant="body1" gutterBottom>
                If we regret, we can get back to the right way.
            </Typography>
            <PrismCode code={gits[5]} language="sh" />


            <Typography variant="h5" gutterBottom>Trick</Typography>
            <Typography variant="body1" gutterBottom>
                Only restore file whether it's staged or unstaged.
            </Typography>
            <PrismCode code={gits[6]} language="sh" />




            <Typography variant="h5">staged to unstage</Typography>
            <PrismCode code={`git reset file`}></PrismCode>
        </div>
    );
}

export default Reset;