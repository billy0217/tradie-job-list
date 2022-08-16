import React, { useState, useEffect } from 'react'
import axios from "axios";
import JobList from '../../Components/Job/JobList'

const Jobs = () => {

	const [list, setList] = useState([]);
	const [filteredList, setfilteredList] = useState([]);
	const [errors, setError] = useState('');
	const [selectedOption, setSelectedOption] = useState();
	const [sortByOption, setSortByOption] = useState();

	useEffect(()=> {
		getJobList();
		sortJobList(sortByOption);
		getFilteredList(selectedOption);
	},[])

	// get all jobs from API
	const getJobList = async () => {
		await axios.get('http://localhost:3001/jobs')
					.then( (res) => {
						setList(res.data);
						setfilteredList(res.data);
					})
					.catch((err) => {

						if(err.response){
							setError(err.response.data.message);
						}else{
							setError(err.message);
						}
					})
	}

	// filter job list
	const getFilteredList = (filterValue) => {
	
		let newList;
		if(filterValue !== ""){
			newList = list.filter( (l) =>  l.status === filterValue)
		}else {
			newList = list;

		}

		setfilteredList(newList);
	}

	// sort job list
	const sortJobList = (sortValue) => {
		let sortList;

		const list = filteredList;
		switch (sortValue){
			case "az" :
				sortList = list.sort((a, b) => (a.title > b.title) ? 1 : -1);
				break;
			case "za":
				sortList = list.sort((a, b) => (a.title < b.title) ? 1 : -1);
				break;
			case "daz":
				sortList = list.sort((a, b) => (a.created_date > b.created_date) ? 1 : -1)
				break;
			case "dza":
				sortList = list.sort((a, b) => (a.created_date < b.created_date) ? 1 : -1)
				break;
			default:
				sortList = list;
		}

		setfilteredList(sortList);
	}

	// update select option change handler
	const handleChange = (e) => {
		setSelectedOption(e.target.value)
		getFilteredList(e.target.value)
	}

	// update select option change handler
	const sortByChangehandle = (e) => {
		setSortByOption(e.target.value)
		sortJobList(e.target.value)
	}

	return (
		<div className="container">
			<div className="row mt-5 mb-5">

				<div className="col-sm-12 d-flex flex-row-reverse gap-3">
					<div className="col-sm-12 col-md-3">
						<div className='input-group'>
							<label htmlFor="sortby" className="input-group-text">Sort by</label>
							<select
								id="sortby"
								className="form-select"
								defaultValue=""
								value={sortByOption}
								onChange={sortByChangehandle}
							>
								<option value="">All</option>
								<option value="az">Job Name A-Z</option>
								<option value="za">Job Name Z-A</option>
								<option value="daz">Most oldest</option>
								<option value="dza">Most recent</option>
							</select>
						</div>
					</div>
					<div className="col-sm-12 col-md-3">
						<div className='input-group'>
							<label htmlFor="jobStatus" className="input-group-text">Job Status</label>
							<select
								id="jobStatus"
								className="form-select"
								defaultValue=""
								value={selectedOption}
								onChange={handleChange}
							>
								<option value="">All</option>
								<option value="scheduled">Scheduled</option>
								<option value="active">Active</option>
								<option value="invoicing">Invoicing</option>
								<option value="priced">To priced</option>
								<option value="completed">Completed</option>
							</select>
						</div>
					</div>
					
				</div>

				<div className="col-sm-12">
					{
						errors && 
						<div className="alert alert-danger mt-5 mb-5" role="alert">
							{errors}
						</div>
					}
				</div>
				
				<JobList data={filteredList}/>
			</div>
			
			
		</div>
	)
}

export default Jobs