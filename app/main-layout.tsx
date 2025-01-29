'use client'
import {useState} from 'react'
import {PanelRightClose} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import SidebarContent from "@/app/sidebar-content";
import CommentDialog from "@/compositions/CommentDialog";




export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            <header
                className="sticky top-0 inset-x-0 z-20 bg-white border-b px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex items-center justify-between h-16">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button dataId={'toggle-navigation-btn'} variant="ghost" size="icon" className="lg:hidden">
                                <PanelRightClose className="h-6 w-6"/>
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]  bg-white sm:w-[400px] p-0">
                            <SidebarContent/>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                <aside className="hidden lg:flex lg:flex-shrink-0 overflow-y-auto max-h-screen">
                    <div className="w-64 flex flex-col">
                        <div
                            className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700">
                            <SidebarContent/>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 overflow-auto bg-gray-50 dark:bg-neutral-900 max-h-screen">
                    <div className="max-w-[85rem] mx-auto px-16 sm:px-24 lg:px-32 py-16 pb-20 space-y-8">
                        {children}
                    </div>
                    <CommentDialog/>
                </main>
            </div>
        </div>
    );
}
