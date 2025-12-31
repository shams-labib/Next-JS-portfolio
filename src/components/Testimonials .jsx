// components/CertificatesSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificates = [
  {
    id: 1,
    title: "A Career Strategist's Guide to Getting a Job",
    issuer: "LinkedIn Learning",
    date: "December 15, 2025",
    image: "/certificates/career-strategist-linkedin.jpg",
    description: "Career strategy & job search fundamentals",
  },
  {
    id: 2,
    title: "Engage the Likability Effect in the Job Search",
    issuer: "LinkedIn Learning",
    date: "December 18, 2025",
    image: "/certificates/likability-effect-linkedin.jpg",
    description: "Building professional likability & influence",
  },
  {
    id: 3,
    title: "Video Interview Tips",
    issuer: "LinkedIn Learning",
    date: "December 22, 2025",
    image: "/certificates/video-interview-tips-linkedin.jpg",
    description: "Mastering virtual interviews",
  },
  {
    id: 4,
    title: "Data Visualization with Python",
    issuer: "IBM • Coursera",
    date: "April 22, 2025",
    image: "/certificates/data-viz-python-ibm.jpg",
    description: "Creating insightful data visualizations using Python",
  },
];

export default function CertificatesSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-base-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Certificates
            </h2>
          </div>
          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Professional achievements and learning milestones that showcase my
            expertise and dedication
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={certificates.length > 3}
            onSwiper={setSwiperInstance}
            className="!pb-14"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 h-full group">
                  <figure className="relative pt-[75%] overflow-hidden rounded-t-xl">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </figure>

                  <div className="card-body p-6">
                    <h3 className="card-title text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-3 text-sm">
                      <div className="badge badge-primary badge-outline">
                        {cert.issuer}
                      </div>
                    </div>

                    <p className="text-sm text-base-content/70 mt-3">
                      {cert.date}
                    </p>

                    <p className="text-sm text-base-content/60 mt-4 line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button
            className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 btn btn-circle btn-lg bg-base-100 shadow-xl border-none hover:bg-primary hover:text-white transition-all"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 btn btn-circle btn-lg bg-base-100 shadow-xl border-none hover:bg-primary hover:text-white transition-all"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
