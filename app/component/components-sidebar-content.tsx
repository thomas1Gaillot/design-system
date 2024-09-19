import Link from 'next/link'
import {GroupIcon, LayoutTemplate, PuzzleIcon} from 'lucide-react'

export default function ComponentsSideBarContent() {
    return (
                <nav className="mt-6 ml-2">
                    <ul className="space-y-1 px-3">

                        {/* Getting Started */}
                        <li>
                            <span className="text-xs font-semibold text-gray-500 uppercase">Getting Started</span>
                        </li>
                        <li>
                            <Link href="/component/installation"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <PuzzleIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Installation</span>
                            </Link>
                        </li>

                        {/* Layout */}
                        <li className="mt-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Layout</span>
                        </li>
                        <li>
                            <Link href="/component/container"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <GroupIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Container</span>
                            </Link>
                        </li>

                        {/* Content */}
                        <li className="mt-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Content</span>
                        </li>
                        <li>
                            <Link href="/component/typography"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <LayoutTemplate className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Typography</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/component/font"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <PuzzleIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Fonts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/component/image"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <GroupIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Images</span>
                            </Link>
                        </li>

                        {/* Base Components */}
                        <li className="mt-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase">Base Components</span>
                        </li>
                        <li>
                            <Link href="/component/button"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <LayoutTemplate className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Buttons</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/component/badge"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <PuzzleIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Badge</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/component/accordion"
                                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                                <GroupIcon className="h-4 w-4 text-green-500"/>
                                <span className="text-sm font-normal text-gray-600">Accordion</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
    )
}
