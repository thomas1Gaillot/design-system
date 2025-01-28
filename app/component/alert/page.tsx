import Section from "@/app/component/section";
import Timeline from "@/compositions/Timeline";
import {TimelineStepType} from "@/compositions/TimelineStep";
import path from "path";
import fs from "fs";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {BadgeInfo, BanIcon, BatteryWarningIcon, ExternalLink, PackagePlus, RefreshCcw, XIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

const filePath = path.resolve(process.cwd(), 'components/ui/alert.tsx');
const alertCode = fs.readFileSync(filePath, 'utf-8');

const installAccordionSteps: TimelineStepType[] = [
    {
        title: "Copiez et collez le code suivant dans votre projet.",
        description: "Créez un fichier Accordion.tsx dans votre dossier de composants.",
        Button: () => (
            <pre
                className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
        <code>
          {alertCode}
        </code>
      </pre>
        ),
        ping: false,
        active: true,
        prerequisites: [],
    },
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Composants</h2>
            <h1 className="text-3xl font-bold mb-4">Alerte</h1>
            <p className="text-gray-600 mb-8">
                {"Les composants d'alerte sont utilisés pour informer les utilisateurs d'une action ou d'un événement."}
            </p>
            <Section
                title="Aperçu de l'utilisation"
                previewContent={
                    <Alert className="mx-4">
                        <AlertTitle className="flex gap-2 items-center">Information importante</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Cette action a bien été enregistrée.</li>
                                <li>Vous pouvez consulter les détails dans votre tableau de bord.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>

                }
                htmlContent={`<Alert className="mx-4">
<AlertTitle className="flex gap-2 items-center">Information importante</AlertTitle>
<AlertDescription>
<ul className="list-disc pl-5 space-y-2">
<li>Cette action a bien été enregistrée.</li>
<li>Vous pouvez consulter les détails dans votre tableau de bord.</li>
</ul>
</AlertDescription>
</Alert>`}
            />

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">{"Installation"}</h2>
                <p className="text-gray-600 mb-4">{"Installation manuelle."}</p>
                <Timeline
                    headTitle={"racine de l'application"}
                    timelineSteps={installAccordionSteps}
                    footerTitle={"<Alert /> est prêt à l'emploi"}
                />
            </section>
            <Section
                title="Variantes et cas d'usage"
                description="Alerte d'erreur, d'information, d'avertissement, customisé."
                previewContent={
                    <div className="flex flex-wrap items-center gap-4">
                        <Alert className="mx-4 bg-indigo-100 text-indigo-700">
                            <AlertTitle className=" w-full">
                                <div className={'flex w-full justify-between items-center'}>
                                    <div className={'flex text-lg'}>
                                        <PackagePlus className={'size-6 mr-2 shrink-0'}/>
                                        Simulez la faisabilité de votre projet.
                                    </div>
                                    <div className={'flex gap-2'}>
                                        <Button dataId={'more-button'} size='sm' variant={'primaryProject'}>
                                            Découvrir Enolab
                                        </Button>
                                        <Button dataId={'x-icon'} size={'icon'} variant={'ghost'}>
                                            <XIcon className={'size-4'}/>
                                        </Button>
                                    </div>
                                </div>
                            </AlertTitle>
                        </Alert>
                        <Alert className="mx-4" variant="destructive">
                            <AlertTitle className="flex gap-2 items-center"> <BanIcon
                                className={'size-4'}/> Erreur</AlertTitle>
                            <AlertDescription className={"w-full"}>
                                <div className={"flex-col gap-2 flex sm:flex-row w-full justify-between items-start sm:items-center"}>
                                    {"Une erreur s'est produite."}
                                    <Button dataId={"resolve"} variant={'ghost'} className={'hover:bg-red-200 hover:text-red-700 w-full sm:w-max'}>
                                        Recharger la page <RefreshCcw className={'size-4 ml-2'}/>
                                    </Button>
                                </div>
                            </AlertDescription>
                        </Alert>
                        <Alert className="mx-4" variant="warning">
                            <AlertTitle className="flex gap-2 items-center">
                                <BatteryWarningIcon className={'size-4'}/>
                                Attention
                            </AlertTitle>
                            <AlertDescription>
                                {"Batterie faible. Veuillez brancher votre appareil."}
                            </AlertDescription>
                        </Alert>
                        <Alert className={"mx-4"} variant="information">
                            <AlertTitle className="flex gap-2 items-center">
                                <BadgeInfo className={'size-4'}/>
                                Information</AlertTitle>
                            <AlertDescription>
                                {"Ce badge signifie que vous êtes un profil vérifié."}
                            </AlertDescription>
                        </Alert>
                    </div>
                }
                htmlContent={`<div className="flex flex-wrap items-center gap-4">

// ----- Alerte customisée ---------
  <Alert className="mx-4 bg-indigo-100 text-indigo-700">
                            <AlertTitle className=" w-full">
                                <div className={'flex w-full justify-between items-center'}>
                                    <div className={'flex text-lg'}>
                                        <PackagePlus className={'size-6 mr-2 shrink-0'}/>
                                        Simulez la faisabilité de votre projet.
                                    </div>
                                    <div className={'flex gap-2'}>
                                        <Button dataId={'more-button'} size='sm' variant={'primaryProject'}>
                                            Découvrir Enolab
                                        </Button>
                                        <Button dataId={'x-icon'} size={'icon'} variant={'ghost'}>
                                            <XIcon className={'size-4'}/>
                                        </Button>
                                    </div>
                                </div>
                            </AlertTitle>
                        </Alert>
                        
// ----- Alerte d'erreur avec un bouton ---------
                        <Alert className="mx-4" variant="destructive">
                            <AlertTitle className="flex gap-2 items-center"> <BanIcon
                                className={'size-4'}/> Erreur</AlertTitle>
                            <AlertDescription className={"w-full"}>
                                <div className={"flex-col gap-2 flex sm:flex-row w-full justify-between items-start sm:items-center"}>
                                {"Une erreur s'est produite."}
                                <Button dataId={"resolve"} variant={'ghost'} className={'hover:bg-red-200 hover:text-red-700 w-full sm:w-max'}>
                                    Recharger la page <RefreshCcw className={'size-4 ml-2'}/>
                                </Button>
                                </div>
                            </AlertDescription>
                        </Alert>
                        
// ----- Alerte d'avertissement ---------
                        <Alert className="mx-4" variant="warning">
                            <AlertTitle className="flex gap-2 items-center">
                                <BatteryWarningIcon className={'size-4'}/>
                                Attention
                            </AlertTitle>
                            <AlertDescription>
                                {"Batterie faible. Veuillez brancher votre appareil."}
                            </AlertDescription>
                        </Alert>
                        
// ----- Alerte d'information ---------
                        <Alert className={"mx-4"} variant="information">
                            <AlertTitle className="flex gap-2 items-center">
                                <BadgeInfo className={'size-4'}/>
                                Information</AlertTitle>
                            <AlertDescription>
                                {"Ce badge signifie que vous êtes un profil vérifié."}
                            </AlertDescription>
                        </Alert>
                    </div>`}
            />
        </div>
    );
}
