import React from "react"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { MenuIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetTrigger } from "./sheet"
import SidebarSheet from "./sidebarbutton"

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
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
