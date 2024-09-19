import Link from 'next/link'
import {CableIcon, GroupIcon, LayoutTemplate, PuzzleIcon} from 'lucide-react'
import ComponentsSideBarContent from "@/app/component/components-sidebar-content";
import {Separator} from "@/components/ui/separator";

export default function SidebarContent() {
    return (
        <div className="h-full overflow-y-auto  ml-4">
            <div className="px-6 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <CableIcon className="h-6 w-6 text-blue-600" />
                    <span className="text-xl text-blue-600 tracking-tighter font-semibold">Systeno</span>
                </Link>
            </div>
            <nav className="my-6">
                <ul className="space-y-1 px-3">
                    <li>
                        <Link href="/component/button"
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <div className={"p-1 rounded-lg border border-gray-200 shadow"}>
                                <PuzzleIcon className="size-4 text-green-500"/>
                            </div>
                            <span className="text-sm font-semibold text-primary">Component</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/composition"
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <div className={"p-1 rounded-lg border border-gray-200 shadow"}>
                                <GroupIcon className="size-4 text-red-500"/>
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Composition</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/example" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className={"p-1 rounded-lg border border-gray-200 shadow"}>
                                <LayoutTemplate className="size-4 text-orange-500" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Example</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Separator orientation={'horizontal'}/>
            <ComponentsSideBarContent/>
        </div>
    )
}
