import { DiJavascript1, DiCss3, DiHtml5, DiReact, DiGithubBadge, DiJava } from "react-icons/di";

const skills = [
    {
        key: "javascript",
        value: 9,
        color: "#E8B816",
        enable: true,
        icon: <DiJavascript1 />
    },
    {
        key: "css",
        value: 8,
        color: "#146EB0",
        enable: true,
        icon: <DiCss3 />
    },
    {
        key: "html5",
        value: 8,
        color: "#DD4D25",
        enable: false,
        icon: <DiHtml5 />
    },
    {
        key: "react",
        value: 6,
        color: "#18BCEE",
        enable: true,
        icon: <DiReact />
    },
    {
        key: "github",
        value: 5,
        color: "#000000",
        enable: false,
        icon: <DiGithubBadge />
    },
    {
        key: "java",
        value: 3,
        color: "#E4161D",
        enable: false,
        icon: <DiJava />
    }
];

export default skills;