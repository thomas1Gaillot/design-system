'use client'
import {EmptyStateExplainSection} from "@/compositions/empty-state";
import {InlineMessage} from "@/compositions/inline-message";
import {ModalDialog} from "@/compositions/modal-dialog";
import {OnboardingCard} from "@/compositions/onboarding-card";
import {SectionMessage} from "@/compositions/section-message";
import {Banner} from "@/compositions/banner";
import {ToastSection} from "@/compositions/toast-section";

export default function TextualComponentPage() {
    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{"Composant textuel"}</h2>
            <p className="text-gray-600 dark:text-gray-300 my-6">
                {"Les utilisateurs font attention à la manière dont le produit leur parle. En posant dès le départ les bases de notre style rédactionnel, nous assurons une grammaire uniforme et un langage orienté vers l’action."}
            </p>
            <div className="space-y-8">
                <EmptyStateExplainSection/>
                <Banner/>
                <ModalDialog/>
                <SectionMessage/>
                <ToastSection/>
                <InlineMessage/>
                <OnboardingCard/>
            </div>
        </>
    );
}