import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function OnboardingCard() {
  return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {"Carte de bienvenue"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {"Utilisez les cartes d'onboarding pour guider les nouveaux utilisateurs à travers les fonctionnalités clés ou les étapes de votre application."}
        </p>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{"Bienvenue dans notre application !"}</CardTitle>
            <CardDescription>{"Commençons avec ces 3 étapes faciles."}</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>{"Configurez votre profil"}</li>
              <li>{"Connectez vos comptes"}</li>
              <li>{"Explorez le tableau de bord"}</li>
            </ol>
          </CardContent>
          <CardFooter>
            <Button dataId={'start-onboarding-btn'} className="w-full">
              {"Commencer l'onboarding"}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
  );
}
