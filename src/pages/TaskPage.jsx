import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();

  const [searchParans] = useSearchParams();
  const title = searchParans.get("title");
  const description = searchParans.get("description");

  return (
    <div className="h-screen w-screen bg-slate-900 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="cursor-pointer absolute left-0 bottom-0 top-0 text-slate-100">
            <ChevronLeftIcon></ChevronLeftIcon>
          </button>
          <h1 className="text-3xl font-bold text-center text-slate-100">
            Task Details
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
