import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {PlusCircle} from "lucide-react";

export function EmptyStateExplainSection() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {"État vide"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Utilisez les états vides lorsqu'il n'y a aucune donnée à afficher. Cela aide à guider les utilisateurs sur les actions à entreprendre ensuite."}
            </p>
            <EmptyState/>
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Bonnes pratiques"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <p>{"✅ 'S'intègre bien dans des tableaux vide, pages vides, ...'"}</p>
                </ul>
            </div>
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Erreurs à éviter"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <p>{"❌ 'Attention à bien ajouter un bouton permettant de sortir de l'état vide'"}</p>
                </ul>
            </div>
        </div>
    );
}

export function EmptyState() {

    return <Card className={"text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl"}>
        <CardContent className="text-center p-8">
            <PlusCircle strokeWidth={1} className="mx-auto h-12 w-12 text-gray-400"/>
            <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">
                {"Aucun projet"}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{"Commencez par créer un nouveau projet."}</p>
            <div className="mt-6">
                <Button dataId={"empty-state-action-button"}>
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    {"Nouveau projet"}
                </Button>
            </div>
        </CardContent>
    </Card>
}