"use server"

import { revalidatePath } from "../../../node_modules/next/cache"
import { authOptions } from "../_lib/auth"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"

interface CreateBookingParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }

  try {
    await db.booking.create({
      data: { ...params, userId: (user.user as any).id },
    })

    revalidatePath("/barbershops/[id]")
    revalidatePath("/bookings")
  } catch (error) {
    console.error("Error creating booking:", error)
    throw new Error("Erro ao criar a reserva")
  }
}
