import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Card from "../Card";

test("Job link should be jobs/12365", () => {
	const props = {
		id : "12365",
		name: "Plumbing",
		status: "scheduled",
	}

	render(<MemoryRouter><Card info={props} /></MemoryRouter>);

	const jobLink = screen.getByRole('link');

	expect(jobLink).toHaveAttribute('href', '/jobs/12365');
});

test("Job title should be Plumbing", () => {
	const props = {
		id : "12365",
		title: "Plumbing",
		status: "scheduled",
	}

	render(<MemoryRouter><Card info={props} /></MemoryRouter>);

	const jobTitle = screen.getByRole('heading', {level: 4});

	expect(jobTitle.textContent).toBe("Plumbing");
});

test("Job status should be scheduled", () => {
	const props = {
		id : "12365",
		title: "Plumbing",
		status: "scheduled",
	}

	render(<MemoryRouter><Card info={props} /></MemoryRouter>);

	const jobStatus = screen.getByRole('heading', {level: 6});

	expect(jobStatus.textContent).toBe("scheduled");
});