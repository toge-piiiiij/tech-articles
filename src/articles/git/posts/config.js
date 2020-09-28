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
                三種等級的git設定檔案{levels.map(l => <InlineCode>{`--${l}`}</InlineCode>)}
            </Typography>


            <Typography variant="body1" gutterBottom>
                列出最高等級的設定
            </Typography>
            <PrismCode code={gits[0]} language="sh" />

            <Typography variant="body1" gutterBottom>
                寫給全域的指令，更方便組合要下的指令
            </Typography>
            <PrismCode code={gits[1]} language="sh" />



            <Typography variant="body1" gutterBottom>
                現在是微軟電腦則讓它為true，代表在提交的時候把所有cslf變成lf，當你要更新或是轉branch時，會把lf轉為微軟電腦的csrf；
                MacO或是Linux，則寫成<InlineCode>input</InlineCode>代表不需要轉換<br />
                除非你確認你寫的產品都是在微軟環境使用就沒差不用改～
            </Typography>
            <PrismCode code={gits[2]} language="sh" />



            <Typography variant="body1" gutterBottom>
                當指令有typo時，git會猜並且執行指令，一單位是100毫秒
            </Typography>
            <PrismCode code={gits[3]} language="sh" />
        </div>
    );
}

export default Config;