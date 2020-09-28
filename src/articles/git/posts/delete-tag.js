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
                刪除本地tag
            </Typography>
            <PrismCode code={gits[0]} language="sh" />
            <Typography variant="body1" gutterBottom>
                刪除遠端tag
            </Typography>
            <PrismCode code={gits[1]} language="sh" />
        </div>
    );
}

export default DeleteTag;