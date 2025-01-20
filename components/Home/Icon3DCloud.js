import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

function Icon3DCloud() {

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="hidden lg:block w-80 -mt-16 -ml-36">
            <IconCloud images={images} className="mt-0"/>
        </div>
  )
}

export default Icon3DCloud