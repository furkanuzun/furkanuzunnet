import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const HOST = "https://panel.furkanuzun.net";
  const [partners, setPartners] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    axios
      .get("https://panel.furkanuzun.net/api/partners?populate=*")
      .then((res) => {
        setPartners(res.data.data);
        setReady(true);
      });
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <Head>
        <title>Furkan Uzun</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <h1 className="text-6xl lg:text-6xl font-thin text-center mb-20">
        <span className="block">{"Welcome,"}</span>
        <div className="flex items-start justify-center">
          <span className="inline-block">{"I'm "}</span>
          <span className="inline-block font-normal ml-4 flex flex-col">
            <span className="inline-block animate-pulse">{"Furkan."}</span>
            <div className="text-sm text-center font-light text-gray-600">
              front-end developer
            </div>
          </span>
        </div>
      </h1>

      {ready && (
        <div>
          <div className="text-2xl text-center mb-8 font-light italic">
            My Partners
          </div>

          <div className="px-8 lg:px-0 lg:w-2/3 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 gap-y-20 items-stretch">
            {partners.map((item, index) => {
              return (
                <div key={index} className="col-span-1 flex justify-center">
                  <img
                    className="h-14 object-contain brightness-0"
                    src={`${HOST}${item.attributes.PartnerLogo.data.attributes.url}`}
                    alt=""
                  />
                  {/* <div className="font-thin text-sm pb-0.5 text-gray-900 border-b border-gray-300">visit</div> */}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 py-6 mt-10 font-light relative lg:fixed bottom-0 inset-x-0">
        <span>Contact</span>
        <a href="mailto:furkan@furkanuzun.net" className="underline">
          Mail
        </a>
      </div>
    </div>
  );
}
