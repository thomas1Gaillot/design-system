'use client'
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export default function AccessibilityPage() {
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({})

    const accessibilityChecklist = [
        "Tester le site en mobile, desktop et tablette avec des outils comme Chrome DevTools.",
        "Éviter le vert et le rouge ensemble et utiliser un contraste suffisant.",
        "Utiliser une hiérarchie correcte des titres (<h1>, <h2>, <h3>, etc.).",
        "Ajouter des textes alternatifs (`alt`) descriptifs aux images.",
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
            <div className="flex sm:flex-row flex-col items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Accessibilité</h2>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Checklist</span>
                    <Progress value={progress} className="w-32"/>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{progress}%</span>
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
                {"Pendant la conception ou les tests, assurez-vous de vérifier ces points pour garantir l'accessibilité :"}
            </p>

            <div className="space-y-1">
                {accessibilityChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 py-1 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <Checkbox id={`item-${index}`} checked={checkedItems[index] || false} onCheckedChange={() => handleCheckboxChange(index)} className="mt-1"/>
                        <label htmlFor={`item-${index}`} className="text-gray-700 dark:text-gray-200 cursor-pointer">
                            {item}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}