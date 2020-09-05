import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function Rebase() {
    const gits =
        [
            `$ git rebase [commit] -i\n
# pick    : pure situation as you think
# squash  : merge with prev but keep its message
# fixup   : merge with prev but drop its message
# drop    : dump it
# edit    : breaking point here, 
            choose to edit commit message or do something then --continue
# reword  : breaking point here, edit commit message
# exec    : ?\n`,
            '$ git rebase [prevCommit] -i',
            '$ git rebase --onto [to] [from]',

`A -> B -> C1 -> D1 -> E1 -> F1(current branch)
        |
        C -> D -> E -> F`,

            `$ git rebase --onto E C`,

`A -> B -> C -> D -> E -> C1 -> D1 -> E1 -> F1
                       |
                       F`,
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
               Go to vim mode
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Drop the current commit that you just mistakenly made! Make it <InlineCode>drop</InlineCode> and <InlineCode>:wq</InlineCode>
            </Typography>
            <PrismCode code={gits[1]} language="sh" />

            <Typography variant="body1" gutterBottom>
                Chop source as much as it can.
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="h6" gutterBottom>For example:</Typography>
            <PrismCode code={gits[3]} language="?" />
            <Typography variant="body1" gutterBottom>do</Typography>
            <PrismCode code={gits[4]} language="?" />
            <Typography variant="body1" gutterBottom>and it turns out:</Typography>
            <PrismCode code={gits[5]} language="?" />
        </div>
    );
}

export default Rebase;