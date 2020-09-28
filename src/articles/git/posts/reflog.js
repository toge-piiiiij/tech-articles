import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';

function Reflog() {
    const gits =
        [
            '$ git reflog',
            '$ git reflog delete HEAD@{3}',
            '$ git log -g',
            '$ git config --global gc.reflogExpire "7 days"',
            '$ git config --global gc.reflogExpireUnreachable "7 days"',
            '$ git config --local gc.master.reflogExpireUnreachable "14 days"',
            '$ git reflog expire --expire=now --all',
            '$ git gc',
        ]
    const recognizedActions = ['checkout', 'pull', 'push', 'clone', 'reset', 
                                'branch', 'rebase', 'stash', 'revert', 'commit']
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                這些行為都是一種紀錄：<br/>
                {recognizedActions.map(a => <InlineCode>{a}</InlineCode>)} are all recognized.
            </Typography>
            <PrismCode code={gits[0]} language="sh" />


            <Typography variant="body1" gutterBottom>
                <InlineCode>HEAD@{0}</InlineCode>代表是最近一次行為
            </Typography>


            <Typography variant="body1" gutterBottom>
                刪除特定的紀錄，假設剛好是屬於commit的紀錄，這樣並不會真的去移除該commit
            </Typography>
            <PrismCode code={gits[1]} language="sh" />


            <Typography variant="body1" gutterBottom>
               用<InlineCode>git log</InlineCode>格式去顯示reflog
            </Typography>
            <PrismCode code={gits[2]} language="sh" />

            <Typography variant="body1" gutterBottom>
                刪除所有行為記錄
            </Typography>
            <PrismCode code={gits[6]} language="sh" />

            <Typography variant="body1" gutterBottom>
                移除實際上對應的物件檔案
            </Typography>
            <PrismCode code={gits[7]} language="sh" />
        </div>
    );
}

export default Reflog;