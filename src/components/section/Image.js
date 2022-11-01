import React from "react";

const imageTitle = {
  title: "사무실은 바로 경쟁력의 원천입니다!",
  desc: "설계 및 시공에 대한 풍부한 커리어를 가지고 있는 사무공간 전문 인테리어 기업입니다.",
};

const imageInfo = [
  {
    class: "img1",
    title: "인테리어가 실력이다",
    desc: "취업에 있어 포트폴리오는 아주 중요합니다. 그 동안 배웠던 내용들을 포폴에 잘 표현해 놓는게 실력이다.",
    btnClass: "basic",
    btnLink: "/",
  },
  {
    class: "img2",
    title: "누가 인테리어를 말하는가?",
    desc: "인테리어는 생활에 변화와 행복을 가져다주는, 삶의 철학이 담긴 직업이다.",
    btnClass: "yellow",
    btnLink: "/",
  },
];

const ImageText = (info) => {
  return (
    <article className={`image ${info.class}`}>
      <h3 className="image__title">{info.title}</h3>
      <p className="image__desc">{info.desc}</p>
      <a
        className={`image__btn ${info.btnClass}`}
        href={`${info.btnLink}`}
        title="자세히 보기"
      >
        자세히 보기
      </a>
    </article>
  );
};

function Image({ attr }) {
  return (
    <section id="imageType01" className={`image__wrap ${attr[0]} ${attr[1]}`}>
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${attr[2]}`}>
        {imageInfo.map((info, index) => (
          <ImageText
            key={index}
            class={info.class}
            title={info.title}
            desc={info.desc}
            btnClass={info.btnClass}
            btnLink={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
