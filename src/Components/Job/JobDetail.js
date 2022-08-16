import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'

const JobDetail = (props) => {
	let params = useParams();

	const [detail, setDetail] = useState([]);
	const [errors, setError] = useState('');

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

	return (
		<div className="container">
			<div className="row mt-5 mb-5">
				<div className="col-sm-12">
					{errors ?
						<div className="alert alert-danger" role="alert">
							{errors} <Link to={'/jobs'} className="alert-link">Back to List</Link>
						</div>
						:
						<div>
							<div className="row d-flex align-items-center mb-4">
								<div className="col-sm-8">
									<h1>{detail?.title}</h1>
								</div>
								<div className="col-sm-4">
									<h5 className="text-capitalize">{detail?.status}</h5>
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
							{
								detail?.notes && 
								<dvi>
									<p><strong>Notes</strong></p>
									<p>{detail.notes}</p>
								</dvi>
							}

							<div className="d-flex gap-3 mt-3">
								<Link className="btn btn-primary" to={`/jobs/edit/${params.id}`}>Edit</Link>
								<Link className="btn btn-success" to={"/jobs/"}>Back to list</Link>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default JobDetail