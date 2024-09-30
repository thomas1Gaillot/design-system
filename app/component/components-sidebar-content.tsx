import Link from 'next/link'
import {
    BadgeIcon, BellIcon, BinaryIcon,
    BookTypeIcon,
    ContainerIcon,
    ImageIcon,
    ListCollapseIcon,
    LoaderCircle, MessageSquare,
    PlayIcon,
    TypeOutlineIcon
} from 'lucide-react'
import {ButtonIcon} from "@radix-ui/react-icons";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export default function ComponentsSideBarContent() {
    const pathName=usePathname()
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
                        <PlayIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/installation") && "font-semibold text-gray-800"
                        )}>Installation</span>
                    </Link>
                </li>

                {/* Layout */}
                <li className="mt-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Layout</span>
                </li>
                <li>
                    <Link href="/component/container"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <ContainerIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/container") && "font-semibold text-gray-800"
                        )}>Container</span>
                    </Link>
                </li>

                {/*/!* Content *!/*/}
                {/*<li className="mt-4">*/}
                {/*    <span className="text-xs font-semibold text-gray-500 uppercase">Content</span>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="/component/typography"*/}
                {/*          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">*/}
                {/*        <BookTypeIcon className="h-4 w-4 text-green-500"/>*/}
                {/*        <span className={cn("text-sm font-normal text-gray-600",*/}
                {/*            pathName.includes("/component/typography") && "font-semibold text-gray-800"*/}
                {/*        )}>Typography</span>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="/component/font"*/}
                {/*          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">*/}
                {/*    <TypeOutlineIcon className="h-4 w-4 text-green-500"/>*/}
                {/*        <span className={cn("text-sm font-normal text-gray-600",*/}
                {/*            pathName.includes("/component/font") && "font-semibold text-gray-800"*/}
                {/*        )}>Fonts</span>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="/component/image"*/}
                {/*          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">*/}
                {/*    <ImageIcon className="h-4 w-4 text-green-500"/>*/}
                {/*        <span className={cn("text-sm font-normal text-gray-600",*/}
                {/*            pathName.includes("/component/image") && "font-semibold text-gray-800"*/}
                {/*        )}>Images</span>*/}
                {/*    </Link>*/}
                {/*</li>*/}

                {/* Base Components */}
                <li className="mt-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Base Components</span>
                </li>
                <li>
                    <Link href="/component/accordion"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <ListCollapseIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/accordion") && "font-semibold text-gray-800"
                        )}>Accordion</span>
                    </Link>
                </li>

                <li>
                    <Link href="/component/badge"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <BadgeIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/badge") && "font-semibold text-gray-800"
                        )}>Badge</span>
                    </Link>
                </li>
                <li>
                    <Link href="/component/button"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <ButtonIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/button") && "font-semibold text-gray-800"
                        )}>Buttons</span>
                    </Link>
                </li>
                <li>
                    <Link href="/component/dialog"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <MessageSquare className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/dialog") && "font-semibold text-gray-800"
                        )}>Dialog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/component/input-otp"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <BinaryIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/input-otp") && "font-semibold text-gray-800"
                        )}>Input OTP</span>
                    </Link>
                </li>
                <li>
                    <Link href="/component/ping"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <BellIcon className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/ping") && "font-semibold text-gray-800"
                        )}>Ping</span>
                    </Link>
                </li>
                <li>
                    <Link href="/component/progress"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <LoaderCircle className="h-4 w-4 text-green-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName.includes("/component/progress") && "font-semibold text-gray-800"
                        )}>Progress</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
