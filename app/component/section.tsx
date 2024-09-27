import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Copy} from "lucide-react";
import {ReactNode} from "react";

interface SectionProps {
    title: string;
    description?: string;
    previewContent: ReactNode;
    htmlContent: string | string[];
}

const Section = ({title, description, previewContent, htmlContent}: SectionProps) => {
    const htmlContents = typeof htmlContent === 'string' ? [htmlContent] : htmlContent;
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            <Tabs defaultValue="preview" className="w-full">
                <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="html">HTML</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                    <div
                        className="flex flex-wrap gap-4 items-center justify-center py-20 px-1 border border-gray-200 bg-white rounded-md">
                        {previewContent}
                    </div>
                </TabsContent>
                {htmlContents.map((html, index) => <TabsContent key={index} value="html" className="relative">
                    <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50">
                        <code>{html}</code>
                    </pre>
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-gray-800 text-gray-50">
                        <Copy className="h-4 w-4"/>
                    </Button>
                </TabsContent>)}
            </Tabs>
        </section>
    );
};

export default Section;
