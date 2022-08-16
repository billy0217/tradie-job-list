import React from 'react'
import Card from '../Card/Card'

function JobList(props) {

	return (
		<div className="container">
			
			<div className="row">
				{	props.data.map((job) => {
						return (
							<div className="col-sm-6 col-md-3" key={job.id}>
								<Card info={job}  />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default JobList