"use client"


import Link from "next/link"
import {ChevronRight} from "lucide-react"
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

export default function UXGuidePage() {
    return (
        <>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-800">Conception UX</h1>
                <p className="text-lg text-gray-600">
                    {"Comprendre comment aborder les modèles UX courants nous permettra d'établir une approche et une expérience utilisateur cohérentes sur toutes les plateformes."}
                </p>
            </div>

            <div className="space-y-6">
                <Link href="/guidelines/accessibility" className="block">
                    <div className="group relative">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Accessibilité</h2>
                                <p className="text-gray-500 text-sm">
                                    {"Pendant la conception ou les tests, assurez-vous de vérifier quelques points pour garantir l'accessibilité de votre design."}
                                </p>
                            </div>
                            <Button
                                variant={'secondary'}
                                size={'sm'}
                                dataId={'show-more-button-accessibiliity'}>
                                En savoir plus
                                <ChevronRight
                                    className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"/>
                            </Button>
                        </div>
                    </div>
                </Link>
                <Separator orientation={'horizontal'}/>

                <Link href="/guidelines/textual-component" className="block">
                    <div className="group relative">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">Composant
                                    textuel</h2>
                                <p className="text-gray-500 text-sm">
                                    Les utilisateurs font attention à la manière dont le produit leur parle. Choisir le
                                    bon composant textuel
                                </p>
                            </div>
                            <Button
                                variant={'secondary'}
                                size={'sm'}

                                dataId={'show-more-button-textual'}>
                                En savoir plus
                                <ChevronRight
                                    className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"/>

                            </Button></div>
                    </div>
                </Link>
                <Separator orientation={'horizontal'}/>

                <Link href="/navigation-component" className="block">
                    <div className="group relative">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                                    Composants de navigation
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    {"Une navigation claire et intuitive est essentielle pour l'UX, le développement et la maintenance."}
                                </p>
                            </div>
                            <Button
                                variant={'secondary'}
                                size={'sm'}

                                dataId={'show-more-button-navigation'}>
                                En savoir plus
                                <ChevronRight
                                    className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"/>

                            </Button></div>
                    </div>
                </Link>
            </div>

        </>
    )
}

