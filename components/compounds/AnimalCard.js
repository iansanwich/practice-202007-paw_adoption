import styled from "styled-components";
import GenderIndicator from "components/elements/GenderIndicator";

const AnimalCard = ({ data = {} }) => {
  const {
    name = "Stevey",
    age = 5,
    gender = "male",
    imageUrl = "/static/images/cats/cat-01.jpg",
    isSpecial = false,
  } = data;

  return (
    <S.AnimalCard>
      <div className="AnimalCard__photo-wrapper">
        <img className="AnimalCard__photo" src={imageUrl} alt="" />
      </div>

      <div className="AnimalCard__detail-block">
        <p className="AnimalCard__name-text">{name}</p>

        <p className="AnimalCard__age-text">
          {age} year{age > 1 && "s"} old
        </p>

        <GenderIndicator className="AnimalCard__GenderIndicator"></GenderIndicator>
      </div>

      <div className="AnimalCard__line-decoration"></div>
    </S.AnimalCard>
  );
};

const S = {};

S.AnimalCard = styled.article`
  width: ${(p) => p.theme.size.pixel(256)};
  background-color: ${(p) => p.theme.color.grey[100]};
  position: relative;
  box-shadow: ${(p) => p.theme.shadow.big};

  .AnimalCard__photo-wrapper {
    height: ${(p) => p.theme.size.pixel(192)};
  }

  .AnimalCard__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .AnimalCard__name-text {
    font-size: 2rem;
    font-family: ${(p) => p.theme.font.serif};
    color: ${(p) => p.theme.color.primary.dark};
    line-height: 100%;
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .AnimalCard__detail-block {
    padding: ${(p) => p.theme.size[24]};
    padding-bottom: ${(p) => p.theme.size[32]};
    position: relative;
  }

  .AnimalCard__age-text {
    font-size: 1.1875rem;
    color: ${(p) => p.theme.color.grey[800]};
  }

  .AnimalCard__line-decoration {
    height: 4px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.color.primary.main};
  }

  .AnimalCard__GenderIndicator {
    position: absolute;
    top: -${(p) => p.theme.size[16]};
    right: ${(p) => p.theme.size[16]};
  }
`;

export default AnimalCard;