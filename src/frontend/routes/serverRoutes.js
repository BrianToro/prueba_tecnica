import List from '../containers/List';
import Notfound from '../containers/notFound';
import Details from '../containers/Details';
import Upload from "../containers/Upload";


const routes = [
    {
        exact: true,
        path: "/",
        component: List,
    },
    {
        exact: true,
        path: "/upload",
        component: Upload,
    },
    {
        exact: true,
        path: "/grant/:id",
        component: Details,
    },
    {
        name: 'NotFound',
        component: Notfound,
    },
];

export default routes;