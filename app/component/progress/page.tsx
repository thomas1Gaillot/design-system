import {Progress} from "@/components/ui/progress";
import Section from "@/app/component/section";
import Timeline from "@/compositions/Timeline";
import {TimelineStepType} from "@/compositions/TimelineStep";

const installProgressSteps: TimelineStepType[] = [
    {
        title: "Install dependencies",
        description: "Install the necessary packages using npm or pnpm.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 ">
        <code>{"pnpm i @radix-ui/react-progress"}</code>
      </pre>
        ),
        ping: false,
        active: true,
        prerequisites: [],
    },
    {
        title: "Copy and paste the following code into your project.",
        description: "Create a file Progress.tsx in your components folder.",
        Button: () => (
            <pre
                className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
        <code>
          {`"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    label?: string;
    labelLeft?: string;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ className, value, label, labelLeft, ...props }, ref) => (
    <div className="flex flex-col w-max py-1">
        <div className="flex justify-between mb-0.5">
            <span className="text-xs text-gray-700">
                {labelLeft || ''}
            </span>
            {label && (
                <span className="text-xs text-gray-700 tracking-wider">
                    {label}
                </span>
            )}
        </div>
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                "relative h-1.5 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{ transform: \`translateX(-\${100 - (value || 0)}%)\` }}
            />
        </ProgressPrimitive.Root>
    </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }`}
        </code>
      </pre>
        ),
        ping: false,
        active: true,
        prerequisites: [],
    },
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Components</h2>
            <h1 className="text-3xl font-bold mb-4">Progress Bars</h1>
            <p className="text-gray-600 mb-8">
                Progress bars are helpful for showing completion of a task or a percentage of progress.
            </p>
            <Section
                title="Overview usage"
                previewContent={
                    <Progress value={50} label="50%" labelLeft="Progress:"/>
                }
                htmlContent={`<Progress value={50} label="50%" labelLeft="Progress:" />`}
            />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Manual installation."}</p>
                <Timeline
                    headTitle={"frontend repository"}
                    timelineSteps={installProgressSteps}
                    footerTitle={"<Progress /> is ready to use"}
                />
            </section>

            <Section
                title="Variants"
                description="The progress component supports customizable labels and sizes."
                previewContent={
                    <div className={'grid'}>
                        <Progress value={25} label="25%" labelLeft="Loading:"/>
                        <Progress value={75} label="75%"/>
                        <Progress value={100} label={''}/>
                    </div>
                }
                htmlContent={`<Progress value={25} label="25%" labelLeft="Loading:" />\n<Progress value={75} label="75%" />\n<Progress value={100} />`}
            />
        </div>
    );
}
