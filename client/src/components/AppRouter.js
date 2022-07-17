import React, { Component } from 'react';
import {Routes, Route, Redirect,Navigate, Router} from 'react-router-dom'
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';


const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />}/>
        </Routes>
    )
}

export default AppRouter;