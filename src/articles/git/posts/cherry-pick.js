import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function CherryPick() {
    const gits =
        [
            '$ git cherry-pick [commit] -e',
            '$ git cherry-pick [commit] -n',
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                直接挑選該提交，時間commit都是自己當下建立的
            </Typography>
            <PrismCode code={`$ git cherry-pick [commit]`} language="sh" />

            <Typography variant="body1" gutterBottom>
                除了沿用原先的提交訊息，順便加個註解是從哪個地方來的
                <InlineCode>(cherry picked from commit [commitId]) after commit message</InlineCode>
            </Typography>
            <PrismCode code={'$ git cherry-pick [commit] -x'} language="sh" />

            <Typography variant="body1" gutterBottom>
                在提交之前改個訊息
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                先不提交，全部放在暫存區
            </Typography>
            <PrismCode code={gits[3]} language="sh" />
        </div>
    );
}

export default CherryPick;