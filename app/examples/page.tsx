'use client'
import {Card, CardContent} from "@/components/ui/card";
import {ArrowLeft, Pickaxe} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function Page() {
    return <>
        <Card className={"text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl"}>
            <CardContent className="text-center p-8">
                <Pickaxe strokeWidth={1} className="mx-auto h-12 w-12 text-gray-400"/>
                <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                    {"En cours de création..."}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{"Page en travaux... Revenez plus tard."}</p>
                <div className="mt-6">
                    <Button
                        onClick={() => window.history.back()}
                        dataId={"empty-state-action-button"}>
                        <ArrowLeft className="mr-2 h-4 w-4"/>
                        {"Retour"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    </>
}