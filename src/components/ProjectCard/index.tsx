import { Container, Footer } from "./styles";

interface IProjectCard {
  backgroundImage: string;
  projectTitle: string;
  projectLink: string;
}

export const ProjectCard = ({
  backgroundImage,
  projectTitle,
  projectLink,
}: IProjectCard) => {
  return (
    <Container
      backgroundImage={backgroundImage}
      href={projectLink}
      target="_blank"
    >
      <Footer>{projectTitle}</Footer>
    </Container>
  );
};
