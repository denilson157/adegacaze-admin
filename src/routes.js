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

    Order,
    OrderForm,

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

        <Route exact path='/category' component={Category} />
        <Route exact path='/category/store' component={CategoryForm} />
        <Route exact path='/category/store/:id' component={CategoryForm} />
        <Route exact path='/category/restore' component={CategoryRestore} />

        <Route exact path='/brand' component={Brand} />
        <Route exact path='/brand/store' component={BrandForm} />
        <Route exact path='/brand/store/:id' component={BrandForm} />
        <Route exact path='/brand/restore' component={BrandRestore} />

        <Route exact path='/product' component={Product} />
        <Route exact path='/product/store' component={ProductForm} />
        <Route exact path='/product/store/:id' component={ProductForm} />
        <Route exact path='/product/restore' component={ProductRestore} />

        <Route exact path='/order' component={Order} />
        <Route exact path='/order/details/:id' component={OrderForm} />


        {/* <Route path='/' component={Home} /> */}
        <Route path="/" render={() => <Redirect to="/home" />} />

    </Switch>
