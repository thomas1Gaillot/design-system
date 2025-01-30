"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {ChevronRight} from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/" >Accueil</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {segments.map((segment, index) => {
                    const href = "/" + segments.slice(0, index + 1).join("/");
                    const isLast = index === segments.length - 1;
                    const label = decodeURIComponent(segment).replace(/-/g, " "); // Remplace les "-" par des espaces

                    return (
                        <div key={href} className="flex items-center">
                            <BreadcrumbSeparator>
                                <ChevronRight className="w-3.5 h-3.5 " />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    {isLast ? (
                                        <span
                                            className="text-gray-800 font-medium">{label.charAt(0).toUpperCase() + label.slice(1)}</span>
                                    ) : (
                                        <Link href={href} >
                                            {label.charAt(0).toUpperCase() + label.slice(1)}
                                        </Link>
                                    )}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
