"use client"

import {useState} from 'react'
import Link from 'next/link'
import {CableIcon, GroupIcon, LayoutTemplate, PanelRightClose, PuzzleIcon, SearchIcon} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function Component() {
    const [isOpen, setIsOpen] = useState(false)

    const SidebarContent = () => (
        <div className="h-full overflow-y-auto">
            <div className="px-6 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <CableIcon className="h-6 w-6 text-blue-600"/>
                    <span className="text-xl  text-blue-600 tracking-tighter font-semibold">Enogrid</span>
                </Link>
            </div>
            <nav className="mt-6">
                <ul className="space-y-1 px-3">
                    <li>
                        <Link href="#component"
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <PuzzleIcon className="size-4"/>
                            <span className={"text-sm font-normal text-gray-600"}>Component</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#composition"
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <GroupIcon className="size-4"/>
                            <span className={"text-sm font-normal text-gray-600"}>Composition</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#example"
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <LayoutTemplate className="size-4"/>
                            <span className={"text-sm font-normal text-gray-600"}>Example</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

    return (
        <div className="min-h-screen flex flex-col">
            <header
                className="sticky top-0 inset-x-0 z-20 bg-white border-b px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex items-center justify-between h-16">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <PanelRightClose className="h-6 w-6"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]  bg-white sm:w-[400px] p-0">
                            <SidebarContent/>
                        </SheetContent>
                    </Sheet>
                    <div className="flex-1 flex justify-end">
                        <div className="w-full max-w-lg lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                </div>
                                <Input
                                    id="search"
                                    name="search"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                <aside className="hidden lg:flex lg:flex-shrink-0">
                    <div className="w-64 flex flex-col">
                        <div
                            className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700">
                            <SidebarContent/>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 overflow-auto bg-gray-50 dark:bg-neutral-900">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Components</h1>
                        </div>
                        <div className="container mx-auto px-4 py-8">
                            <Badge
                                className="mb-4 bg-purple-100 text-purple-800 text-xl font-semibold px-4 py-1 rounded-full">200+</Badge>
                            <h1 className="text-4xl font-bold mb-4">Starter Pages & Examples</h1>
                            <p className="text-gray-600 mb-8 max-w-2xl">
                                Free Tailwind CSS resources as building blocks for websites and web applications.
                                Browse pre-built sections, forms, modals, and more.
                            </p>

                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Marketing</h2>
                            <p className="text-gray-600 mb-8">
                                Premium grade comprehensive components and website solutions to create stunning
                                marketing websites
                            </p>

                            <h3 className="text-xl font-semibold mb-4">Page Sections</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {['Hero Sections', 'Hero Forms', 'Icon Sections', 'Pricing Sections'].map((section, index) => (
                                    <Card key={section}>
                                        <CardContent className="p-4">
                                            <div className="bg-gray-200 h-40 mb-4 rounded-md"></div>
                                            <h4 className="font-semibold">{section}</h4>
                                            <p className="text-sm text-gray-500">{`${index === 1 || index === 3 ? 4 : 10} components`}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}