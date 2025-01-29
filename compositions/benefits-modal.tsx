import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckIcon } from "@radix-ui/react-icons";

export function BenefitsModal() {
  const [open, setOpen] = useState(false);

  return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {"Modal des avantages"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {"Utilisez les modales des avantages pour mettre en avant les atouts d'un produit ou d'une fonctionnalité, encourageant l'engagement des utilisateurs."}
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button dataId={"see-pros-button"} variant="outline">{"Voir les avantages"}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{"Passez à la version Pro"}</DialogTitle>
              <DialogDescription>
                {"Débloquez ces avantages incroyables en passant à notre plan Pro."}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <ul className="space-y-2">
                {[
                  "Projets illimités",
                  "Support prioritaire",
                  "Analyses avancées",
                  "Intégrations personnalisées",
                ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                ))}
              </ul>
            </div>
            <DialogFooter>
              <Button dataId={'submit-button'} type="submit">{"Passer à l'offre Pro"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
  );
}
