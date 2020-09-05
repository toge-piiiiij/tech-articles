import CreateTag from "./create-tag";
import DeleteTag from "./delete-tag";
import RemoteUrl from "./remote-url";
import Pull from "./pull";

export default [
    { component: CreateTag, title: 'Create Tag', path: 'create-tag' },
    { component: DeleteTag, title: 'Delete Tag', path: 'delete-tag' },
    { component: RemoteUrl, title: 'Remote Url', path: 'remote-url' },
    { component: Pull, title: 'Pull', path: 'pull' },
]