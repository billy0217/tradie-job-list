import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<div className="container">
				<div className="row mt-5 mb-5">
					<div className="col-sm-12">
						<section>
							<h1 className="c-section__heading mb-3">Page Not Found</h1>
							<Link className="btn btn-primary" to={"/"}>Back to List</Link>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound