import { quickSearchOptions } from "@/app/constants/search"
import React from "react"
import Link from "next/link"
import { Avatar, AvatarImage } from "./avatar"
import { Button } from "./button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import Image from "next/image"
import { HomeIcon } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import { LogOutIcon } from "lucide-react"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-5 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg" />
        </Avatar>
      </div>

      <div>
        <p className="font-bold">Eduardo Drolhe</p>
        <p className="text-xs">edudrolhe@gmail.com</p>
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
