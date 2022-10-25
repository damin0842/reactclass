import React from "react";

function Image({ attr }) {
  return (
    <section id="imageType01" className={`image__wrap ${attr[0]} ${attr[1]}`}>
      <h2>사무실은 바로 경쟁력의 원천입니다!</h2>
      <p>
        설계 및 시공에 대한 풍부한 커리어를 가지고 있는 사무공간 전문 인테리어
        기업입니다.
      </p>
      <div className={`image__inner ${attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">인테리어가 실력이다</h3>
          <p className="image__desc">
            취업에 있어 포트폴리오는 아주 중요합니다. <br />그 동안 배웠던
            내용들을 포폴에 잘 표현해 놓는게 실력이다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">인테리어가 실력이다</h3>
          <p className="image__desc">
            취업에 있어 포트폴리오는 아주 중요합니다. <br />그 동안 배웠던
            내용들을 포폴에 잘 표현해 놓는게 실력이다.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
