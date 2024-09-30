const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app"); // Your Express app
const api = supertest(app);
const Job = require("../models/jobModel");
const User = require("../models/userModel");

const jobs = [
  {
    title: "Backend developer",
    type: "Full time",
    description: "Super cool",
    company: {
      name: "Best IT company",
      contactEmail: "company1@gmail.com",
      contactPhone: "1234567890"
    }
  },
  {
    title: "Frontend developer",
    type: "Full time",
    description: "Pretty good",
    company: {
      name: "Good IT company",
      contactEmail: "company2@gmail.com",
      contactPhone: "1234567890"
    }
  },
];

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api.post("/api/users/signup").send({
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    phone_number: "1234567890",
    gender: "Male",
    date_of_birth: "1990-01-01",
    membership_status: "Inactive",
  });
  token = result.body.token;
});

describe("Given there are initially some jobs saved", () => {
  beforeEach(async () => {
    await Job.deleteMany({});
    await Promise.all([
      api
        .post("/api/jobs")
        .set("Authorization", "bearer " + token)
        .send(jobs[0]),
      api
        .post("/api/jobs")
        .set("Authorization", "bearer " + token)
        .send(jobs[1]),
    ]);
  });

  it("should return all jobs as JSON when GET /api/jobs is called", async () => {
    await api
      .get("/api/jobs")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should create one job when POST /api/jobs is called", async () => {
    const newTour = {
      title: "QA engineer",
      type: "Part time",
      description: "Ok",
      company: {
        name: "Best IT company",
        contactEmail: "company1@gmail.com",
        contactPhone: "1234567890"
      }
    };
    await api
      .post("/api/jobs")
      .set("Authorization", "bearer " + token)
      .send(newTour)
      .expect(201);
  });

  it("should return one job by ID when GET /api/jobs/:id is called", async () => {
    const job = await Job.findOne();
    await api
      .get("/api/jobs/" + job._id)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should update one job by ID when PUT /api/jobs/:id is called", async () => {
    const job = await Job.findOne();
    const updatedJob = {
      description: "Updated info",
      company: {
        contactPhone: "250250250"
      }
    };
    const response = await api
      .put(`/api/jobs/${job._id}`)
      .set("Authorization", "bearer " + token)
      .send(updatedJob)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  
    console.log("Response body:", response.body);
  
    const updatedJobCheck = await Job.findById(job._id);
    console.log("Updated job:", updatedJobCheck);
  
    expect(updatedJobCheck.info).toBe(updatedJob.info);
    expect(updatedJobCheck.price).toBe(updatedJob.price);
  });
  

  it("should delete one job by ID when DELETE /api/jobs/:id is called", async () => {
    const job = await Job.findOne();
    await api
      .delete("/api/jobs/" + job._id)
      .set("Authorization", "bearer " + token)
      .expect(204);
    const jobCheck = await Job.findById(job._id);
    expect(jobCheck).toBeNull();
  });
});

afterAll(() => {
  mongoose.connection.close();
});