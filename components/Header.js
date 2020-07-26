import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const S = {};

S.Header = styled.header`
  padding-top: ${(p) => p.theme.size[32]};
  padding-bottom: ${(p) => p.theme.size[32]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Logo = styled.img`
  width: ${(p) => p.theme.size.pixel(128)};
`;

S.Nav = styled.nav`
  *:not(:last-child) {
    margin-right: ${(p) => p.theme.size[64]};
  }
`;

S.Anchor = styled.a`
  font-family: ${(p) => p.theme.font.sansSerif};
  color: ${(p) => p.theme.color.primary.main};
  font-weight: 600;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    css`
      color: ${(p) => p.theme.color.primary.dark};
      font-weight: 700;
    `}
`;

const Header = () => {
  const router = useRouter();

  return (
    <S.Header>
      <S.Logo src="/static/images/paws_logo.jpg" alt="PAWS logo" />

      <S.Nav>
        <Link href="/" passHref={true}>
          <S.Anchor isActive={router.pathname === "/"}>Home</S.Anchor>
        </Link>

        <Link href="/adoptable-cats" passHref={true}>
          <S.Anchor isActive={router.pathname === "/adoptable-cats"}>
            Adoptable Cats
          </S.Anchor>
        </Link>

        <Link href="/adoptable-dogs" passHref={true}>
          <S.Anchor isActive={router.pathname === "/adoptable-dogs"}>
            Adoptable Dogs
          </S.Anchor>
        </Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
