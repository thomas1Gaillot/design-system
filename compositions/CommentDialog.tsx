"use client"

import {useState} from "react"
import {SendIcon, SlackIcon} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function CommentDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const handleSubmit = () => {
        const slackUrl = `slack://channel?team=TBGG77SDV&id=CJ0DNDXJR`
        window.location.href = slackUrl
        setIsOpen(false)
    }


    return (
        <>
            <div className="fixed bottom-4 right-4 z-50">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button
                            dataId={'open-comment-dialog-btn'}
                            size={"sm"}
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                            <SendIcon className="h-5 w-5"/>
                            <span className="font-semibold">Contribuer</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Contribuer</DialogTitle>
                            <DialogDescription>Vous voulez proposer une idée ou une modification ? </DialogDescription>
                            <DialogDescription>Laisser un commentaire sur le channel #tech_ui-ux pour
                                discuter.</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <div className={'flex-col flex items-end gap-1'}>
                                <Button
                                    dataId={'submit-comment-btn'}
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white"
                                >
                                    Ouvrir Slack <SlackIcon className={'size-4 ml-2'}/>
                                </Button>
                                <p className={"text-gray-400 text-xs text-end"}>{"redirection vers le channel #tech_ui-ux."}</p>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}

