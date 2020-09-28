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

            `$ git rebase --onto E C1`,

`A -> B -> C -> D -> E -> C1 -> D1 -> E1 -> F1
                       |
                       F`,
        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
               互動模式
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                你不想要上一個commit，所以基於上上一個commit，進入互動去把上一個commit設為<InlineCode>drop</InlineCode>
            </Typography>
            <PrismCode code={'$ git rebase [prevCommit] -i'} language="sh" />

            <Typography variant="body1" gutterBottom>
                移植
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="h6" gutterBottom>現在</Typography>
            <PrismCode code={gits[3]} language="sh" />
            <Typography variant="body1" gutterBottom>do</Typography>
            <PrismCode code={gits[4]} language="?" />
            <Typography variant="body1" gutterBottom>C1移植到了E</Typography>
            <PrismCode code={gits[5]} language="?" />
        </div>
    );
}

export default Rebase;