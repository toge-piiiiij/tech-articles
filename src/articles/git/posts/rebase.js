import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Rebase() {
    const gits =
        [
            `$ git rebase [commit] -i\n
# pick    : pure situation as you think
# squash  : merge with prev but keep its message
# fixup   : merge with prev but drop its message
# drop    : dump it
# edit    : breaking point here, 
            choose to edit commit message or do something then --continue
# reword  : breaking point here, edit commit message
# exec    : ?\n`,
            '$ git rebase [prevCommit] -i',
            'git rebase --onto [destinationCommit] [currentBranchRootCommit]'
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
               go to vim mode
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Note that commit is from somewhere.
                So using <InlineCode>git log</InlineCode>, you're gotta see the <InlineCode>(cherry picked from commit [commitId]) after commit message</InlineCode>
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Chop the startingCommit and move the branch to destination
            </Typography>
            <PrismCode code={gits[2]} language="sh" />


            <Typography variant="body1" gutterBottom>
                edit the commit prior to committing.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />
        </div>
    );
}

export default Rebase;