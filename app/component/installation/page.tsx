'use client'
import {Button} from "@/components/ui/button";

export default function Page() {
    function openShadcnInNewTab() {
        window.open('https://ui.shadcn.com/docs/installation/next', '_blank')
    }

    return <div className="container mx-auto px-4 py-8">
        <h2 className="text-sm font-semibold text-blue-600 mb-2">Installation</h2>
        <h1 className="text-3xl font-bold mb-4">Installation based on shadcn/ui</h1>
        <p className="text-gray-600 mb-8">
            Follow <Button onClick={openShadcnInNewTab}
                           variant={'link'}>https://ui.shadcn.com/docs/installation/next</Button>
            tutorial
        </p>
    </div>
}