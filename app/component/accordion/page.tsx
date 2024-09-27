import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Section from "@/app/component/section";
import Timeline from "@/compositions/Timeline";
import { TimelineStepType } from "@/compositions/TimelineStep";

const installAccordionSteps: TimelineStepType[] = [
    {
        title: "Install dependencies",
        description: "Install the necessary packages using npm or pnpm.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 ">
        <code>{"pnpm i @radix-ui/react-accordion"}</code>
      </pre>
        ),
        ping: false,
        active: true,
        prerequisites: [],
    },
    {
        title: "Copy and paste the following code into your project.",
        description: "Create a file Accordion.tsx in your components folder.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
        <code>
          {`"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }`}
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
            <h1 className="text-3xl font-bold mb-4">Accordion</h1>
            <p className="text-gray-600 mb-8">
                Accordion components are useful to toggle visibility of content.
            </p>
            <Section
                title="Overview usage"
                previewContent={
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                            <AccordionContent>
                                <p>This is the content of the first item.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                            <AccordionContent>
                                <p>This is the content of the second item.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                }
                htmlContent={`<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Accordion Item 1</AccordionTrigger>\n    <AccordionContent>This is the content of the first item.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Accordion Item 2</AccordionTrigger>\n    <AccordionContent>This is the content of the second item.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}
            />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Manual installation."}</p>
                <Timeline
                    headTitle={"frontend repository"}
                    timelineSteps={installAccordionSteps}
                    footerTitle={"<Accordion /> is ready to use"}
                />
            </section>
        </div>
    );
}
