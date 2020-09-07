import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode'


function Clean() {
    const gits =
        [
            '$ git clean -f',   // 刪除 新檔案卻沒有被staged
            '$ git clean -xf',  // 刪除untracked，即便是被.gitignore還是會被找到刪除
            `$ git clean -n`,   // 拿來檢查等等會被刪除，但是在gitignore逃過一劫
            `$ git clean -i`,   // 互動模式
            `mkdir waittobeclean
touch waittobeclean/bar.txt`,   // git clean -n 不會查到這裡, 
            `git clean -df`     

            //  但若該資料夾有existing and new，則規則會變回原本模式，只刪除該資料夾內的untracked
            // git clean -f就可


        ]
    return (
        <div>
            <Typography variant="h5" gutterBottom>Like a draft, and stash is stack</Typography>
            <Typography variant="body1" gutterBottom>
                Store current working status
            </Typography>
            <PrismCode code={gits[0]} language="sh" />



            <Typography variant="body1" gutterBottom>
                Restore the newest draft
            </Typography>
            <PrismCode code={gits[1]} language="sh" />



            <Typography variant="body1" gutterBottom>
                Restore the newest draft, but <b>keep it in the list.</b>
            </Typography>
            <PrismCode code={gits[2]} language="sh" />



            <Typography variant="body1" gutterBottom>
                Restore the second draft, but <b>keep it in the list.</b>
            </Typography>
       

            <Typography variant="h5" gutterBottom>Brainstorming</Typography>
            <Typography variant="body1" gutterBottom>
                Modify <InlineCode>a, b</InlineCode>, remove <InlineCode>e, f</InlineCode> and create <InlineCode>x, y</InlineCode><br></br>
                Then <InlineCode>git add a e x</InlineCode>
                And we use <InlineCode>git stash -u</InlineCode>
            </Typography>
            <PrismCode code={gits[9]} language="sh" />


            <Typography variant="body1" gutterBottom>
                Then check every parent in the stash object. These are <i>last commit</i>, <i>index</i> and <i>untracked</i>, respectively.
            </Typography>
            <PrismCode code={gits[10]} language="sh" />
            <PrismCode code={gits[11]} language="sh" />
            <PrismCode code={gits[12]} language="sh" />


            <Typography variant="body1" gutterBottom>
                If we store it by using <InlineCode>git stash</InlineCode>, it only gets two parents.
            </Typography>




        </div>
    );
}

export default Clean;