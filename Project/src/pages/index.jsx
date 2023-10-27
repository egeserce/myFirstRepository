import Head from "next/head";
export default function Home() {
  return (
    <>
      <div className="">
        <Head>
          <title>D&R Clone | Intro to Front-End</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="special-header">
        <img src="/special-header-img.png" />
      </div>
      <div className="header">
        <div className="titles">
          <div className="title">Yurt Dışından Kitap</div>
          <div className="title">Hediye Kartı</div>
          <div className="title">Markalar</div>
          <div className="title">Yayınevleri</div>
          <div className="title">Yazarlar</div>
          <div className="title">Mağaza Etkinlikleri</div>
          <div className="title">Mağazalar</div>
          <div className="title">Sipariş Takip</div>
          <div className="title">Sipariş Takip</div>

          <div className="title">Sipariş Takip</div>

          <div className="title">Sipariş Takip</div>
          <div className="title">Sipariş Takip</div>
          <div className="title">Sipariş Takip</div>
        </div>
        <div className="support-items">
          <div className="support-item">
            <img src="/support-img.png" />
            <div className="title">+90 (850) 2663737</div>
          </div>
          <div className="support-item">
            <img src="/whatsapp-img.png" />
            <div className="title">Whatsapp</div>
          </div>
        </div>
      </div>
    </>
  );
}
