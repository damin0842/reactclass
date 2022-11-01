import React from "react";

const CardInfo = (info) => {
  return (
    <article className="card">
      <figure className="card__header">
        <img src={info.imgsrc} alt="웹표준 사이트 만들기" />
      </figure>
      <div className="card__body">
        <h3 className="tit">{info.cardtit}</h3>
        <p className="desc">{info.desc}</p>
        <a className="btn" href="/">
          더 자세히 보기
        </a>
        <span aria-hidden="true">
          <svg
            width="61"
            height="8"
            viewBox="0 0 61 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z"
              fill="#666666"
            />
          </svg>
        </span>
      </div>
    </article>
  );
};
const cardText = [
  {
    imgsrc: "assets/img/card_bg01_01.jpg",
    cardtit: "식물 클리닉 교실",
    desc: "가정에서 식물 키우기와 분갈이, 병충해 관리 등의 어려움을 해소하고 식물의 건강한 관리를 위한 유익한 전문지식을 배우는 수업입니다.",
  },
  {
    imgsrc: "assets/img/card_bg01_02.jpg",
    cardtit: "자생식물 사진교실",
    desc: "식물과 다양한 생물을 사진으로 표현하는 강좌로 사진에 대한 이해와 촬영 기술을 학습을 바탕으로 전시원 현장을 돌면서 실습하는 수업입니다.",
  },
  {
    imgsrc: "assets/img/card_bg01_03.jpg",
    cardtit: "식물 세밀화 교실",
    desc: " 식물세밀화란 식물이 가진 특징을 정확히 관찰하고 묘사하여 기록함과 동시에 아름다운 형태로 구성하는 과정에서 창작의 의미가 부여되는 예술입니다.",
  },
];
const cardTitle = {
  title: "어린이 식물 관찰 교실",
  desc: "다육식물정원, 아열대정원, 무늬정원, 사막정원 등 체험하고 관찰",
};

function Card({ attr }) {
  return (
    <section
      id="cardType"
      className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2>{cardTitle.title}</h2>
      <p>{cardTitle.desc}</p>
      <div className="card__inner">
        {cardText.map((info, index) => (
          <CardInfo
            key={index}
            imgsrc={info.imgsrc}
            cardtit={info.cardtit}
            desc={info.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
