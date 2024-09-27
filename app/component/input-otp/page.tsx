import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import Section from "@/app/component/section";
import Timeline from "@/compositions/Timeline";
import { TimelineStepType } from "@/compositions/TimelineStep";

const installInputOTPSteps: TimelineStepType[] = [
    {
        title: "Install dependencies",
        description: "Install the necessary packages using npm or pnpm.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 ">
        <code>{"pnpm i input-otp @radix-ui/react-icons"}</code>
      </pre>
        ),
        ping: false,
        active: true,
        prerequisites: [],
    },
    {
        title: "Copy and paste the following code into your project.",
        description: "Create a file InputOTP.tsx in your components folder.",
        Button: () => (
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
        <code>
          {`"use client"

import * as React from "react"
import { DashIcon } from "@radix-ui/react-icons"
import { OTPInput, OTPInputContext } from "input-otp"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <DashIcon />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }`}
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
            <h1 className="text-3xl font-bold mb-4">Input OTP</h1>
            <p className="text-gray-600 mb-8">
                InputOTP components allow for creating a structured One-Time Password (OTP) input.
            </p>
            <Section
                title="Overview usage"
                previewContent={
                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSeparator />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                }
                htmlContent={`<InputOTP maxLength={6}>
<InputOTPGroup>
<InputOTPSlot index={0} />
<InputOTPSlot index={1} />
<InputOTPSlot index={2} />
<InputOTPSeparator />
<InputOTPSlot index={3} />
<InputOTPSlot index={4} />
<InputOTPSlot index={5} />
</InputOTPGroup>
</InputOTP>`}
            />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Manual installation."}</p>
                <Timeline
                    headTitle={"frontend repository"}
                    timelineSteps={installInputOTPSteps}
                    footerTitle={"<InputOTP /> is ready to use"}
                />
            </section>

            <Section
                title="Variants"
                description="The Input OTP component allows for different layouts and separators."
                previewContent={
                    <div className={"grid"}>
                    <InputOTP maxLength={4}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSeparator />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                    <InputOTP maxLength={4}>
                        <InputOTPGroup className="mt-4">
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                    </InputOTP>
                    </div>
                }
                htmlContent={`<InputOTPGroup>\n  <InputOTPSlot index={0} />\n  <InputOTPSlot index={1} />\n  <InputOTPSeparator />\n  <InputOTPSlot index={2} />\n  <InputOTPSlot index={3} />\n</InputOTPGroup>\n\n<InputOTPGroup className="mt-4">\n  <InputOTPSlot index={0} />\n  <InputOTPSlot index={1} />\n  <InputOTPSlot index={2} />\n  <InputOTPSlot index={3} />\n</InputOTPGroup>`}
            />
        </div>
    );
}
