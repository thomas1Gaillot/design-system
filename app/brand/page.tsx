"use client"

import {useState} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {ChevronDown, Eye, FileStack, MessageSquare, Palette, Type} from "lucide-react"
import {cn} from "@/lib/utils"
import {AnimatePresence, motion} from "framer-motion"
import {Button} from "@/components/ui/button";

export default function BrandPage() {
    const [expandedSection, setExpandedSection] = useState<string | null>("vision")

    const brandSections = [
        {
            id: "vision",
            title: "Vision",
            icon: <Eye className="w-5 h-5"/>,
            description: "Pourquoi nous existons, quelles sont nos valeurs et comment elles guideront l'avenir de notre produit.",
            content: {
                mission:
                    "Permettre à toutes et tous de contribuer à la transition énergétique dans un esprit de justice sociale, dans un cadre bienveillant.",
                values: [
                    {
                        title: "Centré sur l'utilisateur",
                        description: "Chaque décision commence par comprendre et répondre aux besoins des utilisateurs.",
                    },
                    {
                        title: "Qualité",
                        description:
                            "Concevoir des produits de qualité qui répondent aux besoins de nos utilisateurs et qui sont agréables à utiliser.",
                    },
                    {
                        title: "Justice sociale",
                        description: "Créer un environnement inclusif et équitable pour toutes et tous.",
                    },
                ],
                futureGoals: [
                    "Scaler nos produits pour répondre aux besoins de milliers d'utilisateurs.",
                    "Harmoniser notre design system pour une expérience utilisateur cohérente.",
                ],
            },
        },
        {
            id: "design-principles",
            title: "Principes de design",
            icon: <Palette className="w-5 h-5"/>,
            description:
                "Les principes qui guident votre approche du design et aident à la prise de décision au quotidien.",
            content: {
                personality: "On privilégie toujours la simplicité et la clarté pour rendre l'expérience utilisateur plus agréable.",
                principles: [
                    {
                        title: "Clarté❤️ vs ingéniosité 👎",
                        description:
                            "Privilégier des solutions claires et directes plutôt que complexes. Chaque élément doit avoir un but.",
                    },
                    {
                        title: "Cohérent❤️ vs unique 👎",
                        description:
                            "Maintenir une cohérence visuelle et fonctionnelle pour renforcer la confiance et la familiarité.",
                    },
                    {
                        title: "Accessible️❤️ vs exclusif 👎",
                        description: "Penser à l'accessibilité dès le départ, et non après coup. Créer des designs mobile-first par défaut.",
                    },
                    {
                        title: "... ",
                        description: "...",
                    },
                ],
            },
        },
        {
            id: "tone-of-voice",
            title: "Ton de voix",
            icon: <MessageSquare className="w-5 h-5"/>,
            description:
                "Un ton de voix clair définit la façon dont vous communiquez avec votre audience tout au long de son parcours.",
            content: {
                personality: "Ton clair, professionnel, bienveillant.",
                guidelines: [
                    {
                        context: "Interface produit",
                        tone: "Clair et concis, avec un objectif d’orientation efficace",
                        examples: [
                            "✅ 'Choisissez votre type de projet pour commencer'",
                            "❌ 'Salut ! Quel type de projet génial voulez-vous créer aujourd’hui ?'",
                        ],
                    },
                    {
                        context: "Messages d’erreur",
                        tone: "Utile et orienté solution, sans jamais blâmer l’utilisateur",
                        examples: [
                            "✅ 'Impossible d’enregistrer les modifications. Réessayez ou contactez le support.'",
                            "❌ 'Erreur 404 : Page non trouvée'",
                        ],
                    },
                    {
                        context: "Matériel marketing",
                        tone: "Enthousiaste et inspirant, tout en restant professionnel",
                        examples: [
                            "✅ 'Transformez vos idées en réalité grâce à nos outils puissants'",
                            "❌ 'Le meilleur logiciel de design jamais créé !'",
                        ],
                    },
                ],
            },
        },
        {
            id: "terminology",
            title: "Terminologie",
            icon: <Type className="w-5 h-5"/>,
            description:
                "Définissez les termes standards à utiliser pour unifier votre communication et accélérer le processus de design.",
            content: {
                commonTerms: [
                    {
                        term: "Espace de travail",
                        definition: "Un environnement collaboratif où les équipes peuvent organiser et gérer leurs projets",
                        usage: "À utiliser à la place de 'tableau de bord' ou 'accueil'",
                    },
                    {
                        term: "Composant",
                        definition: "Un élément de design réutilisable, personnalisable et combinable avec d’autres",
                        usage: "À utiliser à la place de 'widget' ou 'module'",
                    },
                    {
                        term: "Collection",
                        definition: "Un groupe d’éléments ou de ressources organisés ensemble",
                        usage: "À utiliser à la place de 'dossier' ou 'groupe'",
                    },
                ],
                avoidTerms: ["Maître/Esclave", "Liste blanche/Liste noire", "Tuer", "Fictif"],
            },
        },
        {
            id: "brand-assets",
            title: "Ressources visuelles",
            icon: <FileStack className="w-5 h-5"/>,
            description:
                "L’utilisation d’un ensemble cohérent d'illustrations et de ressources visuelles unifie l’expérience utilisateur sur vos produits et campagnes marketing.",
            content: {

                typography: {
                    primary: "Figtree",
                    usage: "Figtree est conçue pour allier lisibilité, modernité et polyvalence.\n Avec son design épuré et légèrement arrondie, elle est adaptée à de nombreux usages.",
                },
                logo: {
                    primary: 'lucide.dev',
                    url: "https://lucide.dev/icons",
                    usage: "Lucide a une grande collection d'icône. Les icônes sont toutes en SVG ou importable par librairie. Il n'y a que des type outline, ce qui est un parti pris permettant l'homogénéité.",
                },
            },
        },
    ];

    return (<>
            {/* Hero SectionWithHtmlCode */}
            <h1 className="text-4xl font-bold tracking-tight mb-4">Identité de Marque</h1>
            <p className=" text-muted-foreground max-w-3xl">
                {"                L'identité de marque guide chacune de nos décisions lors de la création de nouveaux produits ou fonctionnalités. Une bonne marque est bien plus qu'un nom et un logo. Ce sont les valeurs qui définissent notre identité unique et ce qui nous différencie des autres.\n"}            </p>


            {/* Brand Sections */}
            <div className="space-y-6">
                {brandSections.map((section) => (
                    <Card key={section.id} className="overflow-hidden">
                        <button
                            onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                            className="w-full"
                        >
                            <div className="p-6 flex items-start justify-between hover:bg-muted/50 transition-colors">
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="p-2 bg-purple-500/10 text-purple-600 rounded-lg">{section.icon}</div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-semibold">{section.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={cn(
                                        "w-5 h-5 transition-transform duration-200",
                                        expandedSection === section.id ? "transform rotate-180" : "",
                                    )}
                                />
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {expandedSection === section.id && (
                                <motion.div
                                    initial={{height: 0}}
                                    animate={{height: "auto"}}
                                    exit={{height: 0}}
                                    transition={{duration: 0.2}}
                                    className="overflow-hidden"
                                >
                                    <CardContent className="p-6 border-t">
                                        {section.id === "vision" && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="font-semibold mb-2">Nos Missions</h4>
                                                    <p className="text-muted-foreground">{section.content.mission}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-4">Nos Valeurs</h4>
                                                    <div className="grid gap-4 md:grid-cols-3">
                                                        {section?.content?.values?.map((value, index) => (
                                                            <div key={index} className="p-4 rounded-lg bg-muted">
                                                                <h5 className="font-medium mb-2">{value.title}</h5>
                                                                <p className="text-sm text-muted-foreground">{value.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Missions futures</h4>
                                                    <ul className="list-disc pl-4">
                                                        {section?.content?.futureGoals?.map((goal, index) => (
                                                            <li key={index}
                                                                className="text-sm text-muted-foreground">{goal}</li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>
                                        )}

                                        {section.id === "design-principles" && (
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-muted-foreground">{section.content.personality}</p>
                                                </div>
                                                <div className="grid gap-6 md:grid-cols-2">
                                                    {section?.content?.principles?.map((principle, index) => (
                                                        <div key={index} className="p-4 rounded-lg bg-muted">
                                                            <h4 className="font-semibold mb-2">{principle.title}</h4>
                                                            <p className="text-sm text-muted-foreground">{principle.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.id === "tone-of-voice" && (
                                            <div className="space-y-6">
                                                <div>
                                                    <p className="text-muted-foreground">{section.content.personality}</p>
                                                </div>
                                                <div className="space-y-4">
                                                    {section?.content?.guidelines?.map((guideline, index) => (
                                                        <div key={index} className="p-4 rounded-lg bg-muted">
                                                            <h5 className="font-medium mb-2">{guideline.context}</h5>
                                                            <p className="text-sm text-muted-foreground mb-3">{guideline.tone}</p>
                                                            <div className="space-y-2">
                                                                {guideline.examples.map((example, i) => (
                                                                    <p key={i} className="text-sm">
                                                                        {example}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {section.id === "terminology" && (
                                            <div className="space-y-6">
                                                <div className="grid gap-4">
                                                    {section?.content?.commonTerms?.map((term, index) => (
                                                        <div key={index} className="p-4 rounded-lg bg-muted">
                                                            <h4 className="font-semibold mb-1">{term.term}</h4>
                                                            <p className="text-sm text-muted-foreground mb-2">{term.definition}</p>
                                                            <p className="text-sm italic">Usage: {term.usage}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-3">Terms to Avoid</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {section?.content?.avoidTerms?.map((term, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-destructive/10 text-destructive rounded text-sm"
                                                            >
                                {term}
                              </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.id === "brand-assets" && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="font-semibold mb-4">Typography</h4>
                                                    <div className="p-4 rounded-lg bg-muted">
                                                        <div className="grid gap-2">
                                                            <div>
                                                                <h5 className="font-medium">Mon énergie collective</h5>
                                                                <p className="text-sm text-muted-foreground">{section?.content?.typography?.primary}</p>
                                                            </div>
                                                            <div className="mt-2">
                                                                <p className="text-sm text-muted-foreground">{section?.content?.typography?.usage}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-4">Icônes</h4>
                                                    <div className="p-4 rounded-lg bg-muted">
                                                        <div className="grid gap-2">
                                                            <div>
                                                                <h5 className="font-medium">Librairie</h5>
                                                                <p className="text-sm text-muted-foreground">{section?.content?.logo?.primary}</p>
                                                            </div>
                                                            <div>
                                                                <h5 className="font-medium">Liens</h5>
                                                                <Button dataId={'brand-assets'}
                                                                        variant={'link'}
                                                                        className={"px-0"}
                                                                        onClick={() => window.open(section?.content?.logo?.url, '_blank')}>
                                                                    {section?.content?.logo?.url}
                                                                </Button>

                                                            </div>
                                                            <div>
                                                                <h5 className="font-medium">Utilisation</h5>
                                                                <p className="text-sm text-muted-foreground">{section?.content?.logo?.usage}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                ))}
            </div>

            {/* Collaboration SectionWithHtmlCode */}
            <div className="mt-12 text-center">

                <p className="text-sm text-muted-foreground">
                    Travaillons ensemble pour créer une marque forte et cohérente qui inspire et connecte.
                </p>
            </div>
        </>
    )
}

