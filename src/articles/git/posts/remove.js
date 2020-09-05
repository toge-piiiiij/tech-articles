import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Remove() {
    const gits =
        [
            `# git rm = rm  + git add
$ git rm [file]`,
            '$ git rm -r [folder] ',
            '$ git rm --cached [filename]',
            '$ git rm -r --cached [dirName]',
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
               Remove file and let git know
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
               Remove folder and let git know
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Note that commit is from somewhere.
                So using <InlineCode>git log</InlineCode>, you're gotta see the <InlineCode>(cherry picked from commit [commitId]) after commit message</InlineCode>
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                edit the commit prior to committing.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />
        </div>
    );
}

export default Remove;