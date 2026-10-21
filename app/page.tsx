
'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/1.jpeg',
    '/2.jpeg',
    '/3.jpeg',
    '/4.jpeg',
    '/5.jpeg',
    '/6.jpeg',
    '/7.jpeg',
    '/8.jpeg',
    '/9.jpeg',
    '/10.jpeg',
    '/11.jpeg',
    '/12.jpeg',
    '/13.jpeg',
    '/14.jpeg',
    '/15.jpeg',
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#060010] text-white">
      {!showGallery ? (
        <InteractionFlow
          onFlowComplete={() => setShowGallery(true)}
        />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />

          {/* Bagian foto */}
          <section className="relative h-screen w-full overflow-hidden">
            <DomeGallery
              images={userImages}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale={false}
              autoRotationSpeed={0.1}
            />

            <div className="pointer-events-none absolute bottom-7 left-0 right-0 z-10 text-center">
              <p className="text-xs tracking-[0.25em] text-white/50">
                OUR LITTLE MEMORIES
              </p>
              <p className="mt-2 text-sm text-white/70">
                Scroll ke bawah, yaa ♡
              </p>
            </div>
          </section>
          
         {/* Bagian struktur tahapan */}
         <section className="relative w-full bg-[#F7F4EF] px-5 py-16 text-[#625B55] sm:py-20">
          <div className="mx-auto max-w-md">
           <img
            src="/level-structure.jpeg"
            alt="Struktur tahapan Level 1, Level 2, dan Level 3"
            className="h-auto w-full object-contain"
          />
         </div>
       </section>
          
          {/* Bagian pesan setelah foto */}
          <section className="relative z-20 w-full touch-pan-y px-5 pb-24 pt-12 sm:px-8 sm:pt-16" style={{ touchAction: 'pan-y' }}>
            <article className="mx-auto max-w-2xl">
              <div className="mb-10 h-px w-16 bg-pink-300/50" />

              <div className="space-y-6 text-[15px] leading-8 text-white/80 sm:text-base sm:leading-9">

                <p className="text-xl font-medium tracking-wide text-white">
                  Hallo pinii ♡
                </p>

                <p>
                  Api kita 200 Yeyyyyy! 🫶🏼
                </p>

                <p>
                  ganyangka ya kita bisa sedeket ini, pinn.
                  yang awalnya cuman satu grup, saling save,
                  terus kita saling follow tiktok, terus ig juga.
                  trus Dupen pernah post story buat map Roblox
                  dan itu dikomen sama Pinii, "inpoo azaa map-nya".
                  Ini pas 3 September 2025.
                </p>

                <p>
                  udah itu kita hampir gapernah chattan, sampe
                  dupen live tiktok pas 17 Januari. pinii komen,
                  sampe dimana pinii nanya sec account dupen.
                  dari situlah dimulai kita mulai chattan, sering
                  tapi ga sering banget pas Januari-nya. Akhirnya
                  kita bikin api di 28 Februari. Banyak banget
                  lika-liku, ternyata bisa sampai sekarang.
                </p>

                <p>
                  pinii pernah nanya ke dupen, "percaya ga jodoh
                  itu cerminan diri?" padahal mah jodohnya di depan
                  mata, heheee. pinii juga bilang, "ada juga yang
                  berbeda tapi melengkapi".
                </p>

                <p>
                  Pinii juga pernah ngirim video tiktok pas 18 Mei:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 italic text-white/90">
                    "I choose you. And I'll choose you over and over.
                    Without pause, without a doubt. In a heartbeat.
                    I'll keep choosing you."
                  </span>
                  Sekarang bagian dupen yang bakal buktiin.
                </p>

                <p>
                  Makasih ya, pinii, buat semuanya. trus maaf juga
                  mungkin terkadang dupen nyebelin.
                </p>

                <p>
                  dupen berharap kita sama-sama usahain terus
                  supaya kita terus bersama. trus juga dupen
                  berharap kita punya satu tujuan yang sama.
                  semogaa tahapan ini sampai, trus dupen mau kita
                  berkembang bareng-bareng. dupen juga seneng
                  banget kalau dilibatkan dalam kehidupan pinii.
                </p>

                <p>
                  Owh iya, pin, dupen juga sekarang sering pulang
                  ke serang kan. terkadang juga dupen seneng di
                  cilegon. kalau dupen ke serang, dupen berharap
                  pinii mau ngajakin maen, hehee, atau butuh
                  sesuatu, dupen bisa langsung otw.
                </p>

                <p>
                  Kalau di cilegon terus ngasih taunya malem,
                  kemungkinannya takut ga jadi maen kaya waktu
                  itu karena kemaleman. tapi kalau butuh sesuatu
                  di cilegon juga bisa, cuman kalau di serang
                  bisa lebih cepet.
                </p>

                <p>
                  trus kalau yang dupen seneng di cilegon, kalau
                  pinii lagi sibuk dan mau callan biar lebih seru
                  dan ga berisik, dupen langsung ke cilegon.
                  begitu deh.
                </p>

                <p>
                  pinii, dupen boleh minta sesuatu tida?
                  dupen pengen pinii ngabarin Dupen apa pun itu.
                  tapi kalau semisal pinii ada masalah dan ga
                  sempet ngabarin dupen, it's okay, tida apaapa.
                  Soalnya kabar pinii tu penting banget bagi dupen.
                </p>

                <p>
                  pinii juga kalau mau cerita apa pun itu,
                  dupen dengerin kok. Kalau yang tentang cerita
                  ini, Pinii juga udah ngasih tau dupen kan.
                  okeii, tapi pinii perlu tau kalau pinii mau
                  cerita apa pun itu, serandom apa pun itu,
                  Dupen mau dengerin kok.
                </p>

                <p>
                  trus pinii juga ga perlu sungkan sama dupen.
                  kalau butuh sesuatu, jemput, anter, butuh dupen
                  langsung buat cerita atau apa pun itu,dupen
                  usahain. dupen gamau pinii ngerasa sendiri.
                </p>

                <p>
                  dupen juga mau nanya, boleh tida?
                  pinii pernah ga si takut kehilangan dupen?
                  ada hal ga yang pinii butuh dari dupen tapi
                  pinii gaberani minta? ada ga ketakutan pinii
                  buat ngejalanin hubungan ini yang ga dupen tau?
                </p>

                <p>
                  tapi pinii bisa liat dupen. dupen juga gapernah
                  neko-neko kalau udah nyiapin buat hubungan,
                  apalagi sampe ngejalaninnya.
                </p>

                <p>
                  Prinsip dupen gini:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 text-white">
                    "Dupen bakal usahain apa pun itu buat Pinii
                    selagi Dupen bisa."
                  </span>
                </p>

                <p>
                  trus juga:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 text-white">
                    "saling percaya."
                  </span>
                  Ini anggapan karena kita jarang ketemu.
                </p>

                <p>
                  Owh iya, dari semua pertanyaan ini dupen mau
                  tau sama mau ngeyakinin Pinii. kalau buat
                  waktunya, sambil berjalan dupen tunggu kok.
                </p>

                <p className="pt-4 text-lg font-medium text-white">
                  dupen bakal belajar semua buat pinii. 🫶🏼
                </p>

              </div>

              <div className="mt-12 h-px w-full bg-white/10" />

              <p className="mt-6 text-center text-sm tracking-wide text-white/40">
                pini nifiniifoo lullabiee pwddipee ♡
              </p>
            </article>
          </section>
        </>
      )}
    </main>
  );
}
