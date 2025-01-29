import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function InlineMessage() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {"Message intégré"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Utilisez les messages intégré pour fournir des informations brèves et contextuelles au sein du flux de contenu."}
            </p>
            <Alert variant="default" className="bg-gray-100 border-none shadow-none">
                <AlertDescription className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <Info className="h-4 w-4 " />

                    {"Astuce : Vous pouvez personnaliser vos paramètres de notification dans votre profil."}
                </AlertDescription>
            </Alert>
        </div>
    );
}
