import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";

export function Banner() {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {"Bannière"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Utilisez les bannières pour afficher des informations importantes nécessitant une attention immédiate."}
            </p>
            <Alert variant="destructive" className={'rounded-none'}>
                <AlertTitle className={'flex items-center gap-2'}>
                    <ExclamationTriangleIcon className="h-4 w-4"/>
                    {"Vous êtes en retard sur votre paiement"}
                </AlertTitle>
                <AlertDescription className={'w-full'}>
                    <div className={"flex items-center w-full justify-between"}>
                        <p className={"w-full"}>{"Vous avez un retard de paiement. Vous avez 14 jours pour régulariser votre situation avant de perdre l'accès à votre compte."}</p>
                        <Button dataId={'cta-button'} variant="destructive"
                                className="m-0">{"Régulariser ma situation"}</Button>
                    </div>
                </AlertDescription>
            </Alert>
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Bonnes pratiques"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"✅ 'Est visible sur toutes les pages rapidement'"}</li>
                </ul>
            </div>
            <div className={"grid gap-1 text-sm mt-8"}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{"Erreurs à éviter"}</h3>
                <ul className="text-gray-600 dark:text-gray-300">
                    <li>{"❌ 'Attention à ne pas en abuser. S'utilise généralement seulement pour les erreurs critiques, facturation manquante.'"}</li>
                </ul>
            </div>
        </div>
    );
}
