import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
	return (
		<div className="card mt-4 md-4">
			<div className="card-body">
				<h4 className="card-title">{props.info.title}</h4>
				<h6 className="card-text text-capitalize">Status: {props.info.status}</h6>
				<p className="card-text">Created date: {props.info?.created_date}</p>
				<Link
					className="btn btn-primary"
					to={{
						pathname: '/jobs/' + props.info.id,
					}}
				>
					View detail
				</Link>
			</div>
		</div>
		
	)
}

export default Card