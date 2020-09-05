import CreateTag from "./create-tag";
import DeleteTag from "./delete-tag";
import RemoteUrl from "./remote-url";
import Pull from "./pull";
import CherryPick from "./cherry-pick";
import Rebase from "./rebase";
import Reset from "./reset";
import Remove from "./remove";

export default [
    { component: CreateTag, title: 'Create Tag', path: 'create-tag' },
    { component: DeleteTag, title: 'Delete Tag', path: 'delete-tag' },
    { component: RemoteUrl, title: 'Remote Url', path: 'remote-url' },
    { component: Pull, title: 'Pull', path: 'pull' },
    { component: CherryPick, title: 'Cherry pick', path: 'cherry-pick' },
    { component: Reset, title: 'Rest', path: 'reset' },
    { component: Remove, title: 'Remove', path: 'remove' },
    { component: Rebase, title: 'Rebase', path: 'rebase' },
]