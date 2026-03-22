"use client"

import Image from "next/image";
import Call from "@/src/assets/images/icons/call.svg";
import NoteFavoriteBlue from "@/src/assets/images/icons/note-favorite-blue.svg";
import NoteFavoriteBlack from "@/src/assets/images/icons/note-favorite-black.svg";
import { useRouter } from "next/navigation";

export default function CheckBookingPage() {
  const router = useRouter();

  return (
    <div id="main-content" className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white">
      <form action="booking-details.html" className="flex flex-col items-center h-fit w-[340px] gap-5 m-auto">
        <Image src={NoteFavoriteBlue} className="w-20 h-20" alt="icon" />
        <h1 className="font-bold text-2xl leading-9">Check My Booking</h1>
        <label className="group flex items-center w-full h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
          <Image src={NoteFavoriteBlack} className="w-6 h-6 flex shrink-0" alt="icon" />
          <div className="w-full flex flex-col-reverse">
            <input type="text" name="fullName" className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey" placeholder="Booking ID" />
            <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">Booking ID</p>
          </div>
        </label>
        <label className="group flex items-center w-full h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
          <Image src={Call} className="w-6 h-6 flex shrink-0" alt="icon" />
          <div className="w-full flex flex-col-reverse">
            <input type="tel" name="phone" className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey" placeholder="Phone Number" />
            <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">Phone Number</p>
          </div>
        </label>
        <button type="submit" className="w-full rounded-full p-[14px_24px] bg-alpina-blue text-center font-bold text-white">
          Check My Booking
        </button>
      </form>
    </div>
  );
}
