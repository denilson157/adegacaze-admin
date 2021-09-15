import { Main, Category, CategoryForm, CategoryRestore } from './components'

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
            {
                path: 'category/restore',
                element: <CategoryRestore />,

            },
            { path: '*', element: <Main to="/app" /> }

        ],
    },
]

export default routes;
