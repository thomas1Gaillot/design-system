import {Button} from "@/components/ui/button";
import Section from "@/app/component/section";
import {PlusIcon, ThumbsDownIcon} from "lucide-react";
import {ButtonIcon} from "@radix-ui/react-icons";
import Timeline from "@/compositions/Timeline";
import {TimelineStepType} from "@/compositions/TimelineStep";

const installButtonSteps:TimelineStepType[] = [
    {
        title: "Install dependencies",
        description: "Install the package from npm or pnpm.",
        Button: ()=><pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 ">
                        <code>{"pnpm i @radix-ui/react-slot"}</code>
                    </pre>,
        ping:false,
        active:true,
        prerequisites:[],
},
    {
        title: "Copy and paste the following code into your project.",
        description: "Create file Button.tsx in your components folder and paste the following code.",
        Button: ()=><pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
                        <code>{"import * as React from \"react\"\n" +
                            "import { Slot } from \"@radix-ui/react-slot\"\n" +
                            "import { cva, type VariantProps } from \"class-variance-authority\"\n" +
                            "\n" +
                            "import { cn } from \"@/lib/utils\"\n" +
                            "\n" +
                            "const buttonVariants = cva(\n" +
                            "  \"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\",\n" +
                            "  {\n" +
                            "    variants: {\n" +
                            "      variant: {\n" +
                            "        default: \"bg-primary text-primary-foreground hover:bg-primary/90\",\n" +
                            "        destructive:\n" +
                            "          \"bg-destructive text-destructive-foreground hover:bg-destructive/90\",\n" +
                            "        outline:\n" +
                            "          \"border border-input bg-background hover:bg-accent hover:text-accent-foreground\",\n" +
                            "        secondary:\n" +
                            "          \"bg-secondary text-secondary-foreground hover:bg-secondary/80\",\n" +
                            "        ghost: \"hover:bg-accent hover:text-accent-foreground\",\n" +
                            "        link: \"text-primary underline-offset-4 hover:underline\",\n" +
                            "      },\n" +
                            "      size: {\n" +
                            "        default: \"h-10 px-4 py-2\",\n" +
                            "        sm: \"h-9 rounded-md px-3\",\n" +
                            "        lg: \"h-11 rounded-md px-8\",\n" +
                            "        icon: \"h-10 w-10\",\n" +
                            "      },\n" +
                            "    },\n" +
                            "    defaultVariants: {\n" +
                            "      variant: \"default\",\n" +
                            "      size: \"default\",\n" +
                            "    },\n" +
                            "  }\n" +
                            ")\n" +
                            "\n" +
                            "export interface ButtonProps\n" +
                            "  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n" +
                            "    VariantProps<typeof buttonVariants> {\n" +
                            "  asChild?: boolean\n" +
                            "}\n" +
                            "\n" +
                            "const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(\n" +
                            "  ({ className, variant, size, asChild = false, ...props }, ref) => {\n" +
                            "    const Comp = asChild ? Slot : \"button\"\n" +
                            "    return (\n" +
                            "      <Comp\n" +
                            "        className={cn(buttonVariants({ variant, size, className }))}\n" +
                            "        ref={ref}\n" +
                            "        {...props}\n" +
                            "      />\n" +
                            "    )\n" +
                            "  }\n" +
                            ")\n" +
                            "Button.displayName = \"Button\"\n" +
                            "\n" +
                            "export { Button, buttonVariants }\n"}</code>
                    </pre>,
        ping:false,
        active:true,
        prerequisites:[],
    },
]
export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Components</h2>
            <h1 className="text-3xl font-bold mb-4">Buttons</h1>
            <p className="text-gray-600 mb-8">
                Browse and customize beautiful Tailwind CSS buttons in various styles, states, and sizes. Find active,
                disabled, pill, icon, and other free button examples.
            </p>
            <Section
                title="Overview usage"
                previewContent={
                    <>
                        <Button>Primary Button</Button>
                        <Button variant="outline"><PlusIcon className={'size-4 mr-2'}/> Outline</Button>
                        <Button size={'icon'}><ButtonIcon className={"size-4"}/></Button>
                        <Button variant="secondary" className="bg-white">Secondary Button</Button>
                        <Button variant="link">This is useful for clickable text.</Button>
                        <Button disabled={true}>Disabled</Button>
                    </>
                }
                htmlContent={`<Button>Primary Button</Button>
<Button variant="outline"><PlusIcon className={'size-4 mr-2'}/> Outline</Button>
<Button size={'icon'}><ButtonIcon className={"size-4"}/></Button>
<Button variant="secondary" className="bg-white">Secondary Button</Button>
<Button variant="link">This is useful for clickable text.</Button>
<Button disabled={true}>Disabled</Button>`}
            />
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Manual installation."}</p>
                <Timeline headTitle={'frontent repository'} timelineSteps={installButtonSteps} footerTitle={'<Button /> is ready to use'}/>
            </section>

            <Section
                title="Variants"
                description="Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."
                previewContent={
                    <>
                        <Button>Solid</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="secondary">Soft</Button>
                        <Button variant="secondary" className="bg-white">White</Button>
                        <Button variant="link">Link</Button>
                        <Button disabled={true}>Disabled</Button>
                    </>
                }
                htmlContent={`<Button>Solid</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="secondary">Soft</Button>\n<Button variant="secondary" className="bg-white">White</Button>\n<Button variant="link">Link</Button>\n<Button disabled={true}>Disabled</Button>`}
            />

            <Section
                title="Sizes"
                description="Buttons stacked small to large sizes."
                previewContent={
                    <div className="flex flex-wrap items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button>Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">
                            <ThumbsDownIcon className="h-4 w-4"/>
                        </Button>
                    </div>
                }
                htmlContent={`<Button size="sm">Small</Button>\n<Button>Default</Button>\n<Button size="lg">Large</Button>\n<Button size="icon">Icon</Button>`}
            />

        </div>
    );
}
