import React from "react"
import { Button } from "./button"
import { Sheet, SheetTrigger } from "./sheet"
import { MenuIcon } from "lucide-react"

;<Sheet>
  <SheetTrigger asChild>
    <Button size="icon" variant="outline">
      <MenuIcon />
    </Button>
  </SheetTrigger>
</Sheet>
