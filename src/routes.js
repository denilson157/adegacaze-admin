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
    Login,
    Home
} from './components'

export const routesGuest = [
    { path: '/login', element: <Login /> },
    // { path: '*', element: <Main /> }
]

export const routesApp = [
    {
        path: "*",
        element: <Main />,
        children: [{ path: '', element: <Home /> }]
    },
    {
        path: "app",
        element: <Main />,
        children: [
            { path: 'home', element: <Home /> },
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