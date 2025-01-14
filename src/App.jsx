import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './routes/home.lazy';
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/' Component={Home}/>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App
