const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

let jobs = [
	{
		"id": "123123",
		"title": "Plumbing",
		"status": "scheduled",
		"created_date": "14/02/2022",
		"client_name": "John Treadway",
		"client_email": "JohnTreadway@rhyta.com",
		"client_phone": "027 5095 404",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "123124",
		"title": "Pipe Lagger",
		"status": "active",
		"created_date": "01/03/2022",
		"client_name": "Anthony A. Valenzuela",
		"client_email": "Anthony.Valenzuela@jourrapide.com",
		"client_phone": "020 8801-147",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "123212",
		"title": "Interiors Installer",
		"status": "invoicing",
		"created_date": "01/04/2022",
		"client_name": "Francisco B. Klein",
		"client_email": "FranciscoBKlein@rhyta.com",
		"client_phone": "022 4436 263",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "154845",
		"title": "Carpenter",
		"status": "priced",
		"created_date": "14/04/2022",
		"client_name": "Ralph Z. McCullough",
		"client_email": "RalphZMcCullough@jourrapide.com",
		"client_phone": "029 0871 751",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "264981",
		"title": "Carpenter",
		"status": "completed",
		"created_date": "04/08/2022",
		"client_name": "Benjamin E. Williams",
		"client_email": "BenjaminEWilliams@armyspy.com",
		"client_phone": "021 9495 137",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "264985",
		"title": "Interior Install",
		"status": "scheduled",
		"created_date": "04/08/2022",
		"client_name": "Karen J. Marsh",
		"client_email": "KarenJMarsh@rhyta.com",
		"client_phone": "022 4201 759",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "264987",
		"title": "Flooring",
		"status": "active",
		"created_date": "04/08/2022",
		"client_name": "Dayna R. Lyons",
		"client_email": "DaynaRLyons@teleworm.us",
		"client_phone": "022 149 410",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "264900",
		"title": "Landscape gardener",
		"status": "invoicing",
		"created_date": "08/08/2022",
		"client_name": "Annabel J. Smith",
		"client_email": "AnnabelJSmith@jourrapide.com",
		"client_phone": "027 7948 156",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "265942",
		"title": "Frame and Truss",
		"status": "priced",
		"created_date": "10/08/2022",
		"client_name": "Jennifer D. Oneal",
		"client_email": "021 5589 615",
		"client_phone": "enniferDOneal@teleworm.us",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	},
	{
		"id": "285181",
		"title": "Fire Technicians",
		"status": "active",
		"created_date": "15/08/2022",
		"client_name": "Jerry M. Berning",
		"client_email": "021 658 484",
		"client_phone": "JerryMBerning@dayrep.com",
		"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu dolor in tellus tristique fringilla. Pellentesque ac nibh arcu. Cras bibendum fringilla tristique. Morbi sapien lacus, tincidunt quis posuere vel, volutpat sit amet metus. Praesent et rutrum tortor.",
		"notes": ""
	}
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.get('/jobs', (req, res) => {
    res.json(jobs);
});

app.get('/jobs/:id', (req, res, next) => {
    // reading id from the URL
    const id = req.params.id;

    // searching job for the id
    for (let job of jobs) {
        if (job.id === id) {
            res.json(job);
            return;
        }
    }

    // sending 404 when not found
	//res.status(404)
    res.status(404).send({message: 'Job not found'});
});

app.post('/jobs/edit/:id', (req, res) => {
    // reading id from the URL
    const id = req.params.id;
	const newContent = req.body;

    // searching job for the id and update statue and notes
    for (let job of jobs) {
        if (job.id === id) {
            job.status = newContent.status;
			job.notes = newContent.notes;
        }
    }

	res.status(200).send('Job Detail is edited');
});