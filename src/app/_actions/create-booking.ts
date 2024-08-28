"use server"

import { revalidatePath } from "../../../node_modules/next/cache"
import { db } from "../_lib/prisma"

interface CreateBookingParams {
  userId: string
  serviceId: string
  data: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })

  revalidatePath("/bookings")
}
