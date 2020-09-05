import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'


function Pull() {
    const gits = 
        [
            '$ git pull',
            '$ git pull --rebase',
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                Do fetch and merge, get news and digest it. 
            </Typography>
            <PrismCode code={gits[0]} language="sh" />
            <Typography variant="body1" gutterBottom>
                merged commit <i>(unnecessary commits just for merging process)</i> excepted, merge all remote commits.
            </Typography>
            <PrismCode code={gits[1]} language="sh" />
        </div>
    );
}

export default Pull;