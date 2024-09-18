import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Copy} from "lucide-react";

export default function ButtonComponent() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Components</h2>
            <h1 className="text-3xl font-bold mb-4">Buttons</h1>
            <p className="text-gray-600 mb-8">
                Browse and customize beautiful Tailwind CSS buttons in various styles, states, and
                sizes. Find active, disabled, pill, icon, and other free button examples.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Variants</h2>
                <p className="text-gray-600 mb-4">
                    Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more.
                </p>
                <Tabs defaultValue="preview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="html">HTML</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="p-4 bg-gray-100 rounded-md">
                        <div className="flex flex-wrap gap-4">
                            <Button>Solid</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="secondary">Soft</Button>
                            <Button variant="secondary" className="bg-white">White</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="html" className="relative">
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50">
              <code>
                {`<Button>Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Soft</Button>
<Button variant="secondary" className="bg-white">White</Button>
<Button variant="link">Link</Button>`}
              </code>
            </pre>
                        <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-gray-800 text-gray-50">
                            <Copy className="h-4 w-4"/>
                        </Button>
                    </TabsContent>
                </Tabs>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                <p className="text-gray-600 mb-4">
                    Buttons stacked small to large sizes.
                </p>
                <Tabs defaultValue="preview" className="w-full">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="html">HTML</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="p-4 bg-gray-100 rounded-md">
                        <div className="flex flex-wrap items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button>Default</Button>
                            <Button size="lg">Large</Button>
                            <Button size={'icon'}>Icon</Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="html" className="relative">
            <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50">
              <code>
                {`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size={'icon'}>Icon</Button>
`}
              </code>
            </pre>
                        <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-gray-800 text-gray-50">
                            <Copy className="h-4 w-4"/>
                        </Button>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    )
}