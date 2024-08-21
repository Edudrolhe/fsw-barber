import { quickSearchOptions } from "@/app/constants/search"
import React from "react"
import Link from "next/link"

import { Button } from "./button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import Image from "next/image"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-5 border-b border-solid py-5">
        <h2 className="font-bold">Olá, faça seu login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça seu login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando seu senha do google
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-1 font-semibold">
              <Image
                alt="Fazer login com o Google"
                src="/Google.svg"
                width={18}
                height={18}
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-stars gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
      <SheetHeader></SheetHeader>
    </SheetContent>
  )
}
export default SidebarSheet
