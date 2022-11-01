import React from "react";

const ImgTxtInfo = (info) => {
  return (
    <div className={`imgText__img ${info.class}`}>
      <a href="/" className={info.btnClass}>
        {info.site}
      </a>
    </div>
  );
};
const imgTxtText = [
  {
    class: "img1",
    site: "레퍼런스 사이트",
    btnClass: "basic",
  },
  {
    class: "img2",
    site: "튜토리얼 사이트",
    btnClass: "blue",
  },
];
const imgTxtTitle = {
  type: "이미지 텍스트 유형01",
  title: "유용한 사이트 살펴보기",
  desc: " 웹디자이너, 웹 퍼블리셔, 프론트엔드 개발자를 위한 유용한 사이트입니다.",
};
function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} `}
    >
      <h2 className="blind">유용한 사이트 살펴보기</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgTxtTitle.type}</span>
          <h3>{imgTxtTitle.title}</h3>
          <p>{imgTxtTitle.desc}</p>
          <ul>
            <li>
              <a href="/">튜토리얼 사이트</a>
            </li>
            <li>
              <a href="/">레퍼런스 사이트</a>
            </li>
            <li>
              <a href="/">웹폰트 사이트</a>
            </li>
            <li>
              <a href="/">CSS 사이트</a>
            </li>
            <li>
              <a href="/">WebGL 사이트</a>
            </li>
            <li>
              <a href="/">Youtube 사이트</a>
            </li>
          </ul>
        </div>
        {imgTxtText.map((info, index) => (
          <ImgTxtInfo
            key={info}
            class={info.class}
            site={info.site}
            btnClass={info.btnClass}
          />
        ))}
        ;
      </div>
    </section>
  );
}

export default ImageText;
