import { Badge } from "@/components/ui/badge";
import Section from "@/app/component/section";
import Timeline from "@/compositions/Timeline";
import { TimelineStepType } from "@/compositions/TimelineStep";

const installBadgeSteps: TimelineStepType[] = [
    {
        title: "Copy and paste the following code into your project.",
        description:
            "Create file Badge.tsx in your components folder and paste the following code.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
        <code>
          {`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`}
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
            <h1 className="text-3xl font-bold mb-4">Badges</h1>
            <p className="text-gray-600 mb-8">
                Badges are small, simple UI elements that indicate the status, category,
                or information about an element.
            </p>
            <Section
                title="Overview usage"
                previewContent={
                    <>
                        <Badge>Default Badge</Badge>
                        <Badge variant="secondary">Secondary Badge</Badge>
                        <Badge variant="destructive">Destructive Badge</Badge>
                        <Badge variant="outline">Outline Badge</Badge>
                    </>
                }
                htmlContent={`<Badge>Default Badge</Badge>\n<Badge variant="secondary">Secondary Badge</Badge>\n<Badge variant="destructive">Destructive Badge</Badge>\n<Badge variant="outline">Outline Badge</Badge>`}
            />
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Manual installation."}</p>
                <Timeline
                    headTitle={"frontend repository"}
                    timelineSteps={installBadgeSteps}
                    footerTitle={"<Badge /> is ready to use"}
                />
            </section>

            <Section
                title="Variants"
                description="Explore different badge styles such as default, secondary, destructive, and outline."
                previewContent={
                    <>
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </>
                }
                htmlContent={`<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="destructive">Destructive</Badge>\n<Badge variant="outline">Outline</Badge>`}
            />

            <Section
                title="Interactive States"
                description="Badges with hover effects to indicate interactivity."
                previewContent={
                    <>
                        <Badge className="hover:bg-primary/80">Hoverable Default</Badge>
                        <Badge variant="secondary" className="hover:bg-secondary/80">
                            Hoverable Secondary
                        </Badge>
                        <Badge variant="destructive" className="hover:bg-destructive/80">
                            Hoverable Destructive
                        </Badge>
                    </>
                }
                htmlContent={`<Badge className="hover:bg-primary/80">Hoverable Default</Badge>\n<Badge variant="secondary" className="hover:bg-secondary/80">Hoverable Secondary</Badge>\n<Badge variant="destructive" className="hover:bg-destructive/80">Hoverable Destructive</Badge>`}
            />
        </div>
    );
}
