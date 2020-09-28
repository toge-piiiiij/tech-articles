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
           看這個tag的資訊，跟用<InlineCode>git cat-file -p [commitID]</InlineCode>的資訊欄位一模一樣
        </Typography>
        <PrismCode code={gits[1]} language="sh" />

        <Typography variant="body1" gutterBottom>
            承上，用這個去拿真正的物件，發現它的值就是該tag標在的commit值。
        </Typography>
        <PrismCode code={gits[2]} language="sh" />

        <Typography variant="h6" gutterBottom>
            Annotated tag
        </Typography>
        <PrismCode code={gits[3]} language="sh" />

        <Typography variant="body1">
            跟剛剛看和unannotated的資料欄位都不同
        </Typography>
        <PrismCode code={gits[4]} language="sh" />

        <Typography variant="body1">
            和unannotated印出來的不同：這是他自己的commit
        </Typography>
        <PrismCode code={gits[5]} language="sh" />

        <Typography variant="body1" gutterBottom>
            <InlineCode>git show</InlineCode> for display annotated tag.
        </Typography>
        <Typography variant="body1" gutterBottom>
            
        </Typography>


        <Typography variant="h1" gutterBottom/>


        <Typography variant="h6" gutterBottom>
            同步所有tag到遠端
        </Typography>
        <PrismCode code={gits[6]} language="sh" />


        <Typography variant="body1" gutterBottom>
            或是push特定的tag
        </Typography>
        <PrismCode code={gits[7]} language="sh" />


    </div>
    );
}

export default CreateTag;