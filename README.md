# Tradie Job List App

The tradie can view their jobs list, which allows filter and sort the list of jobs.
When tradie clicks individual job detail, they can view their details and add/edit notes for that job, also allow to update the job status.

## Design

This application has 2 parts, the server side, and the client side.

For server-side, use Node Express to build REST API that allows to get all list of jobs, single job details, and update job notes and status.

For the client-side, use React to build SPA with 3 different pages, job listing, job details, and job edit page.
On the front page (job listing), request REST API to get all jobs list and filter out job results based on filter and sort values. When visiting the individual job detail page, the REST API requests job details via a unique job identifier, once gets all the return values then outputs into a front-end mockup. Used a similar method to get job detail from the job edit page, but used the REST API post method to update job status and notes

## Requirement

NodeJS v15 or higher

## Installation

`npm i` or `npm install`

## To run the project

`npm run start`

Runs the application in the development mode,
and open a new terminal/command tab and it will run the node backend server.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

## To test the project

`npm run test`
