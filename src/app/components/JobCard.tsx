import { Job } from "../types/job";
type JobCardProps = {
     job: Job;
     onDelete: (id: number) => void;
};

export default function JobCard({ job, onDelete }: JobCardProps) {
     return (
          <div className=" bg-slate-800 border-2 border-slate-700 rounded-2xl p-6 hover:border-violet-400  hover:-translate-y-1  transition-all duration-400 ">
               <h3 className="text-xl font-semibold">{job.company}</h3>

               <p className="text-slate-400">{job.position}</p>

               <span className=" m-2 px-2 py-1 rounded-2xl bg-violet-500/20 text-violet-400 text-sm">
                    {job.status}
               </span>
               <button
                    onClick={() => onDelete(job.id)}
                    className=" m-2 px-2 py-1 text-red-400 bg-red-500/20 hover:text-red-300 text-sm rounded-2xl "
               >
                    Delete
               </button>
          </div>
     );
}
