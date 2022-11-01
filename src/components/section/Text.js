import React from "react";

const TextInfo = (info) => {
  return (
    <div className={`text ${info.class}`}>
      <h3 className="text__title">{info.title}</h3>
      <p className="text__desc">{info.desc}</p>
      <a className="text_btn" href="/">
        더보기
      </a>
    </div>
  );
};
const textTitle = {
  type: "텍스트 유형01",
  title: "스크립트를 읽는 방법",
};
const textText = [
  {
    class: "t1",
    title: "검색 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
  },
  {
    class: "t2",
    title: "퀴즈 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 퀴즈 스크립트를 완성하는 튜토리얼입니다.",
  },
  {
    class: "t3",
    title: "마우스 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 마우스 스크립트를 완성하는 튜토리얼입니다.",
  },
  {
    class: "t4",
    title: "슬라이드 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 슬라이드 스크립트를 완성하는 튜토리얼입니다.",
  },
  {
    class: "t5",
    title: "페럴랙스 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 페럴랙스 스크립트를 완성하는 튜토리얼입니다.",
  },
  {
    class: "t6",
    title: "게임 이펙트",
    desc: "자바스크립트의 기본 메서드를 통해 게임 스크립트를 완성하는 튜토리얼입니다.",
  },
];

function Text({ attr }) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]}`}>
      <span>{textTitle.type}</span>
      <h2 className="mb70">{textTitle.title}</h2>
      <div className={`text__inner ${attr[2]}`}>
        {textText.map((info, index) => (
          <TextInfo
            key={index}
            class={info.class}
            title={info.title}
            desc={info.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
