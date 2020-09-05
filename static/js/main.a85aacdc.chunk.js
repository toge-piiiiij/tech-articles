(this["webpackJsonptech-articles"]=this["webpackJsonptech-articles"]||[]).push([[0],{167:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=(a(77),a(78),a(35)),i=a(57),m=a.n(i),g=a(30),u=a(60),s=a.n(u),d=a(186),h=a(61),E=a.n(h),p=a(62),f=a.n(p),v=a(63),b=a.n(v),y=[{component:E.a},{component:f.a},{component:b.a}],B=(a(167),function(e){return e.value.replace(/:\w+:/gi,(function(e){return s.a.getUnicode(e)}))});var w=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,r.a.createElement("title",null,"MurMuring .....")),r.a.createElement("div",{className:"randomly-murmur"},r.a.createElement(d.a,{className:"randomly-click",variant:"contained",size:"large",color:"primary",onClick:function(){var e=y[Math.floor(Math.random()*Math.floor(y.length))];fetch(e.component).then((function(e){return e.text()})).then((function(e){o(e)}))}},"Click me to see random post"),r.a.createElement(m.a,{source:a,renderers:{text:B}})))},k=a(36),$=a(33),j=a.n($);var x=function(e){var t=e.code,a=e.language,o=Object(n.useRef)(null);Object(n.useEffect)((function(){l()}));var l=function(){j.a.highlightElement(o.current)};return r.a.createElement("pre",null,r.a.createElement("code",{ref:o,className:"language-".concat(a)},t.trim()))};var D=function(e){var t=e.language,a=e.children,o=Object(n.useRef)(null);Object(n.useEffect)((function(){l()}));var l=function(){j.a.highlightElement(o.current)};return r.a.createElement("code",{ref:o,className:"language-".concat(t)},a)};var A=[{component:function(){var e=["$ git tag temp-apple","$ git cat-file -p temp-apple\n\n# tree b2b161aefc2b86809ad8e2d7d16db45768ceda31\n# parent e20b06ad080192dbf775d980ca517365bdf197a9\n# author toge-piiiiij <jia0.togepiii@gmail.com> 1599195339 +0800\n# committer toge-piiiiij <jia0.togepiii@gmail.com> 1599195339 +0800","# same as git rev-parse HEAD\n$ git rev-parse temp-apple\n# 750d2b113551ef2d8de397687f34600a7918d84c","$ git tag second-temp-apple -a -m 'This is second tag with message","$ git cat-file -p second-temp-apple\n# object 750d2b113551ef2d8de397687f34600a7918d84c\n# type commit\n# tag second-temp-apple\n# tagger toge-piiiiij <jia0.togepiii@gmail.com> 1599279159 +0800\n\nThis is second tag with message","$ git rev-parse second-temp-apple\n1dbef0603debff29c5f2f3cce52a2605548dc85d","$ git push --tags","$ git push origin temp-apple"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Unannotated tag also normal & lightweight."),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"see the result then. tree, [parent], author, committer"),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"get the real object, the real commit as you thought"),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Annotated tag"),r.a.createElement(x,{code:e[3],language:"sh"}),r.a.createElement(k.a,{variant:"body1"},"result"),r.a.createElement(x,{code:e[4],language:"sh"}),r.a.createElement(k.a,{variant:"body1"},"It's real commit"),r.a.createElement(x,{code:e[5],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"You can use ",r.a.createElement(D,null,"git show")," for display annotated tag."),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Unannotated is a just pointer to the commit"),r.a.createElement(k.a,{variant:"h1",gutterBottom:!0}),r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Finally you can push all tags to remote"),r.a.createElement(x,{code:e[6],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"...or push spec tag"),r.a.createElement(x,{code:e[7],language:"sh"}))},title:"Create Tag",path:"create-tag"},{component:function(){var e=["$ git tag -d [tagName]","# All are the same\n$ git push -d origin [tagName]\n$ git push origin :[tagName]\n$ git push origin :refs/tags/[tagName]\n"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete tag locally"),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete tag remotely"),r.a.createElement(x,{code:e[1],language:"sh"}))},title:"Delete Tag",path:"delete-tag"},{component:function(){var e=["$ git remote add jq https://github.com/jquery/jquery.git","$ git remote -v\n# jq      https://github.com/jquery/jquery.git (fetch)\n# jq      https://github.com/jquery/jquery.git (push)\n# origin  https://github.com/[account]/[repo].git (fetch)\n# origin  https://github.com/[account]/[repo].git (push)","$ git remote\n$ git remote rm jq\n# jq\n# origin","$ git remote set-url origin [new repo]","$ git remote remove jq","$ git remote set-url --push origin DISABLED"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Add a new repo address for ",r.a.createElement(D,null,"origin")),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"List the connections"),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"I don't need that anymore"),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Replace the address of ",r.a.createElement(D,null,"origin")),r.a.createElement(x,{code:e[3],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Remove remote spec repo, delete connection"),r.a.createElement(x,{code:e[4],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Make spec repo cannot push, replace any nonsensical URI like ",r.a.createElement("b",null,"DISABLED")),r.a.createElement(x,{code:e[5],language:"sh"}))},title:"Remote Url",path:"remote-url"},{component:function(){var e=["$ git reflog","$ git reflog delete HEAD@{3}","$ git log -g",'$ git config --global gc.reflogExpire "7 days"','$ git config --global gc.reflogExpireUnreachable "7 days"','$ git config --local gc.master.reflogExpireUnreachable "14 days"',"$ git reflog expire --expire=now --all","$ git gc"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"It stores user actions.",r.a.createElement("br",null),["checkout","pull","push","clone","reset","branch","rebase","stash","revert","commit"].map((function(e){return r.a.createElement(D,null,e)}))," are all recognized."),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},r.a.createElement(D,null,"HEAD@",0)," means the newest"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete spec record (and it happens to be ",r.a.createElement(D,null,"commit"),")"),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"But it didn't remove commit actually."),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete all records"),r.a.createElement(x,{code:e[6],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Remove objects"),r.a.createElement(x,{code:e[7],language:"sh"}))},title:"Reflog",path:"reflog"},{component:function(){var e=["$ git pull","$ git pull --rebase"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Do fetch and merge, get news and digest it."),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"merged commit ",r.a.createElement("i",null,"(unnecessary commits just for merging process)")," excepted, merge all remote commits."),r.a.createElement(x,{code:e[1],language:"sh"}))},title:"Pull",path:"pull"},{component:function(){var e=["$ git cherry-pick [commit]","$ git cherry-pick [commit] -x","$ git cherry-pick [commit] -e","$ git cherry-pick [commit] -n"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Normally pick, keep message"),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Note that commit is from somewhere. So using ",r.a.createElement(D,null,"git log"),", you're gotta see the ",r.a.createElement(D,null,"(cherry picked from commit [commitId]) after commit message")),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"edit the commit prior to committing."),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Do not commit, just stage the changes."),r.a.createElement(x,{code:e[3],language:"sh"}))},title:"Cherry pick",path:"cherry-pick"},{component:function(){var e=["$ git reset HEAD^ --soft","$ git reset HEAD^ --mixed","$ git reset HEAD^ --hard","$ git reset HEAD [file]","$ git reset HEAD^ --hard","$ git reset ORIG_HEAD --hard","$ git checkout HEAD [file]"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"h5",gutterBottom:!0},"Now let's suggest we want to status is back to last commit."),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Tear apart commit,",r.a.createElement("br",null),"Prev committed changes is still on staged",r.a.createElement("br",null),"Keep current status is still staged or untracked."),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Tear apart commit",r.a.createElement("br",null),"Prev committed changes is moved to untracked",r.a.createElement("br",null),"Keep current status is still staged or untracked."),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Tear apart commit",r.a.createElement("br",null),"Give up committed changes",r.a.createElement("br",null),"Give up current status which is staged, also the new files",r.a.createElement("br",null),"Untracked new files are still untracked."),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Spec file staged to be unstaged or untracked"),r.a.createElement(x,{code:e[3],language:"sh"}),r.a.createElement(k.a,{variant:"h5",gutterBottom:!0}," Doing something dangerous"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},r.a.createElement(D,null,"ORIG_HEAD")," will store the current sha. ",r.a.createElement("b",null,"Thanks GOD")),r.a.createElement(x,{code:e[4],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"If we regret, we can get back to the right way."),r.a.createElement(x,{code:e[5],language:"sh"}),r.a.createElement(k.a,{variant:"h5",gutterBottom:!0},"Trick"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Only restore file whether it's staged or unstaged."),r.a.createElement(x,{code:e[6],language:"sh"}))},title:"Reset",path:"reset"},{component:function(){var e=["# git rm = rm  + git add\n$ git rm [file]","$ git rm -r [folder] ","$ git rm --cached [filename]","$ git rm -r --cached [folder]","$ git rm [file on staged]","$ git rm -f [file on staged]","$ git rm -r --cached dir/\n$ git sts\nD  dir/d.txt\n?? dir/\n$ git ac 'remove'\nOn branch master\nnothing to commit, working tree clean\n","$ git rm -r dir/","git rm -r --cached ."];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Remove file and let git know"),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Remove folder and let git know"),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"If file is new to .git and already be added to staged: ",r.a.createElement(D,null,"A")," -> ",r.a.createElement(D,null,"??")),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"If file is already recognized by git: ",r.a.createElement(D,null,"M")," -> ",r.a.createElement(D,null,"D")," & ",r.a.createElement(D,null,"??")),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"edit the commit prior to committing."),r.a.createElement(x,{code:e[3],language:"sh"}),r.a.createElement(k.a,{variant:"h5",gutterBottom:!0},"Kind of confusing"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"We cannot remove the staged file whether the file is new or not. ",r.a.createElement("b",null,"This failed.")),r.a.createElement(x,{code:e[4],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Or using ",r.a.createElement(D,null,"-f")," will work for you!"),r.a.createElement(x,{code:e[5],language:"sh"}),r.a.createElement(k.a,{variant:"h5",gutterBottom:!0},r.a.createElement(D,null,"--cached")," on folder?"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete the folder but you use ",r.a.createElement(D,null,"--cached")," for keeping the file inside.",r.a.createElement("br",null),"That means do nothing. Here's the result:"),r.a.createElement(x,{code:e[6],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Delete directly, don't think too much lol"),r.a.createElement(x,{code:e[7],language:"sh"}),r.a.createElement(k.a,{variant:"h5",gutterBottom:!0},r.a.createElement(D,null,"--cached")," on file?"),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"You modified files, and create files, then add all to staged and run this:"),r.a.createElement(x,{code:e[8],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"It remove the files,",r.a.createElement("br",null),"New files go to untracked",r.a.createElement("br",null),"Existing files go to ",r.a.createElement(D,null,"D")," and go to untracked",r.a.createElement("br",null),"All the changed was kept and you did in vain."))},title:"Remove",path:"remove"},{component:function(){var e=["$ git rebase [commit] -i\n\n# pick    : pure situation as you think\n# squash  : merge with prev but keep its message\n# fixup   : merge with prev but drop its message\n# drop    : dump it\n# edit    : breaking point here, \n            choose to edit commit message or do something then --continue\n# reword  : breaking point here, edit commit message\n# exec    : ?\n","$ git rebase [prevCommit] -i","$ git rebase --onto [to] [from]","A -> B -> C1 -> D1 -> E1 -> F1(current branch)\n        |\n        C -> D -> E -> F","$ git rebase --onto E C","A -> B -> C -> D -> E -> C1 -> D1 -> E1 -> F1\n                       |\n                       F"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Go to vim mode"),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Drop the current commit that you just mistakenly made! Make it ",r.a.createElement(D,null,"drop")," and ",r.a.createElement(D,null,":wq")),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Chop source as much as it can."),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"For example:"),r.a.createElement(x,{code:e[3],language:"?"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"do"),r.a.createElement(x,{code:e[4],language:"?"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"and it turns out:"),r.a.createElement(x,{code:e[5],language:"?"}))},title:"Rebase",path:"rebase"},{component:function(){var e=["$ git config --list --system",'$ git config --global alias.sts "status -s"',"$ git config --global core.autocrlf true","$ git config --global help.autocorrect 1"];return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Three levels configurations: ",["system","global","local"].map((function(e){return r.a.createElement(D,null,"--".concat(e))}))),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"List all system configuration."),r.a.createElement(x,{code:e[0],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Saving your time!"),r.a.createElement(x,{code:e[1],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"You have Windows PC, need to cowork with cross-OS like unix-like, set it ",r.a.createElement(D,null,"true"),". cslf to lf when commit, get file update to local or checkout file will convert any lf file to cslf.",r.a.createElement("br",null),"MacOs or Linux, set it ",r.a.createElement(D,null,"input"),", that means no need to convert to lf since you've already been lf. ",r.a.createElement("br",null),"If the product is 100% sure working on Windows and all your dev tools are based on Windows, you could set it false."),r.a.createElement(x,{code:e[2],language:"sh"}),r.a.createElement(k.a,{variant:"body1",gutterBottom:!0},"Input typo. Git will guess what you want and go run."),r.a.createElement(x,{code:e[3],language:"sh"}))},title:"Config",path:"config"}],N=a(188),R=a(189),C=a(191),I=a(190),O=Object(N.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"1fr 4fr",boxShadow:"1px 1px 4px 0px rgba(0,0,0,0.2)",marginTop:"24px"},list:{width:"100%",backgroundColor:e.palette.background.paper,height:"70vh",overflowY:"scroll",boxShadow:"1px 1px 4px 0px rgba(0,0,0,0.2)"},render:{maxHeight:"70vh",overflowY:"scroll",background:"#ffffff",padding:"24px"}}}));var H=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],o=t[1],l=O();return r.a.createElement("div",{className:l.root},r.a.createElement(g.a,null,r.a.createElement("title",null,"Git snippet"),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js",integrity:"sha512-WkVkkoB31AoI9DAk6SEEEyacH9etQXKUov4JRRuM1Y681VsTq7jYgrRw06cbP6Io7kPsKx+tLFpH/HXZSZ2YEQ==",crossorigin:"anonymous"})),r.a.createElement(R.a,{className:l.list},A.map((function(e){return r.a.createElement(C.a,{button:!0,className:l.card,onClick:function(){return t=e.component,void o(t());var t}},r.a.createElement(I.a,{primary:e.title}))}))),r.a.createElement("div",{className:l.render},a))},q=a(26),T=a(5);var M=function(){return r.a.createElement("div",{className:"tech-articles"},r.a.createElement("div",{className:"article-category"},r.a.createElement(q.b,{to:"/randomlymurmur",activeClassName:"current-category"},r.a.createElement(d.a,{size:"large"},"Randomly MurMur")),r.a.createElement(q.b,{to:"/git",activeClassName:"current-category"},r.a.createElement(d.a,{size:"large"},"Git"))),r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/randomlymurmur"},r.a.createElement(w,null)),r.a.createElement(T.a,{path:"/git"},r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(q.a,{basename:"/tech-articles"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null))),document.getElementById("tech-article-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a.p+"static/media/murmur1.230ff83d.md"},62:function(e,t,a){e.exports=a.p+"static/media/murmur2.b0db7e42.md"},63:function(e,t,a){e.exports=a.p+"static/media/murmur3.2020d910.md"},72:function(e,t,a){e.exports=a(169)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.a85aacdc.chunk.js.map