import { redirect } from "next/navigation";

export const metadata = {
  title: "Book a conversation",
  description: "Choose a time to talk with MACS Digital Media.",
};

export default function BookPage() {
  const bookingUrl =
    process.env.BOOKING_URL ??
    process.env.NEXT_PUBLIC_BOOKING_URL ??
    "https://book.macsdigitalmedia.com";

  redirect(bookingUrl);
}
