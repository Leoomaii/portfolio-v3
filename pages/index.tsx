import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import Image from "next/image";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo,
  experiences,
  skills,
  projects,
  socials, }: Props) => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#009DCF]/80">
      <Head>
        <title>Leo Mai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center scroll-smooth">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start scroll-smooth">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start scroll-smooth">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-start scroll-smooth">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              height="80px"
              width="80px"
              className="cursor-pointer grayscale filter hover:grayscale-0"
              src="https://i.postimg.cc/nhtWwN07/Logo.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
  };
};



