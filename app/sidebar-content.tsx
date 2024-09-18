import Link from 'next/link'
import {CableIcon, GroupIcon, LayoutTemplate, PuzzleIcon} from 'lucide-react'

export default function SidebarContent() {
    return (
        <div className="h-full overflow-y-auto">
            <div className="px-6 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <CableIcon className="h-6 w-6 text-blue-600" />
                    <span className="text-xl text-blue-600 tracking-tighter font-semibold">Systeno</span>
                </Link>
            </div>
            <nav className="mt-6">
                <ul className="space-y-1 px-3">
                    <li>
                        <Link href="#component" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <PuzzleIcon className="size-4" />
                            <span className="text-sm font-normal text-gray-600">Component</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#composition" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <GroupIcon className="size-4" />
                            <span className="text-sm font-normal text-gray-600">Composition</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#example" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                            <LayoutTemplate className="size-4" />
                            <span className="text-sm font-normal text-gray-600">Example</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
