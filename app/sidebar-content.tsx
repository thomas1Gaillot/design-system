"use client"

import Link from "next/link"
import {CableIcon, ChevronDown, FlaskConical, GroupIcon, LayoutTemplate, PuzzleIcon, RibbonIcon,} from "lucide-react"
import ComponentsSideBarContent from "@/app/component/components-sidebar-content"
import {Separator} from "@/components/ui/separator"
import {usePathname} from "next/navigation"
import {cn} from "@/lib/utils"
import CompositionSidebarContent from "@/app/component/composition-sidebar-content"
import {useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import GuidelinesSidebarContent from "@/app/component/guidelines-sidebar-content";

export default function SidebarContent() {
    const pathName = usePathname()
    const [openSections, setOpenSections] = useState<string[]>(["Language et identité"])

    const toggleSection = (title: string) => {
        setOpenSections((prev) => (prev.includes(title) ? prev.filter((section) => section !== title) : [...prev, title]))
    }
    const sections = [
        {
            title: "Language et identité",
            items: [
                {
                    href: "/brand",
                    icon: <RibbonIcon className="size-4 text-violet-500" />,
                    label: "Vision",
                },
                {
                    href: "/guidelines",
                    icon: <FlaskConical className="size-4 text-amber-500" />,
                    label: "Conception UX",
                },
            ],
        },
        // {
        //     title: "Convention UI",
        //     items: [
        //         {
        //             href: "/color",
        //             icon: <PaletteIcon className="size-4 text-red-500" />,
        //             label: "Couleur",
        //         },
        //         {
        //             href: "/layout",
        //             icon: <LayoutPanelTopIcon className="size-4 text-sky-500" />,
        //             label: "Layout",
        //         },
        //         {
        //             href: "/typography",
        //             icon: <BookType className="size-4 text-orange-500" />,
        //             label: "Typography",
        //         },
        //         {
        //             href: "/iconography",
        //             icon: <AppleIcon className="size-4 text-green-500" />,
        //             label: "Icônes",
        //         },
        //     ],
        // },
        {
            title: "Composants",
            items: [
                {
                    href: "/component/installation",
                    icon: <PuzzleIcon className="size-4 text-green-500" />,
                    label: "Component",
                },
                {
                    href: "/compositions/timeline",
                    icon: <GroupIcon className="size-4 text-red-500" />,
                    label: "Composition",
                },
                {
                    href: "/examples",
                    icon: <LayoutTemplate className="size-4 text-orange-500" />,
                    label: "Exemples",
                },
            ],
        },
    ]

    return (
        <div className="h-full overflow-y-auto ml-4">
            <div className="px-6 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent tracking-tighter font-semibold">Systeno</span>
                </Link>
            </div>
            <nav className="my-6">
                {sections.map((section, index) => (
                    <div key={section.title} className="mb-6">
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="flex items-center justify-between w-full px-3 mb-2 text-left"
                        >
                            <div className="flex items-center space-x-2">
                                <span className="text-xs uppercase font-normal text-gray-500">{section.title}</span>
                            </div>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    openSections.includes(section.title) ? "transform rotate-180" : "",
                                )}
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {openSections.includes(section.title) && (
                                <motion.ul
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="space-y-1 px-3 overflow-hidden"
                                >
                                    {section.items.map((item) => (
                                        <motion.li
                                            key={item.href}
                                            variants={{
                                                collapsed: { opacity: 0, y: -10 },
                                                open: { opacity: 1, y: 0 },
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={cn("flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50")}
                                            >
                                                <div className={"p-1 rounded-lg border border-gray-200 shadow"}>{item.icon}</div>
                                                <span
                                                    className={cn(
                                                        "text-sm",
                                                        pathName.startsWith(item.href) ? "text-primary font-semibold" : "text-gray-700 font-medium",
                                                    )}
                                                >
                          {item.label}
                        </span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                        {index < sections.length - 1 && <Separator className="my-4" />}
                    </div>
                ))}
            </nav>
            <Separator orientation={"horizontal"} />
            {pathName.startsWith("/component") && <ComponentsSideBarContent />}
            {pathName.startsWith("/compositions") && <CompositionSidebarContent />}
            {pathName.startsWith("/guidelines") && <GuidelinesSidebarContent />}
        </div>
    )
}

