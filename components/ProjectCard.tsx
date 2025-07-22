import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuLink } from "react-icons/lu";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={
        project.liveLink ||
        project.githubLink ||
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
      className={`pt-10 ${className} flex flex-col gap-3 transition-all hover:scale-105`}
    >
      <div className="w-full h-60 overflow-hidden rounded-md">
        <Image
          src={project.imgPath}
          alt="project image"
          width={800}
          height={600}
          className="w-full h-full object-contain transition-all hover:blur-xs"
        />
      </div>

      <div className="flex justify-between items-center mt-1">
        <h1 className="font-bold text-xl">{project.title}</h1>
        {project.status === "online" && (
          <p className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-green-800">
            online{" "}
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          </p>
        )}
        {project.status === "offline" && (
          <p className="bg-yellow-200 text-yellow-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-yellow-800">
            offline{" "}
            <div className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse" />
          </p>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {project.techs.map((tech, idx) => (
          <span
            className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold"
            key={idx}
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm mt-2">{project.description}</p>

      <div className="flex gap-4 justify-start mt-2">
        {project.githubLink && (
          <Link href={project.githubLink}>
            <FaGithub size={20} className="hover:scale-125 transition-all" />
          </Link>
        )}
        {project.liveLink && (
          <Link href={project.liveLink}>
            <LuLink size={20} className="hover:scale-125 transition-all" />
          </Link>
        )}
      </div>
    </Link>
  );
}
