import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Pull() {
    const gits = 
        [
            '$ git pull',
            '$ git pull --rebase',
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                等同於<InlineCode>fetch</InlineCode>加上<InlineCode>merge</InlineCode>
                Do fetch and merge, get news and digest it. 
            </Typography>
            <PrismCode code={gits[0]} language="sh" />
            <Typography variant="body1" gutterBottom>
                對於遠端來說，merge也算一個commit，所以現在我要merge遠端但不要merged形式的commit
            </Typography>
            <PrismCode code={gits[1]} language="sh" />
        </div>
    );
}

export default Pull;