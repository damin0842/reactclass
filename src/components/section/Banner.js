import React from "react";
const bannerText = [
  {
    title: "유튜버 찾아보기",
    desc: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
    Link: "https://www.youtube.com/",
  },
];
const BannerInner = (info) => {
  return (
    <div className="banner__inner">
      <h3 className="title">{info.title}</h3>
      <p className="desc">
        {info.desc}
        <a href={info.Link} title="유튜브 페이지로 이동">
          {info.Link}
        </a>
      </p>
      <span className="small">배너 유형01</span>
    </div>
  );
};
function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]}`}>
      <h2 className="blind">배너 영역</h2>
      {bannerText.map((info, index) => (
        <BannerInner
          key={index}
          title={info.title}
          desc={info.desc}
          Link={info.Link}
        />
      ))}
    </section>
  );
}

export default Banner;
