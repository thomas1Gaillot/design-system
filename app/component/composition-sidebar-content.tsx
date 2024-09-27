import Link from 'next/link'
import {ContainerIcon, FootprintsIcon, PlayIcon} from 'lucide-react'

export default function CompositionSidebarContent() {
    return (
        <nav className="mt-6 ml-2">
            <ul className="space-y-1 px-3">

                {/* Getting Started */}
                <li>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Composition</span>
                </li>
                <li>
                    <Link href="/compositions/timeline"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <FootprintsIcon className="h-4 w-4 text-red-500"/>
                        <span className="text-sm font-normal text-gray-600">Timeline</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
