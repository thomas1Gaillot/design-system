"use client"

import {useState} from "react"
import {Progress} from "@/components/ui/progress"
import {Checkbox} from "@/components/ui/checkbox"
import {EmptyState} from "@/compositions/empty-state";
import {BenefitsModal} from "@/compositions/benefits-modal";
import {InlineMessage} from "@/compositions/inline-message";
import {ModalDialog} from "@/compositions/modal-dialog";
import {OnboardingCard} from "@/compositions/onboarding-card";
import {SectionMessage} from "@/compositions/section-message";
import {Banner} from "@/compositions/banner";
import {ToastSection} from "@/compositions/toast-section";

export default function GuidelinePage() {
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

    const accessibilityChecklist = [
        "Tester le site en mobile, desktop et tablette avec des outils comme Chrome DevTools (ou CTRL + MAJ + M sur Firefox).",
        "Éviter le vert et le rouge ensemble (problématique pour 9% des hommes). Utiliser un contraste de couleurs suffisant (vérifiable avec WebAIM Contrast Checker : https://webaim.org/resources/contrastchecker/).",
        "Utiliser une hiérarchie correcte des titres : un seul <h1>, suivi de <h2>, <h3>, etc., sans sauter de niveau.",
        "Ajouter des textes alternatifs (`alt`) descriptifs aux images (ex : `alt='Photo d’un chat noir assis sur une chaise'`).",
        "... une autre idée ? "
    ]

    const progress = Math.round(
        (Object.values(checkedItems).filter(Boolean).length / accessibilityChecklist.length) * 100,
    )

    const handleCheckboxChange = (index: number) => {
        setCheckedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">Guide UX</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                    {
                        "Comprendre comment aborder les modèles UX courants nous permettra d'établir une approche et une expérience utilisateur cohérentes sur toutes les plateformes."
                    }
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <div className="flex sm:flex-row flex-col items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Accessibilité</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Checklist</span>
                        <Progress value={progress} className="w-32"/>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{progress}%</span>
                    </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {"Pendant la conception ou les tests, assurez-vous de vérifier les points suivants pour garantir l'accessibilité de votre design :"}
                </p>

                <div className="space-y-1">
                    {accessibilityChecklist.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 py-1 rounded-lg  text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <Checkbox
                                id={`item-${index}`}
                                checked={checkedItems[index] || false}
                                onCheckedChange={() => handleCheckboxChange(index)}
                                className="mt-1"
                            />
                            <label htmlFor={`item-${index}`}
                                   className="text-gray-700 dark:text-gray-200 cursor-pointer">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white/40 dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{"Composant textuel"}</h2>

                <p className="text-gray-600 dark:text-gray-300 my-6">
                    {"Les utilisateurs font attention à la manière dont le produit leur parle. En posant dès le départ les bases de notre style rédactionnel, nous assurons une grammaire uniforme, des choix stylistiques cohérents et un langage orienté vers l’action pour renforcer notre design."}
                </p>

                <div className="space-y-8">
                    <EmptyState/>
                    <Banner/>
                    <ModalDialog/>
                    <SectionMessage/>
                    <ToastSection/>
                    <InlineMessage/>
                    <OnboardingCard/>
                    <BenefitsModal/>

                </div>
            </div>

        </>
    )
}

