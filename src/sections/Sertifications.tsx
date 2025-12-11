import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import sertif00 from "@/assets/images/sertif-00.jpg";
import sertif01 from "@/assets/images/sertif-01.jpg";
import sertif02 from "@/assets/images/sertif-02.jpg";
import sertif03 from "@/assets/images/sertif-03.jpg";
import sertif04 from "@/assets/images/sertif-04.jpg";
import sertif05 from "@/assets/images/sertif-05.jpg";
import sertif06 from "@/assets/images/sertif-06.jpg";
import sertif07 from "@/assets/images/sertif-07.jpg";
import sertif08 from "@/assets/images/sertif-08.jpg";
import sertif09 from "@/assets/images/sertif-09.jpg";
import sertif10 from "@/assets/images/sertif-10.jpg";
import sertif11 from "@/assets/images/sertif-11.jpg";
import sertif12 from "@/assets/images/sertif-12.jpg";
import sertif13 from "@/assets/images/sertif-13.jpg";
import sertif14 from "@/assets/images/sertif-14.jpg";
import sertif15 from "@/assets/images/sertif-15.jpg";
import sertif16 from "@/assets/images/sertif-16.jpg";
import sertif17 from "@/assets/images/sertif-17.jpg";
import sertif18 from "@/assets/images/sertif-18.jpg";
import sertif19 from "@/assets/images/sertif-19.jpg";

const certificates = [
  {
    title: "Belajar Dasar AI",
    description: "Issued by Dicoding Indonesia — 2025",
    image: sertif00,
  },
  {
    title: "Achieved Best Thesis Recognition for Final Project",
    description: "Issued by Computer Science Department, UCIC — 2025",
    image: sertif01,
  },
  {
    title: "Intro to Software Engineering",
    description: "Issued by RevoU — 2025",
    image: sertif02,
  },
  {
    title: "Magang di PT. Adma Digital Solusi — Mobile Engineer",
    description: "Issued by PT. Adma Digital Solusi — 2024",
    image: sertif03,
  },
  {
    title: "Magang Bersertifikat (MSIB)",
    description: "Issued by Kampus Merdeka — 2024",
    image: sertif04,
  },
  {
    title: "Bangkit Academy — Mobile Development",
    description: "Issued by Google, GoTo, Tokopedia, Traveloka — 2024",
    image: sertif05,
  },
  {
    title: "English for Business Communication — Score: 84",
    description: "Issued by The British Institute (TBI) — 2024",
    image: sertif06,
  },
  {
    title: "Belajar Pengembangan Aplikasi Android Intermediate",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif07,
  },
  {
    title: "Belajar Penerapan Machine Learning untuk Android",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif08,
  },
  {
    title: "Belajar Fundamental Aplikasi Android",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif09,
  },
  {
    title: "Belajar Prinsip Pemrograman SOLID",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif10,
  },
  {
    title: "Memulai Pemrograman dengan Kotlin",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif11,
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif12,
  },
  {
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif13,
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif14,
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    description: "Issued by Dicoding Indonesia — 2024",
    image: sertif15,
  },
  {
    title: "Certificate of Appreciation for Participation in Devfest Bandung",
    description: "Issued by Google Developer Groups Bandung — 2023",
    image: sertif19,
  },
  {
    title: "Wireframing in UI/UX Design",
    description: "Issued by MySkill.id — 2023",
    image: sertif16,
  },
  {
    title: "Data Science Introduction",
    description: "Issued by MySkill.id — 2023",
    image: sertif17,
  },
  {
    title: "Cyber-Smart: Learning, Protecting, and Thriving in the Digital Era",
    description: "Issued by Dicoding Indonesia — 2023",
    image: sertif18,
  },
];

export const SertificationsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications & Achievements"
          title="Recognitions That Strengthen My Professional Credibility"
          description="Here are my 19th certifications that reflect my continuous learning and professional growth in the tech field."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {certificates.map((certificate) => (
                  <Card
                    key={certificate.title}
                    className="max-w-xs md:max-w-md p-6 md:p-8 text-center flex flex-col items-center hover:-rotate-3 transition duration-300"
                  >
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />

                    <h3 className="font-semibold mt-4">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      {certificate.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
