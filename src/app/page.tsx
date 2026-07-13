"use client";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import JobCard from "./components/JobCard";
import { mockJobs } from "./data/mockJobs";
import AddJobForm from "./components/AddJobForm";
import { useState, useEffect } from "react";
import { Job } from ".//types/job";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  {
    /*  LocalStorage  */
  }
  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");

    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      setJobs(mockJobs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  {
    /*  addJob */
  }
  const addJob = (company: string, position: string) => {
    const newJob: Job = {
      id: Date.now(),
      company,
      position,
      status: "Applied",
    };
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };
  {
    /*  DeleteJob */
  }
  const deleteJob = (id: number) => {
    const confirmed = window.confirm("Delete this application?");
    if (!confirmed) return;
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };
  //  // // // // // // // / / / / / / /// / / / /
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.company
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : job.status === statusFilter;

    return matchesSearch && matchesStatus;
    // ///////////////////////////////////////////////////////////
  });
  return (
    <main className=" min-h-screen bg-slate-950 p-8 text-white">
      {/* Navbar */}
      <Navbar />
      {/* Welcome Section */}
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-3">Welcome back, Ahmad 👋</h2>
        <p className="text-slate-400">Track your developer career journey.</p>
      </section>

      {/* Stats Section */}
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Applications" value={7} />
        <StatsCard title="Interviews" value={3} />
        <StatsCard title="Offers" value={2} />
        <StatsCard title="Goals" value={10} />
      </section>

      {/* Add Job Form */}
      <AddJobForm onAddJobAction={addJob} />
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
  w-full
  mb-4
  p-3
  rounded-xl
  bg-slate-800
  border
  border-slate-700
  "
      />
      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="
  w-full
  p-3
  mb-4
  rounded-xl
  bg-slate-800
  border
  border-slate-700
"
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      {/* Job Applications Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Job Applications</h2>
        <div className="grid gap-4">
          {filteredJobs.length === 0 ? (
            <div
              className="
    text-center
    py-10
    bg-slate-800
    rounded-2xl
  "
            >
              <p className="text-4xl mb-3">📭</p>

              <h3 className="text-xl font-semibold">
                No applications found
              </h3>

              <p className="text-slate-400 mt-2">
                Try another search or add a new job.
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onDelete={deleteJob} />
            ))
          )}
        </div>
      </section>
      {/*  */}
    </main>
  );
}
