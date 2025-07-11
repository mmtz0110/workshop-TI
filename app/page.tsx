import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Kelompok 16</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hasil pengerjaan tugas Workshop Teknik Informatika 2025,
          Oleh kelompok 16.
        </p>
        <p>
          Kami mengerjakan tugas ini menggunakan template dari Nextfolio, yang dibuat dengan Next.js, Vercel, dan Tailwind CSS.
          Berikut adalah link repository dari tugas kami {""}
          <a href="https://github.com/mmtz0110/workshop-TI">
            more
          </a>
          .
        </p>
      </div>
    </section>
  );
}
