import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function RemoteUrl() {
    const gits =
        [
            '$ git remote add jq https://github.com/jquery/jquery.git',

            `$ git remote -v
# jq      https://github.com/jquery/jquery.git (fetch)
# jq      https://github.com/jquery/jquery.git (push)
# origin  https://github.com/[account]/[repo].git (fetch)
# origin  https://github.com/[account]/[repo].git (push)`,

            `$ git remote
$ git remote rm jq
# jq
# origin`,

            `$ git remote set-url origin [new repo]`,

            '$ git remote remove jq',

            `$ git remote set-url --push origin DISABLED`

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


            <Typography variant="body1" gutterBottom>
                Remove remote spec repo, delete connection
            </Typography>
            <PrismCode code={gits[4]} language="sh" />


            <Typography variant="body1" gutterBottom>
                Make spec repo cannot push, replace any nonsensical URI like <b>DISABLED</b>
            </Typography>
            <PrismCode code={gits[5]} language="sh" />

            
        </div>
    );
}

export default RemoteUrl;