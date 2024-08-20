import React from "react"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { MenuIcon } from "lucide-react"
import { HomeIcon } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import { LogOutIcon } from "lucide-react"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"
import { quickSearchOptions } from "@/app/constants/search"
import { Avatar, AvatarImage } from "./avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/Logo.png" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
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
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
