"use client"

import {useRouter} from "next/navigation";
import {ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Component() {
    const router = useRouter()
    return (
        <>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                <span
                    className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Systeno</span>
            </h1>
            <p className="text-2xl font-medium text-gray-800 mb-4">Design System sauce Enogrid 🍲</p>
            <p className="text-md text-gray-600 dark:text-neutral-400 mb-8">
                Apporter une vision <strong>uniforme</strong> de nos produits chez Enogrid.
            </p>

            <div className="grid gap-8 md:grid-cols-2 max-w-3xl w-full">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Produit</h2>
                    <p className="text-gray-600">
                        Explorez notre vision produit et nos guides UX pour une expérience utilisateur cohérente.
                    </p>
                    <div className="space-y-2">
                        <Button
                            dataId={"vision-produit"}
                            onClick={() => router.push("/brand")}
                            className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                        >
                            Vision
                            <ChevronRight className="size-4 shrink-0 ml-2"/>
                        </Button>
                        <Button
                            dataId={"guide-ux"}
                            onClick={() => router.push("/guidelines")}
                            className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                        >
                            Conception UX
                            <ChevronRight className="size-4 shrink-0 ml-2"/>
                        </Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Développeur</h2>
                    <p className="text-gray-600">
                        Découvrez nos composants, compositions et exemples de pages pour accélérer votre développement.
                    </p>
                    <div className="space-y-2">
                        <Button
                            dataId={"composants"}
                            onClick={() => router.push("/component/installation")}
                            className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                        >
                            Composants
                            <ChevronRight className="size-4 shrink-0 ml-2"/>
                        </Button>
                        <Button
                            dataId={"compositions"}
                            onClick={() => router.push("/compositions/timeline")}
                            className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                        >
                            Compositions
                            <ChevronRight className="size-4 shrink-0 ml-2"/>
                        </Button>
                        <Button
                            dataId={"pages-exemples"}
                            onClick={() => router.push("/examples")}
                            className="w-full bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
                        >
                            {"Exemples d'UI"}
                            <ChevronRight className="size-4 shrink-0 ml-2"/>
                        </Button>
                    </div>
                </div>
            </div>


        </>
    )
}
