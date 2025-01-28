import { Button } from "@/components/ui/button";
import Section from "@/app/component/section";
import { PlusIcon, ThumbsDownIcon } from "lucide-react";
import { ButtonIcon } from "@radix-ui/react-icons";
import Timeline from "@/compositions/Timeline";
import { TimelineStepType } from "@/compositions/TimelineStep";
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'components/ui/button.tsx');
const buttonCode = fs.readFileSync(filePath, 'utf-8');
const installButtonSteps: TimelineStepType[] = [
    {
        title: "Installer les dépendances",
        description: "Installez le package depuis npm ou pnpm.",
        Button: () => <pre className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 ">
                        <code>{"pnpm i @radix-ui/react-slot"}</code>
                    </pre>,
        ping: false,
        active: true,
        prerequisites: [],
    },
    {
        title: "Copiez et collez le code suivant dans votre projet.",
        description: "Créez un fichier Button.tsx dans le dossier de vos composants et collez le code suivant.",
        Button: () => <pre
            className="language-html text-sm p-4 rounded-lg bg-gray-800 text-gray-50 overflow-x-auto overflow-y-auto max-w-sm md:max-w-md 2xl:max-w-2xl max-h-[200px]">
                        <code>{buttonCode}</code>
                    </pre>,
        ping: false,
        active: true,
        prerequisites: [],
    },
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Composants</h2>
            <h1 className="text-3xl font-bold mb-4">Boutons</h1>
            <p className="text-gray-600 mb-8">
                Parcourez et personnalisez de magnifiques boutons Tailwind CSS avec différents styles, états et tailles. Trouvez des exemples actifs, désactivés, avec icônes, et bien plus encore.
            </p>
            <Section
                title="Aperçu de l'utilisation"
                previewContent={
                    <>
                        <Button dataId={'primary-button'}>Principal</Button>
                        <Button dataId={'primaryProject-button'} variant={'primary'}>Je crée un compte</Button>

                        <Button variant="outline" dataId={'outline-button'}>
                            <PlusIcon className={'size-4 mr-2'} /> Contour
                        </Button>
                        <Button size={'icon'} dataId={'icon-button'}>
                            <ButtonIcon className={'size-4'} />
                        </Button>
                        <Button variant="secondary" className="bg-white" dataId={'secondary-button'}>
                            Bouton Secondaire
                        </Button>
                        <Button variant="link" dataId={'link-button'}>
                            Utile pour du texte cliquable.
                        </Button>
                        <Button disabled={true} dataId={'disabled-button'}>
                            Désactivé
                        </Button>
                    </>
                }
                htmlContent={`<Button>Bouton Principal</Button>
<Button variant="outline"><PlusIcon className={'size-4 mr-2'} /> Contour</Button>
<Button size={'icon'}><ButtonIcon className={"size-4"} /></Button>
<Button variant="secondary" className="bg-white">Bouton Secondaire</Button>
<Button variant="link">Utile pour du texte cliquable.</Button>
<Button disabled={true}>Désactivé</Button>`}
            />
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Installation</h2>
                <p className="text-gray-600 mb-4">Installation manuelle.</p>
                <Timeline headTitle={'dépôt frontend'} timelineSteps={installButtonSteps}
                          footerTitle={`<Button /> est prêt à l'emploi`} />
                              </section>

                              <Section
                              title="Variantes"
                              description="Explorez les styles de boutons les plus courants tels que plein, contour, fantôme, doux, lien, et plus encore."
                              previewContent={
                              <>
                              <Button dataId={'solid-button'}>Plein</Button>
                <Button variant="outline" dataId={'outline-button'}>Contour</Button>
                <Button variant="ghost" dataId={'ghost-button'}>Fantôme</Button>
                <Button variant="secondary" dataId={'soft-button'}>Doux</Button>
                <Button variant="secondary" className="bg-white" dataId={'white-button'}>Blanc</Button>
                <Button variant="link" dataId={'link-button'}>Lien</Button>
                <Button disabled={true} dataId={'disabled-button'}>Désactivé</Button>
            </>
            }
             htmlContent={`<Button>Plein</Button>\n<Button variant="outline">Contour</Button>\n<Button variant="ghost">Fantôme</Button>\n<Button variant="secondary">Doux</Button>\n<Button variant="secondary" className="bg-white">Blanc</Button>\n<Button variant="link">Lien</Button>\n<Button disabled={true}>Désactivé</Button>`}
        />

    <Section
        title="Tailles"
        description="Boutons classés par taille, du plus petit au plus grand."
        previewContent={
            <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" dataId={'small-button'}>Petit</Button>
                <Button dataId={'default-button'}>Par Défaut</Button>
                <Button size="lg" dataId={'large-button'}>Grand</Button>
                <Button size="icon" dataId={'icon-button'}>
                    <ThumbsDownIcon className="h-4 w-4" />
                </Button>
            </div>
        }
        htmlContent={`<Button size="sm">Petit</Button>\n<Button>Par Défaut</Button>\n<Button size="lg">Grand</Button>\n<Button size="icon">Icône</Button>`}
    />
</div>
);
}
