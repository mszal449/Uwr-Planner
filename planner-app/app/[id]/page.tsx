import { SemesterPlanner, CourseBrowser, Summary } from "@/components";


export default function PlanView({params}: {params: {id: string}}) {
  return (
    <div className="flex flex-col h-screen "> 
      <div className="flex-grow grid grid-cols-12 gap-4 p-5 pb-0 min-h-0">
        <CourseBrowser styles="col-start-1 col-end-3 overflow-auto" />
        <SemesterPlanner styles="col-start-3 col-end-13" planId={params.id}/>
      </div>
      <Summary styles="mt-3 h-10"/>
    </div>
  );
}
