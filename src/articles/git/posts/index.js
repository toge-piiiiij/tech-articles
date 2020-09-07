import CreateTag from "./create-tag";
import DeleteTag from "./delete-tag";
import RemoteUrl from "./remote-url";
import Pull from "./pull";
import CherryPick from "./cherry-pick";
import Rebase from "./rebase";
import Reset from "./reset";
import Remove from "./remove";
import Reflog from "./reflog";
import Config from "./config";
import Stash from "./stash";
import Diff from "./diff";

export default [
    { component: CreateTag, title: 'Create Tag', path: 'create-tag' },
    { component: DeleteTag, title: 'Delete Tag', path: 'delete-tag' },
    { component: RemoteUrl, title: 'Remote Url', path: 'remote-url' },
    { component: Reflog, title: 'Reflog', path: 'reflog' },
    { component: Pull, title: 'Pull', path: 'pull' },
    { component: CherryPick, title: 'Cherry pick', path: 'cherry-pick' },
    { component: Reset, title: 'Reset', path: 'reset' },
    { component: Remove, title: 'Remove', path: 'remove' },
    { component: Rebase, title: 'Rebase', path: 'rebase' },
    { component: Config, title: 'Config', path: 'config' },
    { component: Stash, title: 'Stash', path: 'stash' },
    { component: Diff, title: 'Diff', path: 'diff' },
]