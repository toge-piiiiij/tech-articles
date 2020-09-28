import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode'


function Stash() {
    const gits =
        [
            '$ git stash',
            '$ git stash pop',
            `$ git stash apply`,
            `$ git stash apply "stash@{1}"`,
            `$ git stash drop`,
            `$ git stash drop "stash@{1}"`,
            `$ git stash clear`,
            `$ git stash save "store my draft"`,
            "$ git stash -u ",
            `$ git cat-file -p stash
tree a2f7156f648755276d1dc67fc6461f39134c93f5
parent 89d5d8ed1e5aa37ec449abfcc658dee010e6e217
parent 290d089dbd7b06057e21dc2bb0f53e7b2838380a
parent fd6e5d7106f52bb4bd77d6d682fa9d9b6435c3e4
author jia0_nn <linao264590000@gmail.com> 1599486115 +0800
committer jia0_nn <linao264590000@gmail.com> 1599486115 +0800`,

            `$ git cat-file -p 89d5
tree 7c1c39c9d488bb828ed79eac9d88a6c5b1c072e5
parent b065aefc9806fc66a99e8c7f75a73b1541459ced
author jia0_nn <linao264590000@gmail.com> 1599485788 +0800
committer jia0_nn <linao264590000@gmail.com> 1599485788 +0800
            
add and modi`,


            `$ git cat-file -p 290d
tree 7170260ab311d9c16548e0d2b7d5eb9f5b1a9c55
parent 89d5d8ed1e5aa37ec449abfcc658dee010e6e217
author jia0_nn <linao264590000@gmail.com> 1599486115 +0800
committer jia0_nn <linao264590000@gmail.com> 1599486115 +0800
            
index on master: 89d5d8e add and modi
`,


            `$ git cat-file -p fd6e
tree 08c56681eceec443b14ad503fa7ebf1c46652c50
author jia0_nn <linao264590000@gmail.com> 1599486115 +0800
committer jia0_nn <linao264590000@gmail.com> 1599486115 +0800

untracked files on master: 89d5d8e add and modi`,

            `$ git stash save --keep-index`
        ]
    return (
        <div>
            <Typography variant="h5" gutterBottom>Like a draft, and stash is stack</Typography>
            <Typography variant="body1" gutterBottom>
                把現在所有的改動丟進去，除了untracked狀態的不行之外
            </Typography>
            <PrismCode code={gits[0]} language="sh" />



            <Typography variant="body1" gutterBottom>
                叫回來，不管之前是在工作目錄或是暫存區，都會回到工作目錄
            </Typography>
            <PrismCode code={gits[1]} language="sh" />



            <Typography variant="body1" gutterBottom>
                叫回來，但與上面不同的是，還是會保留在stack裡面
            </Typography>
            <PrismCode code={gits[2]} language="sh" />



            <Typography variant="body1" gutterBottom>
                呼叫最新的第二個
            </Typography>
            <PrismCode code={gits[3]} language="sh" />



            <Typography variant="body1" gutterBottom>
                移除目前stash stack裡面最新一個
            </Typography>
            <PrismCode code={gits[4]} language="sh" />



            <Typography variant="body1" gutterBottom>
                移除目前stash stack裡面第二個
            </Typography>
            <PrismCode code={gits[5]} language="sh" />


            <Typography variant="body1" gutterBottom>
                清空
            </Typography>
            <PrismCode code={gits[6]} language="sh" />



            <Typography variant="body1" gutterBottom>
                也可以在丟給stash的時候給它訊息
            </Typography>
            <PrismCode code={gits[7]} language="sh" />


            <Typography variant="body1" gutterBottom>
                連帶untracked都丟過去
            </Typography>
            <PrismCode code={gits[8]} language="sh" />


            <Typography variant="h5" gutterBottom>Brainstorming</Typography>
            <Typography variant="body1" gutterBottom>
                改動<InlineCode>a, b</InlineCode>，刪除<InlineCode>e, f</InlineCode>，建立<InlineCode>x, y</InlineCode><br></br>
                將<InlineCode>a e x</InlineCode>放到暫存區
                現在我們下<InlineCode>git stash -u</InlineCode>的指令
            </Typography>
            <PrismCode code={gits[9]} language="sh" />


            <Typography variant="body1" gutterBottom>
                現在查看每個parent在幹什麼，分別是：<i>上個改動</i>, <i>工作目錄</i>以及<i>untracked</i>。
            </Typography>
            <PrismCode code={gits[10]} language="sh" />
            <PrismCode code={gits[11]} language="sh" />
            <PrismCode code={gits[12]} language="sh" />


            <Typography variant="body1" gutterBottom>
                如果剛剛的狀況只使用<InlineCode>git stash</InlineCode>，只會有列出兩個parents
            </Typography>



            <Typography variant="body1" gutterBottom>
                Continuing <InlineCode>git stash -u</InlineCode>...
            </Typography>
            <Typography variant="body1" gutterBottom>
                Scan <InlineCode>git diff HEAD [tree, parent 1-3]</InlineCode>.
                tree means "modified" no matter red or green and "new file on stage" <br></br>
                parent1 means HEAD compare to last commit. print nothing<br></br>
                parent2 means <InlineCode>REALLY green status modifed greean and new on stage</InlineCode>.<br></br>
                parent3 means <InlineCode>except untracked files, exsting will be red, new will be green, it will show red abc and green y</InlineCode>.<br></br>
                {/* 相較於 1.existing a,b,c 2.create e,f,g 3.create x,y => 
                    git diff HEAD parent3會比較HEAD與剛剛的untracked file
                    會呈現delete a,b,c new x,y的結果
                */}
            </Typography>


            <Typography variant="body1" gutterBottom>
               只把工作目錄丟到stash，暫存區保留
            </Typography>
            <PrismCode code={gits[13]} language="sh" />
        </div>
    );
}

export default Stash;