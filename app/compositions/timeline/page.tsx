'use client'
import {Button} from "@/components/ui/button";
import Section from "@/app/component/section";
import {ScrollTextIcon, UserSquareIcon} from "lucide-react";
import {TimelineStepType} from "@/compositions/TimelineStep";
import Timeline from "@/compositions/Timeline";

const timelineSteps: TimelineStepType[] = [
    // 1. Étape active avec Ping et sans prérequis
    {
        title: "Active Step",
        description: "Cette étape est active et en cours. Elle comporte un bouton actif sans prérequis.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                {"S'y rendre"}
            </Button>
        ),
        ping: true,   // La bulle de l'étape est en mode "ping"
        active: true, // Étape active
        prerequisites: [], // Pas de prérequis
    },

    // 2. Étape inactive sans Ping ni prérequis
    {
        title: 'Étape en attente',
        description: "Cette étape est en attente. Aucune action n'est requise pour le moment.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                {"S'y rendre"}
            </Button>
        ),
        ping: false,  // Pas de "ping" pour cette étape
        active: false, // Étape inactive
        prerequisites: [], // Pas de prérequis
    },

    // 3. Étape avec prérequis non terminés
    {
        title: "Envoyer les documents",
        description: "Cette étape contient des prérequis qui doivent être complétés avant de continuer.",
        prerequisites: [
            { text: 'Statuts PMO', icon: UserSquareIcon, done: false }, // Prérequis non terminé
            { text: "Bulletin d'adhésion", icon: ScrollTextIcon, done: false }, // Prérequis non terminé
        ],
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                {"S'y rendre"}
            </Button>
        ),
        ping: false,  // Pas de "ping"
        active: false, // Étape inactive
    },

    // 4. Étape inactive sans Ping avec tous les prérequis terminés
    {
        title: "Signer les documents",
        description: "Les documents ont été envoyés et sont en attente de signature.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                {"S'y rendre"}
            </Button>
        ),
        ping: false, // Pas de "ping"
        active: false, // Étape inactive
        prerequisites: [], // Pas de prérequis
    },
];


export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-sm font-semibold text-red-500 mb-2">Composition</h2>
            <h1 className="text-3xl font-bold mb-4">Timeline</h1>
            <p className="text-gray-600 mb-8">
                Browse and customize beautiful Tailwind CSS buttons in various styles, states, and sizes. Find active,
                disabled, pill, icon, and other free button examples.
            </p>

            <Section
                title="Variants"
                description="Explore the most commonly used button styles such as solid, outline, ghost, soft, link, and more."
                previewContent={
                    <div className="flex flex-col gap-4 bg-white p-4">
                       <Timeline timelineSteps={timelineSteps} headTitle={"Head Title"} footerTitle={"Footer Title"}/>
                    </div>
                }
                htmlContent={[`<Timeline timelineSteps={timelineSteps} headTitle={"Head Title"} footerTitle={"Footer Title"}/>`, `const timelineSteps: TimelineStepType[] = [
    // 1. Étape active avec Ping et sans prérequis
    {
        title: "Active Step",
        description: "Cette étape est active et en cours. Elle comporte un bouton actif sans prérequis.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                {"S'y rendre"}
            </Button>
        ),
        ping: true,   // La bulle de l'étape est en mode "ping"
        active: true, // Étape active
        prerequisites: [], // Pas de prérequis
    },

    // 2. Étape inactive sans Ping ni prérequis
    {
        title: 'Étape en attente',
        description: "Cette étape est en attente. Aucune action n'est requise pour le moment.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                Pré-intégrations
            </Button>
        ),
        ping: false,  // Pas de "ping" pour cette étape
        active: false, // Étape inactive
        prerequisites: [], // Pas de prérequis
    },

    // 3. Étape avec prérequis non terminés
    {
        title: "Envoyer les documents",
        description: "Cette étape contient des prérequis qui doivent être complétés avant de continuer.",
        prerequisites: [
            { text: 'Statuts PMO', icon: UserSquareIcon, done: false }, // Prérequis non terminé
            { text: "Bulletin d'adhésion", icon: ScrollTextIcon, done: false }, // Prérequis non terminé
        ],
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                Pré-intégrations
            </Button>
        ),
        ping: false,  // Pas de "ping"
        active: false, // Étape inactive
    },

    // 4. Étape inactive sans Ping avec tous les prérequis terminés
    {
        title: "Signer les documents",
        description: "Les documents ont été envoyés et sont en attente de signature.",
        Button: ({ disabled }: { disabled: boolean }) => (
            <Button
                disabled={disabled}
                variant="outline"
                className="mt-2 mb-6"
                size={'sm'}
            >
                Pré-intégrations
            </Button>
        ),
        ping: false, // Pas de "ping"
        active: false, // Étape inactive
        prerequisites: [], // Pas de prérequis
    },
];
`]}
            />
        </div>
    );
}
