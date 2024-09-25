import { notFound } from "../../../node_modules/next/navigation"
import Header from "../_components/ui/header"
import { authOptions } from "../_lib/auth"
import { getServerSession } from "next-auth"
import { db } from "../_lib/prisma"
import BookingItem from "../_components/ui/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return notFound()
  }

  const confirmedbookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  const concludedbookings = await db.booking.findMany({
    where: {
      userId: (session?.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
  })
  return (
    <>
      <Header />
      <div className="p=5 space-y-3">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Confirmados
        </h2>
        {confirmedbookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>
        {concludedbookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  )
}
export default Bookings
