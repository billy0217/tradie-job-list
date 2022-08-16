import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

const JobEdit = () => {
	let params = useParams();

	const [detail, setDetail] = useState([]);
	const [errors, setError] = useState('');
	const [message, setMessage] = useState('');
	const [jobStatus, setJobStatus] = useState();
	const [jobNotes, setJobNotes] = useState();

	useEffect(()=> {
		getJobDetail();
	},[])

	// get job detail from API
	const getJobDetail = async () => {
		await axios.get(`http://localhost:3001/jobs/${params.id}`)
					.then( (res) => {
						setDetail(res.data);
					})
					.catch((err) => {
						setError(err.response.data.message);
					})
	}

	// form update handler
	const updateDetails = async (e) => {
		e.preventDefault();
		
		const data = {
			"status": e.target.jobStatus.value,
			"notes": e.target.notes.value
		}

		const config = { headers: {'Content-Type': 'application/json; charset=utf-8'} };
		await axios.post(
			`http://localhost:3001/jobs/edit/${params.id}`,
			data
			,config
		).then(
			(res) => {
				console.log(res)
				if(res.status === 200 && res.data !== ""){
					setMessage(res.data);
				}
			}
		).catch(
			(err) => {
				setError(err.response.data.message);
			}
		);
	}

	return (
		<div className="container">
			<div className="row mt-5 mb-5">
				<div className="col-sm-12">
					{errors &&
						<div className="alert alert-danger" role="alert">
							{errors} Please try agian
						</div>
					}

					{message &&
						<div className="alert alert-success" role="alert">
							{message} <Link to={`/jobs/${params.id}`} className="alert-link">Back to Detail page</Link>
						</div>
					}
					<div>
						<form onSubmit={updateDetails}>
							<div className="row">
								<div className="col-sm-8">
									<h1>{detail?.title}</h1>
								</div>
								<div className="col-sm-4">
									<select
										id="jobStatus"
										className="form-select"
										defaultValue=""
										value={
											jobStatus ? jobStatus : detail.status
										}
										onChange={(e)=> {setJobStatus(e.target.value)} }
									>
										<option value="scheduled">Scheduled</option>
										<option value="active">Active</option>
										<option value="invoicing">Invoicing</option>
										<option value="priced">To priced</option>
										<option value="completed">Completed</option>
									</select>
								</div>

							</div>
							<p><strong>ID: {detail.id}</strong></p>
							<div className="row d-flex align-items-center">
								<div className="col-sm-2">
									<p><strong>Created Date:</strong></p>
								</div>
								<div className="col-sm-3">
									<p>{detail?.created_date}</p>
								</div>
							</div>
							<div className="row d-flex align-items-center">
								<div className="col-sm-2">
									<p><strong>Clinet Nmae:</strong></p>
								</div>
								<div className="col-sm-3">
									<p>{detail?.client_name}</p>
								</div>
							</div>
							<div className="row d-flex align-items-center">
								<div className="col-sm-2">
									<p><strong>Clinet Email:</strong></p>
								</div>
								<div className="col-sm-3">
									<p>{detail?.client_email}</p>
								</div>
							</div>
							<div className="row d-flex align-items-center">
								<div className="col-sm-2">
									<p><strong>Clinet Phone:</strong></p>
								</div>
								<div className="col-sm-3">
									<p>{detail?.client_phone}</p>
								</div>
							</div>
							<p><strong>Job Details</strong></p>
							<p>{detail?.details}</p>
							<label htmlFor="notes" className="form-label"><strong>Notes</strong></label>
							<textarea 
								className="form-control"
								id="notes"
								rows="3"
								onChange={(e)=> {setJobNotes(e.target.value)}}
								value={
									jobNotes ? jobNotes : detail.notes
								}
							/>
							<div className="d-flex gap-3 mt-3">
								<button
									className="btn btn-primary"
								>
									Update
								</button>
								<Link className="btn btn-danger" to={`/jobs/${params.id}`}>Cancel</Link>
							</div>
						</form>
						
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default JobEdit