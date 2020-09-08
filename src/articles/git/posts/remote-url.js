import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode';


function RemoteUrl() {
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                新增一個叫做jq的遠端倉庫地址<InlineCode>origin</InlineCode>
            </Typography>
            <PrismCode code={`$ git remote add jq https://github.com/jquery/jquery.git`} language="sh" />

            <Typography variant="body1" gutterBottom>
                列出倉庫與用途
            </Typography>
            <PrismCode code={`$ git remote -v
# jq      https://github.com/jquery/jquery.git (fetch)
# jq      https://github.com/jquery/jquery.git (push)
# origin  https://github.com/[account]/[repo].git (fetch)
# origin  https://github.com/[account]/[repo].git (push)`} language="sh" />

            <Typography variant="body1" gutterBottom>
                I don't need that anymore
            </Typography>
            <PrismCode code={`$ git remote remove jq
# or
$ git remote rm jq`} language="sh" />

            <Typography variant="body1" gutterBottom>
                把該倉庫<InlineCode>origin</InlineCode>的遠端設定成其它的地方
            </Typography>
            <PrismCode code={`$ git remote set-url origin [new repo]`} language="sh" />

            <Typography variant="body1" gutterBottom>
                讓<InlineCode>origin</InlineCode>只有fetch功能，他的push遠端寫成無法辨認lol。
            </Typography>
            <PrismCode code={`$ git remote set-url --push origin DISABLED`} language="sh" />


        </div>
    );
}

export default RemoteUrl;