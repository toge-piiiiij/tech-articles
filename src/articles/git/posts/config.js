import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Config() {
    const gits =
        [
            '$ git config --list --system',
            `$ git config --global alias.sts "status -s"`,
            '$ git config --global core.autocrlf true',
            '$ git config --global help.autocorrect 1',
        ]

    const levels = ['system', 'global', 'local']
    return (
        <div>

            <Typography variant="body1" gutterBottom>
                Three levels configurations: {levels.map(l => <InlineCode>{`--${l}`}</InlineCode>)}
            </Typography>


            <Typography variant="body1" gutterBottom>
                List all system configuration.
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Saving your time!
            </Typography>
            <PrismCode code={gits[1]} language="sh" />



            <Typography variant="body1" gutterBottom>
                You have Windows PC, need to cowork with cross-OS like unix-like, set it <InlineCode>true</InlineCode>.
                cslf to lf when commit, get file update to local or checkout file will convert any lf file to cslf.<br />
                MacOs or Linux, set it <InlineCode>input</InlineCode>, that means no need to convert to lf since you've already been lf. <br />

                If the product is 100% sure working on Windows and all your dev tools are based on Windows, you could set it false.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />



            <Typography variant="body1" gutterBottom>
                Input typo. Git will guess what you want and go run.
            </Typography>
            <PrismCode code={gits[3]} language="sh" />
        </div>
    );
}

export default Config;