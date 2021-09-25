import {
    Main,
    Category,
    CategoryForm,
    CategoryRestore,

    Brand,
    BrandForm,
    BrandRestore,

    Product,
    ProductForm,
    ProductRestore,
    Login
} from './components'

export const routesGuest = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Login /> }
]

export const routesApp = [
    { path: '*', element: <Main to="/app" /> },
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


            {
                path: 'product',
                element: <Product />

            },
            {
                path: 'product/store',
                element: <ProductForm />,

            },
            {
                path: 'product/store/:id',
                element: <ProductForm />,

            },
            {
                path: 'product/restore',
                element: <ProductRestore />,

            },


        ],
    },
]