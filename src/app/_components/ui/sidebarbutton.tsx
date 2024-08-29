"use client"

import { quickSearchOptions } from "@/app/constants/search"
import React from "react"
import Link from "next/link"
import { Button } from "./button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import Image from "next/image"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "./dialog"

import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./avatar"
import SingInDialog from "../sign_in_dialog"

const SidebarSheet = () => {
  const { data } = useSession()

  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-5 border-b border-solid py-5">
        {data?.user ? (
          <div>
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <SingInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
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
          <SheetClose key={option.title} asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  height={18}
                  width={18}
                />
                {option.title}
              </Link>
            </Button>
          </SheetClose>
        ))}
      </div>
      {data?.user && (
        <div className="flex flex-col gap-2 py-5">
          <Button
            variant="ghost"
            className="justify-stars gap-2"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      )}
      <SheetHeader></SheetHeader>
    </SheetContent>
  )
}
export default SidebarSheet
