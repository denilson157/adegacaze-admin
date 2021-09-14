import { Main, Category, CategoryForm } from './components'

const routes = [
    { path: '', element: <Main /> },
    {
        path: "app",
        element: <Main />,
        children: [
            {
                path: 'category',
                element: <Category />

            },
            {
                path: 'category/store',
                element: <CategoryForm />,

            },
            {
                path: 'category/store/:id',
                element: <CategoryForm />,

            },
            { path: '*', element: <Main to="/app" /> }

        ],
    },
]

export default routes;
