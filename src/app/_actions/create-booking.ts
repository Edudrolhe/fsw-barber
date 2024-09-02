"use server"

import { revalidatePath } from "../../../node_modules/next/cache"
import { authOptions } from "../_lib/auth"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"

interface CreateBookingParams {
  userId: string
  serviceId: string
  data: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }
  await db.booking.create({
    data: params,
  })

  revalidatePath("/bookings")
}
