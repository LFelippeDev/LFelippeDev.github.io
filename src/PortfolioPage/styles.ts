import styled, { css } from "styled-components";

interface ISelectorSelected {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  font-family: "Poppins", sans-serif;
  padding: 2rem;
  min-height: calc(100vh - 4rem);
`;

export const ThemeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const ThemeSelector = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background: transparent;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 20rem;
`;

export const ImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background};
  width: 100%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  letter-spacing: 0.05rem;
  overflow: hidden;
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.subText};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.05rem;
  overflow: hidden;
`;

export const HorizontalSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const VerticalSection = styled.section`
  width: 100%;
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  align-items: center;
`;

export const SocialContactContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MyStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 25%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  white-space: nowrap;
  height: 3rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px 2px ${({ theme }) => theme.colors.primary};
  margin: 0.8rem;
  color: #111;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ThirdButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.8rem;
  border-radius: 0.5rem;
  background: transparent;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
`;

export const SelectorSelected = styled.button<ISelectorSelected>`
  border-radius: 0.5rem;
  margin: 0.25rem;
  width: 100%;
  height: 2.5rem;
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.background : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};

  :hover {
    ${({ isActive }) =>
      !isActive &&
      css`
        opacity: 0.7;
        cursor: pointer;
      `}
  }
`;

export const BodyProjectsAndSkills = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MySkillContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`;

export const MyProjectContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
