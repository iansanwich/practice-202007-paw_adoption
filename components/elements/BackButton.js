import styled from "styled-components";

const S = {};

S.BackButton = styled.button`
  width: ${(p) => p.theme.size[48]};
  height: ${(p) => p.theme.size[48]};
  border: 2px solid ${(p) => p.theme.color.primary.main};

  > svg {
    fill: ${(p) => p.theme.color.primary.main};
    width: ${(p) => p.theme.size[24]};
  }
`;

const BackButton = (props) => {
  return (
    <S.BackButton {...props}>
      <svg viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9906 25.5406L15.6031 26.9281C15.0156 27.5156 14.0656 27.5156 13.4843 26.9281L1.3343 14.7843C0.746802 14.1968 0.746802 13.2468 1.3343 12.6656L13.4843 0.515576C14.0718 -0.0719238 15.0218 -0.0719238 15.6031 0.515576L16.9906 1.90308C17.5843 2.49683 17.5718 3.46558 16.9656 4.04683L9.4343 11.2218H27.3968C28.2281 11.2218 28.8968 11.8906 28.8968 12.7218V14.7218C28.8968 15.5531 28.2281 16.2218 27.3968 16.2218H9.4343L16.9656 23.3968C17.5781 23.9781 17.5906 24.9468 16.9906 25.5406Z" />
      </svg>
    </S.BackButton>
  );
};

export default BackButton;
