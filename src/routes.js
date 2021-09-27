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

import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";



export const PrivateRoute = props => (
    <Fragment>

        {isAuthenticated() ?
            <Switch>
                <Fragment>
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path='/' component={Main} />
                </Fragment>
            </Switch>
            :
            <Switch>
                <Route component={Login} />
            </Switch>
        }

    </Fragment>
)

export const Routes = () =>
    <Switch>
        <Route path="/home" component={Home} />

        <Route path='/category' component={Category} />
        <Route path='/category/store' component={CategoryForm} />
        <Route path='/category/store/:id' component={CategoryForm} />
        <Route path='/category/restore' component={CategoryRestore} />

        <Route path='/brand' component={Brand} />
        <Route path='/brand/store' component={BrandForm} />
        <Route path='/brand/store/:id' component={BrandForm} />
        <Route path='/brand/restore' component={BrandRestore} />

        <Route path='/product' component={Product} />
        <Route path='/product/store' component={ProductForm} />
        <Route path='/product/store/:id' component={ProductForm} />
        <Route path='/product/restore' component={ProductRestore} />


        {/* <Route path='/' component={Home} /> */}
        <Route path="/" render={() => <Redirect to="/home" />} />

    </Switch>
