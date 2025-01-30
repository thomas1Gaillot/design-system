import Link from 'next/link'
import {HouseIcon, MilestoneIcon, PlayIcon, ScanFaceIcon} from 'lucide-react'
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export default function GuidelinesSidebarContent() {
    const pathName = usePathname()
    return (
        <nav className="mt-6 ml-2">
            <ul className="space-y-1 px-3">
                <li>
                    <Link href="/guidelines"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <HouseIcon className="h-4 w-4 text-amber-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName === "/guidelines" && "font-semibold text-gray-800"
                        )}>Accueil</span>
                    </Link>
                </li>
                {/* Getting Started */}
                <li>
                    <span className="text-xs font-semibold text-gray-500 uppercase">Principes de design UX</span>
                </li>

                <li>
                    <Link href="/guidelines/accessibility"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <ScanFaceIcon className="h-4 w-4 text-amber-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName === "/guidelines/accessibility" && "font-semibold text-gray-800"
                        )}>Accessibilité</span>
                    </Link>
                </li>
                <li>
                    <Link href="/guidelines/textual-component"
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <MilestoneIcon className="h-4 w-4 text-amber-500"/>
                        <span className={cn("text-sm font-normal text-gray-600",
                            pathName === "/guidelines/textual-component" && "font-semibold text-gray-800"
                        )}>Composant textuel</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}
