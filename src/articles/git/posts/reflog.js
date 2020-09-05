import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';

function Reflog() {
    const gits =
        [
            '$ git reflog',
            '$ git reflog delete HEAD@{3}',
            '$ git log -g',
            '$ git config --global gc.reflogExpire "7 days"',
            '$ git config --global gc.reflogExpireUnreachable "7 days"',
            '$ git config --local gc.master.reflogExpireUnreachable "14 days"',
            '$ git reflog expire --expire=now --all',
            '$ git gc',
        ]
    const recognizedActions = ['checkout', 'pull', 'push', 'clone', 'reset', 
                                'branch', 'rebase', 'stash', 'revert', 'commit']
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                It stores user actions.<br/>
                {recognizedActions.map(a => <InlineCode>{a}</InlineCode>)} are all recognized.
            </Typography>
            <PrismCode code={gits[0]} language="sh" />


            <Typography variant="body1" gutterBottom>
                <InlineCode>HEAD@{0}</InlineCode> means the newest
            </Typography>


            <Typography variant="body1" gutterBottom>
                Delete spec record (and it happens to be <InlineCode>commit</InlineCode>)
            </Typography>
            <PrismCode code={gits[1]} language="sh" />


            <Typography variant="body1" gutterBottom>
                But it didn't remove commit actually.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Delete all records
            </Typography>
            <PrismCode code={gits[6]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Remove objects
            </Typography>
            <PrismCode code={gits[7]} language="sh" />
        </div>
    );
}

export default Reflog;