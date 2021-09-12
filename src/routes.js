import { Main, Category } from './components'

const routes = [
    {
        path: 'app',
        element: <Main />,
        children: [
            { path: 'category', element: <Category /> }
        ]
    }
];

export default routes;
