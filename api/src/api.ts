import {Express, Response, Request} from 'express';
import * as dotenv from 'dotenv';
import { getXataClient, selam} from 'xata';


dotenv.config();

const express = require('express');
const app: Express = express()

app.use(express.json());
const xata = getXataClient();

const port = 8080;


app.get("/api/jobs", async (req: Request, res: Response) => 
{
    const jobs = await xata.db.selam.getAll()
    res.json(jobs);
});

app.post("/api/jobs", async (req: Request, res: Response) => 
{
    const jobs = req.body;
    const createdJob = await xata.db.job.create(jobs);
    res.json(createdJob);
});

app.put("/api/jobs/:id", async (req: Request, res: Response) => 
{
    const id = req.params.id;
    const jobs = req.body;
    const updateJob = await xata.db.job.update(id, jobs);
    res.json(updateJob);
});

app.delete("/api/jobs/:id", async (req: Request, res: Response) => 
{
    const id = req.params.id;
    const deleteJob = await xata.db.job.delete(id);
    res.json(deleteJob);
});

app.listen(port, () => {
    console.log("Server is running at port http://localhost:8080");
});
