import Section from "@/app/component/section";
import Ping from "@/components/ui/ping";

// Exemple de données pour différentes configurations du composant Ping
const pingExamples = [
    {
        title: "Ping Actif",
        description: "Affiche un ping animé pour signaler une activité.",
        pingActive: true,
        isActive: true,
        hasPrerequisite: false,
    },
    {
        title: "Ping avec Prérequis",
        description: "Indique que des prérequis sont nécessaires (affiché en jaune).",
        pingActive: false,
        isActive: true,
        hasPrerequisite: true,
    },
    {
        title: "Inactif",
        description: "Affichage de l'icône inactif avec une faible opacité.",
        pingActive: false,
        isActive: false,
        hasPrerequisite: false,
    },
    {
        title: "Actif sans Ping",
        description: "L'élément est actif, mais sans animation de ping.",
        pingActive: false,
        isActive: true,
        hasPrerequisite: false,
    },
];

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-blue-600 mb-2">Composants</h2>
            <h1 className="text-3xl font-bold mb-4">Ping</h1>
            <p className="text-gray-600 mb-8">
                Le composant <code>Ping</code> est utilisé pour signaler visuellement un état, tel qu'une activité en cours ou
                des prérequis manquants, via un cercle animé ou un changement de couleur.
            </p>

            {/* Exemple de présentation du composant Ping */}
            {pingExamples.map((example, index) => (
                <Section
                    key={index}
                    title={example.title}
                    description={example.description}
                    previewContent={
                        <div className="flex items-center gap-4">
                            <Ping
                                pingActive={example.pingActive}
                                isActive={example.isActive}
                                hasPrerequisite={example.hasPrerequisite}
                            />
                        </div>
                    }
                    htmlContent={`<Ping pingActive={${example.pingActive}} isActive={${example.isActive}} hasPrerequisite={${example.hasPrerequisite}} />`}
                />
            ))}

            <Section
                title="Explication du Composant"
                description="Voici une explication détaillée sur le fonctionnement du composant Ping."
                previewContent={
                    <p className="text-gray-600">
                        Le composant <code>Ping</code> prend trois propriétés principales :
                        <ul className="list-disc ml-6 mt-2">
                            <li>
                                <strong>pingActive</strong> : Si vrai, un cercle animé "ping" sera affiché pour indiquer une activité.
                            </li>
                            <li>
                                <strong>isActive</strong> : Indique si l'élément est actif, affectant sa couleur.
                            </li>
                            <li>
                                <strong>hasPrerequisite</strong> : Si vrai, le cercle devient jaune pour signaler qu'il y a des
                                prérequis manquants ou nécessaires.
                            </li>
                        </ul>
                    </p>
                }
                htmlContent={`<Ping pingActive={false} isActive={true} hasPrerequisite={true} />`}
            />
        </div>
    );
}
