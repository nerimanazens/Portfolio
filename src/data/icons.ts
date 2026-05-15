import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { DiCss3, DiReact } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiVite, SiGnubash } from "react-icons/si";
import { FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscCopilot } from "react-icons/vsc";


export const icons = {
  html:       { icon: IoLogoHtml5,        color: "#E34F26" },
  css:        { icon: DiCss3,             color: "#1572B6" },
  js:         { icon: IoLogoJavascript,   color: "#F7DF1E" },
  react:      { icon: DiReact,            color: "#61DAFB" },
  reactNative:{ icon: TbBrandReactNative, color: "#61DAFB" },
  next:       { icon: RiNextjsFill,       color: "#0000000" },
  typescript: { icon: SiTypescript,       color: "#3178C6" },

  node:       { icon: FaNodeJs,           color: "#539E43" },
  express:    { icon: SiExpress,          color: "#FFFFFF" },
  sql:        { icon: PiFileSql,          color: "#F29111" },

  git:        { icon: FaGitAlt,           color: "#F05032" },
  github:     { icon: FaGithub,           color: "#FFFFFF" },
  npm:        { icon: FaNpm,              color: "#CB3837" },
  bash:       { icon: SiGnubash,          color: "#4EAA25" },

  vscode:     { icon: BiLogoVisualStudio, color: "#007ACC" },
  vite:       { icon: SiVite,             color: "#646CFF" },
  copilot:    { icon: VscCopilot,         color: "#FFFFFF" },

  tailwind:   { icon: RiTailwindCssFill,  color: "#38BDF8" },
};