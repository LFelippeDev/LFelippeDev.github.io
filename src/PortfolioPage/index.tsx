import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/theme";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineDownload,
} from "react-icons/ai";
import {
  SiGmail,
  SiHtml5,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiCss3,
  SiGit,
  SiStyledcomponents,
  SiSass,
  SiTsnode,
  SiFigma,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
  Container,
  HorizontalSection,
  ImageWrapper,
  PrimaryButton,
  SecondaryButton,
  SelectorContainer,
  SelectorSelected,
  Subtitle,
  ThemeSelector,
  ThemeSelectorContainer,
  Title,
  TopContent,
  Image,
  VerticalSection,
  SocialContactContainer,
  ThirdButton,
  MyStatus,
  BodyProjectsAndSkills,
  MySkillContainer,
  MyProjectContainer,
} from "./styles";
import myProfile from "../assets/myProfile.jpg";
import myCv from "../assets/myCv.pdf";
import { MyContactLinks, MyProjects } from "../common/lists";
import { ProjectCard } from "../components/ProjectCard";

type ActiveSections = "projects" | "skills";

export const PortfolioPage = () => {
  const [activeTheme, setActiveTheme] = useState(dark);
  const [activeSection, setActiveSection] =
    useState<ActiveSections>("projects");

  const handleActiveTheme = useCallback(() => {
    if (activeTheme === dark) setActiveTheme(light);
    else setActiveTheme(dark);
  }, [activeTheme]);

  const handleActiveSection = useCallback(
    (openSection: ActiveSections) => {
      if (openSection !== activeSection) setActiveSection(openSection);
    },
    [activeSection]
  );

  return (
    <ThemeProvider theme={activeTheme}>
      <Container>
        <ThemeSelectorContainer>
          <ThemeSelector onClick={handleActiveTheme}>
            {activeTheme === dark ? (
              <BsFillSunFill color={activeTheme.colors.text} size="70%" />
            ) : (
              <BsFillMoonFill color={activeTheme.colors.text} size="70%" />
            )}
          </ThemeSelector>
        </ThemeSelectorContainer>
        <TopContent>
          <ImageWrapper>
            <Image src={myProfile} />
          </ImageWrapper>
          <VerticalSection>
            <Title>Felippe Fernandes</Title>
            <Subtitle>Web Developer</Subtitle>
            <SocialContactContainer>
              <ThirdButton href={MyContactLinks.instagram} target="_blank">
                <AiFillInstagram color={activeTheme.colors.text} size="100%" />
              </ThirdButton>
              <ThirdButton href={MyContactLinks.linkdedIn} target="_blank">
                <AiFillLinkedin color={activeTheme.colors.text} size="100%" />
              </ThirdButton>
              <ThirdButton href={MyContactLinks.gitHub} target="_blank">
                <AiFillGithub color={activeTheme.colors.text} size="100%" />
              </ThirdButton>
            </SocialContactContainer>
          </VerticalSection>
          <HorizontalSection>
            <MyStatus>
              <Title>3</Title>
              <Subtitle>Years of work</Subtitle>
            </MyStatus>
            <MyStatus>
              <Title>53+</Title>
              <Subtitle>Completed Projects</Subtitle>
            </MyStatus>
            <MyStatus>
              <Title>41</Title>
              <Subtitle>Satisfied Customers</Subtitle>
            </MyStatus>
          </HorizontalSection>
          <HorizontalSection>
            <PrimaryButton href={myCv} download="FelippeFernandes">
              Download CV
              <AiOutlineDownload color={"#111"} size="50%" />
            </PrimaryButton>
            <SecondaryButton href={MyContactLinks.whatsApp} target="_blank">
              <AiOutlineWhatsApp color={activeTheme.colors.text} size="60%" />
            </SecondaryButton>
            <SecondaryButton href={MyContactLinks.email} target="_blank">
              <SiGmail color={activeTheme.colors.text} size="60%" />
            </SecondaryButton>
          </HorizontalSection>
          <SelectorContainer>
            <SelectorSelected
              isActive={activeSection === "projects"}
              onClick={() => handleActiveSection("projects")}
            >
              Projects
            </SelectorSelected>
            <SelectorSelected
              isActive={activeSection === "skills"}
              onClick={() => handleActiveSection("skills")}
            >
              Skills
            </SelectorSelected>
          </SelectorContainer>
        </TopContent>
        <BodyProjectsAndSkills>
          {activeSection === "skills" && (
            <MySkillContainer>
              <SiHtml5 color={activeTheme.colors.primary} size="60%" />
              <SiCss3 color={activeTheme.colors.primary} size="60%" />
              <SiTypescript color={activeTheme.colors.primary} size="60%" />
              <SiReact color={activeTheme.colors.primary} size="60%" />
              <SiNextdotjs color={activeTheme.colors.primary} size="60%" />
              <SiRedux color={activeTheme.colors.primary} size="60%" />
              <SiGit color={activeTheme.colors.primary} size="60%" />
              <SiStyledcomponents
                color={activeTheme.colors.primary}
                size="60%"
              />
              <SiSass color={activeTheme.colors.primary} size="60%" />
              <SiMongodb color={activeTheme.colors.primary} size="60%" />
              <SiTsnode color={activeTheme.colors.primary} size="60%" />
              <SiFigma color={activeTheme.colors.primary} size="60%" />
            </MySkillContainer>
          )}
          {activeSection === "projects" && (
            <MyProjectContainer>
              {MyProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  backgroundImage={project.image}
                  projectTitle={project.name}
                  projectLink={project.link}
                />
              ))}
            </MyProjectContainer>
          )}
        </BodyProjectsAndSkills>
      </Container>
    </ThemeProvider>
  );
};
