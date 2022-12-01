import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const HOST = "https://panel.furkanuzun.net";
  const [partners, setPartners] = useState([]);
  const [ready, setReady] = useState(false);
  const [showWorkDetail, setshowWorkDetail] = useState(false);
  useEffect(() => {
    axios
      .get("https://panel.furkanuzun.net/api/partners?populate=*")
      .then((res) => {
        setPartners(res.data.data);
        setReady(true);
      });
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        {showWorkDetail && (
          <div
            onClick={() => setshowWorkDetail(false)}
            className="absolute left-10 top-10 text-4xl font-thin cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              width="52"
              height="52"
              stroke="currentColor"
              stroke-width="1"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
        )}
        <div className="container mx-auto pt-10 transition-all duration-400">
          <Head>
            <title>Furkan Uzun</title>
            <link rel="shortcut icon" href="/favicon.png" />
          </Head>
          <h1
            className={`text-6xl lg:text-6xl font-thin text-center transition-all duration-400 ${
              showWorkDetail
                ? "mb-10 text-3xl lg:text-4xl"
                : "mb-20 text-6xl lg:text-6xl"
            }`}
          >
            <span className="block">{"Welcome,"}</span>
            <div className="flex items-start justify-center">
              <span className="inline-block">{"I'm "}</span>
              <span
                className={`inline-block font-normal flex flex-col ${
                  showWorkDetail ? "ml-1" : "ml-4"
                }`}
              >
                <span className="inline-block animate-pulse">{"Furkan."}</span>
                <div className="text-sm text-center font-light text-gray-600">
                  front-end developer
                </div>
              </span>
            </div>
          </h1>
        </div>
        <div className="container-fluid flex-1">
          {ready && (
            <div className="relative h-full">
              {showWorkDetail && (
                // TODO: Itemlar sunucudan çekilecek. Henüz backend geliştirmesi yapılmadı.
                <div className="absolute inset-0 bg-white z-20 h-full flex items-center pb-20">
                  <div className="w-1/2 h-full order-2">
                    <img
                      className="h-full w-full object-cover object-top object-left-top"
                      src="/freuzedetails.png"
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 order-1 h-full flex flex-col items-center justify-center">
                    <div className="text-4xl mt-4 mb-2">
                      Freuze Coffee & Eatery
                    </div>
                    <div className="text-xl font-light w-full lg:w-1/2 text-center mx-auto">
                      Nesillerdir süre gelen ama kimilerinin en güzeliyle
                      buluşamadığı bu lezzetleri her yaşa sevdirmek, tutkunu
                      yapmak için buradayız.
                    </div>
                    <div className="cursor-pointer font-light italic mt-4">
                      freuzecoffee.com
                    </div>
                  </div>
                </div>
              )}

              <div className="text-2xl text-center mb-8 font-light italic">
                My Partners
              </div>

              <div className="container mx-auto">
                <div className="px-8 lg:px-0 lg:w-2/3 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 gap-y-20 items-stretch">
                  {partners.map((item, index) => {
                    return (
                      <div
                        onClick={() => setshowWorkDetail(true)}
                        key={index}
                        className="col-span-1 flex justify-center"
                      >
                        <img
                          className="h-14 object-contain brightness-0"
                          src={`${HOST}${item.attributes.PartnerLogo.data.attributes.url}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 py-6 mt-10 font-light relative lg:fixed bottom-0 inset-x-0 z-30">
        <span>Contact</span>
        <a href="mailto:furkan@furkanuzun.net" className="underline">
          Mail
        </a>
      </div>
    </>
  );
}
