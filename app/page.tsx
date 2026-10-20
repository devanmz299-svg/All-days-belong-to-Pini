
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
    <main className="min-h-screen w-full bg-[#060010] text-white">
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

          {/* Bagian pesan setelah foto */}
          <section className="relative w-full px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
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
                  Ganyangka ya kita bisa sedeket ini, Pinn.
                  Yang awalnya cuman satu grup, saling save,
                  terus kita saling follow TikTok, terus IG juga.
                  Trus Dupen pernah post story buat map Roblox
                  dan itu dikomen sama Pinii, "inpoo azaa map-nya".
                  Ini pas 3 September 2025.
                </p>

                <p>
                  Udah itu kita hampir gapernah chattan, sampe
                  Dupen live TikTok pas 17 Januari. Pinii komen,
                  sampe dimana Pinii nanya sec account Dupen.
                  Dari situlah dimulai kita mulai chattan, sering
                  tapi ga sering banget pas Januari-nya. Akhirnya
                  kita bikin api di 28 Februari. Banyak banget
                  lika-liku, ternyata bisa sampai sekarang.
                </p>

                <p>
                  Pinii pernah nanya ke Dupen, "percaya ga jodoh
                  itu cerminan diri?" Padahal mah jodohnya di depan
                  mata, heheee. Pinii juga bilang, "ada juga yang
                  berbeda tapi melengkapi".
                </p>

                <p>
                  Pinii juga pernah ngirim video TikTok pas 18 Mei:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 italic text-white/90">
                    "I choose you. And I'll choose you over and over.
                    Without pause, without a doubt. In a heartbeat.
                    I'll keep choosing you."
                  </span>
                  Sekarang bagian Dupen yang bakal buktiin.
                </p>

                <p>
                  Makasih ya, Pinii, buat semuanya. Trus maaf juga
                  mungkin terkadang Dupen nyebelin.
                </p>

                <p>
                  Dupen berharap kita sama-sama usahain terus
                  supaya kita terus bersama. Trus juga Dupen
                  berharap kita punya satu tujuan yang sama.
                  Semogaa tahapan ini sampai, trus Dupen mau kita
                  berkembang bareng-bareng. Dupen juga seneng
                  banget kalau dilibatkan dalam kehidupan Pinii.
                </p>

                <p>
                  Owh iya, Pin, Dupen juga sekarang sering pulang
                  ke Serang kan. Terkadang juga Dupen seneng di
                  Cilegon. Kalau Dupen ke Serang, Dupen berharap
                  Pinii mau ngajakin maen, hehee, atau butuh
                  sesuatu, Dupen bisa langsung otw.
                </p>

                <p>
                  Kalau di Cilegon terus ngasih taunya malem,
                  kemungkinannya takut ga jadi maen kaya waktu
                  itu karena kemaleman. Tapi kalau butuh sesuatu
                  di Cilegon juga bisa, cuman kalau di Serang
                  bisa lebih cepet.
                </p>

                <p>
                  Trus kalau yang Dupen seneng di Cilegon, kalau
                  Pinii lagi sibuk dan mau call-an biar lebih seru
                  dan ga berisik, Dupen langsung ke Cilegon.
                  Begitu deh.
                </p>

                <p>
                  Pinii, Dupen boleh minta sesuatu tida?
                  Dupen pengen Pinii ngabarin Dupen apa pun itu.
                  Tapi kalau semisal Pinii ada masalah dan ga
                  sempet ngabarin Dupen, it's okay, tida apa-apa.
                  Soalnya kabar Pinii tu penting banget bagi Dupen.
                </p>

                <p>
                  Pinii juga kalau mau cerita apa pun itu,
                  Dupen dengerin kok. Kalau yang tentang cerita
                  ini, Pinii juga udah ngasih tau Dupen kan.
                  Okeii, tapi Pinii perlu tau kalau Pinii mau
                  cerita apa pun itu, serandom apa pun itu,
                  Dupen mau dengerin kok.
                </p>

                <p>
                  Trus Pinii juga ga perlu sungkan sama Dupen.
                  Kalau butuh sesuatu, jemput, anter, butuh Dupen
                  langsung buat cerita atau apa pun itu, Dupen
                  usahain. Dupen gamau Pinii ngerasa sendiri.
                </p>

                <p>
                  Dupen juga mau nanya, boleh tida?
                  Pinii pernah ga si takut kehilangan Dupen?
                  Arah kita satu tujuan kan, Pin?
                  Ada hal ga yang Pinii butuh dari Dupen tapi
                  Pinii gaberani minta? Ada ga ketakutan Pinii
                  buat ngejalanin hubungan ini yang ga Dupen tau?
                </p>

                <p>
                  Tapi Pinii bisa liat Dupen. Dupen juga gapernah
                  neko-neko kalau udah nyiapin buat hubungan,
                  apalagi sampe ngejalaninnya.
                </p>

                <p>
                  Prinsip Dupen gini:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 text-white">
                    "Dupen bakal usahain apa pun itu buat Pinii
                    selagi Dupen bisa."
                  </span>
                </p>

                <p>
                  Trus juga:
                  <span className="mt-3 block border-l-2 border-pink-300/40 pl-4 text-white">
                    "Selagi Dupen ga macem-macem di sini,
                    maka Pinii juga gabakal macem-macem."
                  </span>
                  Ini anggapan karena kita jarang ketemu.
                </p>

                <p>
                  Owh iya, dari semua pertanyaan ini Dupen mau
                  tau sama mau ngeyakinin Pinii. Kalau buat
                  waktunya, sambil berjalan Dupen tunggu kok.
                </p>

                <p className="pt-4 text-lg font-medium text-white">
                  Dupen bakal belajar semua buat Pinii. 🫶🏼
                </p>

              </div>

              <div className="mt-12 h-px w-full bg-white/10" />

              <p className="mt-6 text-center text-sm tracking-wide text-white/40">
                always choosing you ♡
              </p>
            </article>
          </section>
        </>
      )}
    </main>
  );
}
