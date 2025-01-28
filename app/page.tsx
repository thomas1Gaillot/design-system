"use client"

import {useRouter} from "next/navigation";
import {ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Component() {
    const router = useRouter()
    return (
        <>
            <div
                className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 space-y-4">
                    <h1 className="block font-bold text-gray-800 space-y-2 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                            <span
                                className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Systeno</span>
                    </h1>
                    <p className={"text-2xl font-medium text-gray-800"}>{"Répertoire du frontend chez Enogrid"}</p>

                    <p className="text-md text-gray-600 dark:text-neutral-400">
                        Apporter une vision <strong>uniforme</strong> du frontend chez Enogrid.
                    </p>
                    <Button
                        onClick={() => router.push("/component/button")}
                        className={"inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600"}
                        dataId={"button"}> Commencer
                        <ChevronRight className={"size-4 shrink-0"}/></Button>


                </div>
            </div>
        </>
    )
}
