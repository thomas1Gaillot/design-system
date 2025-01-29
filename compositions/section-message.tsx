import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle, XCircle, Trash } from "lucide-react";

export function SectionMessage() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {"Alertes"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Utilisez les alertes pour fournir du contexte ou des informations supplémentaires pour une section spécifique de votre page."}
            </p>

            <Alert variant="default" className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 mb-4">
                <AlertTitle className="text-blue-800 dark:text-blue-200 flex">
                    <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 " />
                    {"Information utile"}
                </AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                    {"Vous pouvez passer cette étape si vous avez déjà configuré votre profil dans les paramètres."}
                </AlertDescription>
            </Alert>
            <Alert variant="default" className="bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-800 mb-4">
                <AlertTitle className="text-red-800 dark:text-red-200 flex">
                    <Info className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 " />
                    {"Formulaire désactivé"}
                </AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-300">
                    {"Certaines informations ne sont plus disponibles car vous avez déjà soumis les contrats de vente aux consommateurs."}
                </AlertDescription>
            </Alert>
            <Alert variant="default" className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 mb-4">
                <AlertTitle className="text-gray-800 dark:text-gray-200 flex">
                    <Info className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2 " />
                    {"Accès restreint"}
                </AlertTitle>
                <AlertDescription className="text-gray-700 dark:text-gray-300">
                    {"Vous devez avoir le rôle d'administrateur pour accéder à cette section. Contactez un administrateur pour plus d'informations."}
                </AlertDescription>
            </Alert>

            <Alert variant="default" className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 mb-4">
                <AlertTitle className="text-blue-800 dark:text-blue-200 flex">
                    <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 " />
                    {"Mise à jour requise"}
                </AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                    {"Une nouvelle version de l'application est disponible. Veuillez mettre à jour l'application pour bénéficier des dernières fonctionnalités et corrections."}
                </AlertDescription>
            </Alert>
            <Alert variant="default" className="bg-orange-50 dark:bg-orange-900 border-orange-200 dark:border-orange-800 mb-4">
                <AlertTitle className="text-orange-800 dark:text-orange-200 flex">
                    <Info className="h-4 w-4 text-orange-600 dark:text-orange-400 mr-2 " />
                    {"Stock limité"}
                </AlertTitle>
                <AlertDescription className="text-orange-700 dark:text-orange-300">
                    {"Il ne reste plus que quelques articles en stock. Commandez maintenant avant qu'il ne soit trop tard."}
                </AlertDescription>
            </Alert>

            {/* Liste des bonnes pratiques et erreurs à éviter */}
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Bonnes pratiques"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"✅ Utilisez les alertes pour informer l'utilisateur d'événements importants (ex : comportement inhabituel)."}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Erreurs à éviter"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">

                    <li>{"❌ Ne surchargez pas l'utilisateur avec trop d'alertes simultanément."}</li>
                    <li>{"❌ Évitez d'utiliser des alertes pour des informations triviales ou non urgentes."}</li>
                    <li>{"❌ N'utilisez pas d'alertes si une notification toast suffit."}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Moments appropriés pour utiliser une alerte"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"▶️ Pour informer du contexte spécial d'une section de la page (ex : informations critiques)"}</li>
                    <li>{"▶️ Pour avertir l'utilisateur d'une action irréversible ou critique (ex : page suppression)."}</li>
                    <li>{"▶️ Pour fournir des informations ou des recommandations importantes (ex : mise à jour du profil)."}</li>
                </ul>
            </div>
        </div>
    );
}
