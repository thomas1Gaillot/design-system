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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ModalDialog() {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {"Modale"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {"Les modales sont parfaites pour attirer l'attention de l'utilisateur sur des actions à court termes."}
        </p>
        <div className={"flex gap-4 items-center"}>
        {/* Cas d'usage typique - Modification du profil */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button dataId={'open-modal-btn'} variant="outline">{"Editer le profil"}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{"Modifier le profil"}</DialogTitle>
              <DialogDescription>
                {"Apportez des modifications à votre profil ici. Cliquez sur enregistrer lorsque vous avez terminé."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  {"Nom"}
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  {"Nom d'utilisateur"}
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button dataId={'save-button'} type="submit">{"Sauvegarder les modifications"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Cas d'usage - Erreur à éviter - Confirmation de suppression */}
        <Dialog open={openError} onOpenChange={setOpenError}>
          <DialogTrigger asChild>
            <Button dataId={'open-error-modal'} variant="destructive" >{"Supprimer le compte"}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{"Êtes-vous sûr ?"}</DialogTitle>
              <DialogDescription>
                {"Êtes-vous sûr de vouloir supprimer définitivement cet élément ? Cette action est irréversible."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid  gap-4">
                <Label htmlFor="confirmation">
                  {"Ecrire 'CONFIRMER' pour continuer"}
                </Label>
                <Input id="confirmation" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button dataId={'delete'} variant="destructive" className="mr-2">{"Supprimer"}</Button>
              <Button dataId={'cancel-deletion'} variant="outline" onClick={() => setOpenError(false)}>{"Annuler"}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>

        {/* Liste des bonnes pratiques et erreurs à éviter */}
        <div className={"grid gap-1 text-sm mt-8"}>
          <h3 className="font-semibold text-gray-900 dark:text-white">{"Bonnes pratiques"}</h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>{"✅ Utilisez les modales pour les actions critiques ou à forte conséquence (ex : suppression)"}</li>
            <li>{"✅ Affichez une description claire de l'action dans la modale"}</li>
            <li>{"✅ Utilisez des modales pour des tâches courtes et spécifiques"}</li>
          </ul>

          <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Erreurs à éviter"}</h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>{"❌ Ne surchargez pas la modale avec trop d'informations. Utilisez  <Tabs/> ou <Sheet/> pour de longs dialogues"}</li>
            <li>{"❌ Évitez d'utiliser des modales pour des actions triviales (ex : confirmations de lecture)"}</li>
          </ul>
          <h3 className="font-semibold text-gray-900 dark:text-white mt-4">{"Moments appropriés pour utiliser une modale"}</h3>
          <ul className="text-gray-600 dark:text-gray-300">
            <li>{"▶️ Pour réduire la charge mentale de l'utilisateur (ex : cacher l'edition du profil dans une modale)."}</li>
            <li>{"▶️ Lorsque vous avez besoin de capturer une action utilisateur immédiate, comme la confirmation d'une action importante"}</li>
            <li>{"▶️ Pour demander des informations importantes, comme la confirmation de la suppression"}</li>
            <li>{"▶️ Pour concentrer l'attention sur des étapes spécifiques d'un processus (ex : étapes de paiement)"}</li>
          </ul>
        </div>
      </div>
  );
}
