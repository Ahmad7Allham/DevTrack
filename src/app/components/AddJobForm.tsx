"use client";

import { useState } from "react";

type AddJobFormProps = {
     onAddJobAction:
     (company: string, position: string) => void;
};

export default function AddJobForm({ onAddJobAction }: AddJobFormProps) {
     const [company, setCompany] = useState("");
     const [position, setPosition] = useState("");

     const handleSubmit = () => {
          if (!company.trim() || !position.trim()) {
               return;
          }

          onAddJobAction(company, position);

          setCompany("");
          setPosition("");
     };

     return (
          <div
               className="
               mt-5 bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8 "
          >
               <h2 className="text-xl font-bold mb-4">Add New Job</h2>

               <div className="grid gap-3">
                    <input
                         type="text"
                         placeholder="Company"
                         value={company}
                         onChange={(e) => setCompany(e.target.value)}
                         onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                         className="
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-3
          outline-none
          "
                    />

                    <input
                         type="text"
                         placeholder="Position"
                         value={position}
                         onChange={(e) => setPosition(e.target.value)}
                         onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                         className="
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-3
          outline-none
          "
                    />

                    <button
                         onClick={handleSubmit}
                         className="
                         bg-violet-500
                         hover:bg-violet-400
                         text-slate-950
                              font-semibold
                              py-3
                              rounded-xl
                              transition
                              duration-300"
                    >
                         Add Job
                    </button>
               </div>
          </div>
     );
}
