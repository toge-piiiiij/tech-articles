import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'


function DeleteTag() {
    const gits = 
        [
            '$ git tag -d [tagName]', 
            `# All are the same\n$ git push -d origin [tagName]\n$ git push origin :[tagName]\n$ git push origin :refs/tags/[tagName]\n`
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                Delete tag locally
            </Typography>
            <PrismCode code={gits[0]} language="sh" />
            <Typography variant="body1" gutterBottom>
                Delete tag remotely
            </Typography>
            <PrismCode code={gits[1]} language="sh" />
        </div>
    );
}

export default DeleteTag;