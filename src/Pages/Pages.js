import React, { useEffect, useState } from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import JobDetail from '../Components/Job/JobDetail';
import JobEdit from '../Components/Job/JobEdit';
import Jobs from './Jobs/Jobs';
import NotFound from './NotFound/NotFound'

const Pages = () => {
	const location = useLocation();

	return (
		<div>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Jobs />} />
				<Route path="/jobs">
					<Route index element={<Jobs />} />
					<Route path=":id" element={<JobDetail />} />
					<Route path="edit/:id" element={<JobEdit />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default Pages