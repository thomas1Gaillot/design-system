import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { CheckIcon } from 'lucide-react';
import Ping from "@/components/ui/ping";

export interface TimelineStepType {
    title: string;
    description: string;
    Button: ({ disabled }: { disabled: boolean }) => JSX.Element;
    prerequisites: { text: string; icon: any; done: boolean }[];
    ping: boolean;
    active?: boolean;
    estimatedTime?: string;
}

export default function TimelineStep({ step, index }: { step: TimelineStepType; index: number }) {
    if (!step) return <>NoTimelineStep</>;
    const hasPrerequisites = step?.prerequisites.length > 0;
    const prerequisTodo = hasPrerequisites && step.prerequisites.some(prerequisite => !prerequisite.done);
    const allPrerequisDone = hasPrerequisites && step.prerequisites.every(prerequisite => prerequisite.done);
    return (
        <div key={index} className={cn('flex h-max')}>
            <div className={'flex flex-col  mt-1 items-center mr-4'}>
                {<Ping pingActive={step.ping} isActive={!!step.active} hasPrerequisite={prerequisTodo}/>}
                <div className="h-full w-0.5 bg-gray-200  mt-2"></div>
            </div>
            <div className={' pb-6'}>
                {hasPrerequisites && (
                    <Badge
                        variant={'secondary'}
                        className={cn(
                            'grid my-2 text-gray-700 gap-1 bg-yellow-50 hover:bg-yellow-50 text-[10px]',
                            allPrerequisDone && 'bg-gray-50 hover:bg-gray-50',
                        )}
                    >
                        {prerequisTodo && <p className=" uppercase min-w-max">{'Pré-requis'} </p>}
                        {hasPrerequisites &&
                            step.prerequisites.map((prerequisite, index) => (
                                <div key={'prerequisite-' + index} className={'flex items-start font-normal relative right-1'}>
                                    <prerequisite.icon className="min-w-4 h-4" />
                                    <p className={cn(prerequisite.done && 'line-through')}>{prerequisite.text} </p>
                                    {prerequisite.done && <CheckIcon className="size-3 ml-2" />}
                                </div>
                            ))}
                    </Badge>
                )}
                {step.estimatedTime && <p className="text-xs text-gray-500">durée estimé : {step.estimatedTime}</p>}
                <h3 className={cn(!step.ping && !step.active && 'opacity-60')}>{step.title}</h3>
                <p className={cn('text-xs text-gray-500', !step.ping && !step.active && 'opacity-60')}>{step.description}</p>
                <div className={!step.ping && !step.active ? 'opacity-60' : ''}>
                    <step.Button disabled={prerequisTodo || false} />
                </div>
            </div>
        </div>
    );
}
