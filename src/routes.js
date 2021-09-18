import { Main, Category, CategoryForm, CategoryRestore, Brand, BrandForm, BrandRestore } from './components'

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
            { path: '*', element: <Main to="/app" /> },

            {
                path: 'brand',
                element: <Brand />

            },
            {
                path: 'brand/store',
                element: <BrandForm />,

            },
            {
                path: 'brand/store/:id',
                element: <BrandForm />,

            },
            {
                path: 'brand/restore',
                element: <BrandRestore />,

            },
            { path: '*', element: <Main to="/app" /> }

        ],
    },
]

export default routes;
