import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'


function CherryPick() {
    const gits =
        [
            '$ git cherry-pick [commit]',
            '$ git cherry-pick [commit] -x',
            '$ git cherry-pick [commit] -e',
            '$ git cherry-pick [commit] -n',
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                Normally pick, keep message
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Note that commit is from somewhere
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                edit the commit prior to committing.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                do not commit, just stage the changes.
            </Typography>
            <PrismCode code={gits[3]} language="sh" />
        </div>
    );
}

export default CherryPick;