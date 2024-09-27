import {Button} from "@/components/ui/button";
import Section from "@/app/component/section";
import {PlusIcon, ThumbsDownIcon} from "lucide-react";
import {ButtonIcon} from "@radix-ui/react-icons";

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
                title="Overview"
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
