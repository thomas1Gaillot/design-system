import TimelineStep, {TimelineStepType} from "@/compositions/TimelineStep";

export default function Timeline({timelineSteps, headTitle, footerTitle}: {
    headTitle: string,
    timelineSteps: TimelineStepType[],
    footerTitle: string
}) {
    return <div className="w-full">
        <div className=" flex flex-col w-max">
            <span className={'text-gray-500 uppercase text-xs'}>{headTitle}</span>
            <div className="h-8 w-0.5 bg-gray-200 ml-1.5  mt-2"></div>
        </div>
        {timelineSteps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index}/>
        ))}
        <div className=" flex flex-col w-max">
            <span className={'text-gray-500 uppercase text-xs'}>{footerTitle}</span>
        </div>
    </div>
}