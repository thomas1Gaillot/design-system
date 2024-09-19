import {Button} from "@/components/ui/button";
import Section from "@/app/component/section";
import {ThumbsUp} from "lucide-react";

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Components</h2>
            <h1 className="text-3xl font-bold mb-4">Buttons</h1>
            <p className="text-gray-600 mb-8">
                Browse and customize beautiful Tailwind CSS buttons in various styles, states, and sizes. Find active, disabled, pill, icon, and other free button examples.
            </p>

            <Section
                title="Variants"
                description="Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."
                previewContent={
                    <div className="flex flex-wrap gap-4">
                        <Button>Solid</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="secondary">Soft</Button>
                        <Button variant="secondary" className="bg-white">White</Button>
                        <Button variant="link">Link</Button>
                        <Button disabled={true}>Disabled</Button>
                    </div>
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
                        <Button size="icon">Icon</Button>
                    </div>
                }
                htmlContent={`<Button size="sm">Small</Button>\n<Button>Default</Button>\n<Button size="lg">Large</Button>\n<Button size="icon">Icon</Button>`}
            />

            <Section
                title="Good Practices"
                previewContent={
                    <>
                        <p className="text-gray-800 mb-4 flex items-center">
                            <ThumbsUp className={"size-4 mr-2"}/>
                            There should be one primary button per view.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button>Get Started</Button>
                        </div>
                    </>
                }
                htmlContent={`<Button>Get Started</Button>`}
            />

            <Section
                title=""
                previewContent={
                    <>
                        <div className="text-gray-800 mb-4 flex items-center">
                            <ThumbsUp className={"size-4 mr-2"}/>
                            {"Use secondary, outline, ghost and link buttons for "}
                            <strong>{" 80 % "}</strong>
                            {" of actions."}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="outline">Second choice</Button>
                            <Button variant="secondary">Go Back</Button>
                            <Button variant="link">good for long text and question ?</Button>
                            <Button variant="ghost">Not Important</Button>
                        </div>
                    </>
                }
                htmlContent={`<Button variant="outline">Second choice</Button>\n<Button variant="secondary">Go Back</Button>\n<Button variant="link">good for long text and question ?</Button>\n<Button variant="ghost">Not Important</Button>`}
            />
        </div>
    );
}
