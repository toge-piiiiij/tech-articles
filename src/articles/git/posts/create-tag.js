import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode'

function CreateTag() {
    const gits = 
    [
        '$ git tag temp-apple',
        
        `$ git cat-file -p temp-apple\n
# tree b2b161aefc2b86809ad8e2d7d16db45768ceda31
# parent e20b06ad080192dbf775d980ca517365bdf197a9
# author toge-piiiiij <jia0.togepiii@gmail.com> 1599195339 +0800
# committer toge-piiiiij <jia0.togepiii@gmail.com> 1599195339 +0800`,
        
        `# same as git rev-parse HEAD
$ git rev-parse temp-apple
# 750d2b113551ef2d8de397687f34600a7918d84c`,
        
        `$ git tag second-temp-apple -a -m 'This is second tag with message'`,
        
        `$ git cat-file -p second-temp-apple
# object 750d2b113551ef2d8de397687f34600a7918d84c
# type commit
# tag second-temp-apple
# tagger toge-piiiiij <jia0.togepiii@gmail.com> 1599279159 +0800

This is second tag with message`,
        
        `$ git rev-parse second-temp-apple
1dbef0603debff29c5f2f3cce52a2605548dc85d`,

    '$ git push --tags',
    '$ git push origin temp-apple',

    ]
    return (
        <div>
        <Typography variant="h6" gutterBottom>
            Unannotated tag also normal & lightweight.
        </Typography>
        <PrismCode code={gits[0]} language="sh" />

        <Typography variant="body1" gutterBottom>
            see the result then. tree, [parent], author, committer
        </Typography>
        <PrismCode code={gits[1]} language="sh" />

        <Typography variant="body1" gutterBottom>
            get the real object, the real commit as you thought
        </Typography>
        <PrismCode code={gits[2]} language="sh" />

        <Typography variant="h6" gutterBottom>
            Annotated tag
        </Typography>
        <PrismCode code={gits[3]} language="sh" />

        <Typography variant="body1">
            result
        </Typography>
        <PrismCode code={gits[4]} language="sh" />

        <Typography variant="body1">
            It's real commit
        </Typography>
        <PrismCode code={gits[5]} language="sh" />

        <Typography variant="body1" gutterBottom>
            You can use <InlineCode>git show</InlineCode> for display annotated tag.
        </Typography>
        <Typography variant="body1" gutterBottom>
            Unannotated is a just pointer to the commit
        </Typography>


        <Typography variant="h1" gutterBottom/>


        <Typography variant="h6" gutterBottom>
        Finally you can push all tags to remote
        </Typography>
        <PrismCode code={gits[6]} language="sh" />


        <Typography variant="body1" gutterBottom>
            ...or push spec tag
        </Typography>
        <PrismCode code={gits[7]} language="sh" />


    </div>
    );
}

export default CreateTag;