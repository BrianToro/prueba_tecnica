import List from '../containers/List';
import Notfound from '../containers/notFound';
import Details from '../containers/Details';


const routes = [
    {
        exact: true,
        path: "/",
        component: List,
    },
    {
        exact: true,
        path: "/player/:id",
        component: Details,
    },
    {
        name: 'NotFound',
        component: Notfound,
    },
];

export default routes;