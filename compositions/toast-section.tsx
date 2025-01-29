import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { CheckCircle, FileCheck, Info, ArrowRightCircle } from "lucide-react"; // Importation des nouvelles icônes

export function ToastSection() {

    // Fonction pour afficher un toast de mise à jour réussie
    const showUpdateToast = () => {
        toast.custom((t) => (
            <div className="flex w-max items-center gap-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{"Mise à jour réussie"}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {"Vos paramètres ont été mis à jour avec succès !"}
                    </p>
                </div>
                <button
                    onClick={() => toast.dismiss(t)}
                    className="rounded-md px-3 py-1 text-sm font-medium text-blue-600 transition hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
                >
                    {"Fermer"}
                </button>
            </div>
        ));
    };

    // Fonction pour afficher un toast de publication réussie
    const showPublicationToast = () => {
        toast.custom((t) => (
            <div className="flex w-max items-center gap-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                <FileCheck className="h-5 w-5 text-yellow-500" />
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{"Publication réussie"}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {"Votre article a bien été publié et est maintenant visible pour tous."}
                    </p>
                </div>
                <button
                    onClick={() => toast.dismiss(t)}
                    className="rounded-md px-3 py-1 text-sm font-medium text-blue-600 transition hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
                >
                    {"Fermer"}
                </button>
            </div>
        ));
    };

    // Fonction pour afficher un toast d'information
    const showInfoToast = () => {
        toast.custom((t) => (
            <div className="flex w-max items-center gap-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
                <Info className="h-5 w-5 text-blue-500" />
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{"Information"}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {"N'oubliez pas de sauvegarder vos modifications avant de quitter la page."}
                    </p>
                </div>
                <button
                    onClick={() => toast.dismiss(t)}
                    className="rounded-md px-3 py-1 text-sm font-medium text-blue-600 transition hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
                >
                    {"Fermer"}
                </button>
            </div>
        ));
    };


    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {"Notification Toast"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Utilisez les notifications toast pour afficher des messages brefs et non intrusifs aux utilisateurs. Elles sont idéales pour confirmer des actions, alerter les utilisateurs sur de nouvelles fonctionnalités ou fournir des mises à jour rapides."}
            </p>
            <div className="flex flex-wrap gap-4">
                <Button variant={'secondary'} dataId={'show-toast-ok'} onClick={showUpdateToast}>{"Mise à jour réussie"}</Button>
                <Button variant={'secondary'} dataId={'show-publication-ok'} onClick={showPublicationToast}>{"Publication réussie"}</Button>
                <Button variant={'secondary'} dataId={'show-toast-info'} onClick={showInfoToast}>{"Information"}</Button>
            </div>
            <Toaster position={'top-center'} />
            {/* Section bonnes pratiques */}
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Bonnes pratiques"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"✅ Utilisez des toasts pour les messages brefs et non intrusifs (confirmation, succès, info) qui ne nécessitent pas d'interaction immédiate."}</li>
                    <li>{"✅ Affichez des informations pertinentes et concises qui ne perturbent pas l'utilisateur dans ses actions."}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Erreurs à éviter"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"❌ N'utilisez pas les toasts pour des messages longs ou des informations importantes qui nécessitent l'attention de l'utilisateur."}</li>
                    <li>{"❌ Ne surchargez pas l'interface avec trop de toasts en même temps. Priorisez les messages essentiels."}</li>
                    <li>{"❌ Évitez de rendre un toast intrusif ou exigeant une action immédiate, préférez des modales ou des alertes."}</li>
                </ul>

                <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Moments appropriés pour utiliser un toast"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"▶️ Pour confirmer des actions simples et courantes, comme la réussite d'une mise à jour."}</li>
                    <li>{"▶️ Pour informer brièvement l'utilisateur sans le perturber dans son flux de travail."}</li>
                    <li>{"▶️ Lors de la publication ou de la soumission de contenu, pour notifier l'utilisateur du succès de l'action."}</li>
                </ul>
            </div>
        </div>
    );
}
