import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function RemoteUrl() {
    const gits =
        [
            '$ git remote add jq https://github.com/jquery/jquery.git',

            `$ git remote -v\n
# jq      https://github.com/jquery/jquery.git (fetch)
# jq      https://github.com/jquery/jquery.git (push)
# origin  https://github.com/[account]/[repo].git (fetch)
# origin  https://github.com/[account]/[repo].git (push)`,

            `$ git remote\n$git remote rm jq
# jq
# origin`,

            `$ git remote set-url origin [new repo]`,
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                Add a new repo address for <InlineCode>origin</InlineCode>
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                List the connections
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                I don't need that anymore
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Replace the address of <InlineCode>origin</InlineCode>
            </Typography>
            <PrismCode code={gits[3]} language="sh" />

        </div>
    );
}

export default RemoteUrl;