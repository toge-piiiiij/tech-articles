import React from 'react'
import Typography from '@material-ui/core/Typography';
import PrismCode from '../../../components/PrismCode'
import InlineCode from '../../../components/InlineCode'


function Clean() {
    const gits =
        [
            `$ mkdir test
             $ touch test/xx`,   // git clean -n 不會查到這裡, 
            `git clean -df`

            //  但若該資料夾有existing and new，則規則會變回原本模式，只刪除該資料夾內的untracked
            // git clean -f就可


        ]
    return (
        <div>
            <Typography variant="body1" gutterBottom>
                現在有這樣的改動
            </Typography>
            <PrismCode code={`
                Changes not staged for commit:
                (use "git add/rm <file>..." to update what will be committed)
                (use "git restore <file>..." to discard changes in working directory)
                modified:   a
                deleted:    e
            
            Untracked files:
                (use "git add <file>..." to include in what will be committed)
                g
            
            `} language="sh" />
            <Typography variant="body1" gutterBottom>
                這樣執行會刪除<InlineCode>g</InlineCode>，刪除不是git認為存在的檔案。<br/>
                但若檔案本身就屬於<InlineCode>.gitignore</InlineCode>就不會因此被刪除
            </Typography>
            <PrismCode code={'$ git clean -f'} language="sh" />


            <Typography variant="body1" gutterBottom>
                承上，會把.gitignore保護的檔案也拿來看是否為untracked
            </Typography>
            <PrismCode code={'$ git clean -xf'} language="sh" />



            <Typography variant="body1" gutterBottom>
                先確認一下等等會清什麼
            </Typography>
            <PrismCode code={`$ git clean -n`} language="sh" />

            <Typography variant="body1" gutterBottom>
                當然也會涵蓋.gitignore裡面有沒有符合刪除的檔案
            </Typography>
            <PrismCode code={`$ git clean -xn`} language="sh" />



            <Typography variant="body1" gutterBottom>
                進入互動模式讓使用者選要刪除什麼
            </Typography>
            <PrismCode code={`$ git clean -i`} language="sh" />

            <Typography variant="body1" gutterBottom>
                承過去規則，只要是.gitignore也不放過，也會成刪除選項內
            </Typography>
            <PrismCode code={`$ git clean -xi`} language="sh" />


            <Typography variant="h5" gutterBottom>特殊case:</Typography>
            <Typography variant="body1" gutterBottom>
                現在假設有個新資料夾有個<InlineCode>xx</InlineCode>檔案<br/>
                無論是<InlineCode>$ git clean -n</InlineCode>還是<InlineCode>$ git clean -xn</InlineCode>都不會發現它。
            </Typography>
            <PrismCode code={gits[0]} language="sh" />
            <Typography variant="body1" gutterBottom>
               但<InlineCode>$ git clean -df</InlineCode>可以連帶刪除untracked資料夾
            </Typography>



            <Typography variant="body1" gutterBottom>
                繼續在裡面新增一個<InlineCode>yy</InlineCode>檔案<br/>
                則這個新檔案就會跟一般case一樣了lol。
            </Typography>


        </div>
    );
}

export default Clean;