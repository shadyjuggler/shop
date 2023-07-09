import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import './index.scss';

import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';


const router = createBrowserRouter([
	{
		path: '/',
		element: <ProductList />
	},
	{
		path: 'addproduct',
		element: <AddProduct />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>

);