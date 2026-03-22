"use client"

import Image from "next/image";
import Logo from "@/src/assets/images/logos/logo.svg";
import LocationBorder from "@/src/assets/images/icons/location-border.svg";
import Building4 from "@/src/assets/images/icons/building-4.svg";
import Sls from "@/src/assets/images/thumbnails/sls-amg.png";
import Flash from "@/src/assets/images/icons/flash.svg";
import Star from "@/src/assets/images/icons/star.svg";
import PistaSide from "@/src/assets/images/thumbnails/pista-side.png";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div id="Top-Bar" className="flex items-center justify-between px-4 mt-[60px] z-10">
        <Image src={Logo} className="flex shrink-0 w-[126px]" alt="icon" />
        <div className="flex items-center justify-end gap-3">
          <div className="text-right">
            <p className="text-sm leading-[21px] text-alpina-grey">Your Location</p>
            <p className="font-semibold">Indonesia</p>
          </div>
          <Image src={LocationBorder} className="w-10 h-10 flex shrink-0" alt="icon" />
        </div>
      </div>
      <section id="Category" className="flex flex-col py-5 gap-3 bg-[#F9FAFB] mt-[30px]">
        <h2 className="font-bold px-4">Our Category</h2>
        <div className="swiper-categories w-full overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide !w-fit p-[1px] cursor-pointer" onClick={() => router.push(`/category/1`)}>
              <div className="flex items-center w-fit rounded-full text-nowrap p-[10px_14px] gap-[10px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
                <Image src={Building4} className="w-6 h-6" alt="icon" />
                <p className="font-bold text-sm leading-[21px]">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Popular" className="flex flex-col gap-3 mt-[30px]">
        <h2 className="font-bold px-4">Start Your Adventure</h2>
        <div className="swiper-popular w-full overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide !w-fit p-[1px] cursor-pointer" onClick={() => router.push(`/browse/1`)}>
              <div className="flex flex-col w-[240px] shrink-0 overflow-hidden rounded-[20px] border border-[#EFF2F7] p-5 gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
                <div className="relative">
                  <p className="absolute top-0 left-0 w-fit rounded-full py-1 px-2 bg-alpina-blue font-bold text-[10px] leading-[15px] text-white">POPULAR</p>
                  <div className="flex h-[140px] shrink-0 rounded-[50px] overflow-hidden">
                    <Image src={Sls} className="w-full h-full object-contain" alt="thumbnail" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">SLS AMG Blue</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">Rp 51.250.000</p>
                </div>
                <hr className="border-[#EFF2F7]" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">450kmh</p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Newest" className="flex flex-col gap-3 px-4 mt-[30px]">
        <h2 className="font-bold">Newest Arrival</h2>
        <div className="flex flex-col gap-3">
          <a href="details.html" className="card">
            <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
              <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
                <Image src={PistaSide} className="w-full h-full object-contain" alt="thumbnail" />
              </div>
              <div className="flex flex-col gap-[14px] w-full">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">488 Pista Spyder White</h3>
                  <p className="font-semibold text-sm leading-[21px] text-alpina-blue">Rp 51.250.000</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[2px]">
                    <Image src={Flash} className="w-5 h-5" alt="icon" />
                    <p className="font-semibold text-sm leading-[21px]">450kmh</p>
                  </div>
                  <div className="flex items-center gap-[2px] justify-end">
                    <p className="font-semibold text-sm leading-[21px]">4/5</p>
                    <Image src={Star} className="w-5 h-5" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
