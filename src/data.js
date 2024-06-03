import {
  faSymfony,
  faPhp,
  faJs,
  faReact,
  faJira,
  faGithub,
  faWebflow,
  faWordpress, faGitlab, faDocker
} from '@fortawesome/free-brands-svg-icons';
import {faServer} from "@fortawesome/free-solid-svg-icons";

export const getTranslatedProjects = (t) => [
  {
    title: t("project.umami.title"),
    subtitle: t("project.umami.subtitle"),
    description: t("project.umami.description"),
    image: "./umami.gif",
    link: "https://marika-abe.fr/",
  },
  {
    title: t("project.ez_shopping.title"),
    subtitle: t("project.ez_shopping.subtitle"),
    description: t("project.ez_shopping.description"),
    image: "./ez-shopping.gif",
    link: "http://ez-shopping.free.nf/",
  },
  {
    title: t("project.french_school_mvc.title"),
    subtitle: t("project.french_school_mvc.subtitle"),
    description: t("project.french_school_mvc.description"),
    image: "./french_school_mvc.gif",
    link: "https://github.com/Marikita1007/french_school_mvc",
  },
  {
    title: t("project.pokemon.title"),
    subtitle: t("project.pokemon.subtitle"),
    description: t("project.pokemon.description"),
    image: "./pokemon.gif",
    link: "https://github.com/Marikita1007/react-pokemon-dex",
  },
  {
    title: t("project.pizza-menu.title"),
    subtitle: t("project.pizza-menu.subtitle"),
    description: t("project.pizza-menu.description"),
    image: "./pizza-menu.gif",
    link : "https://github.com/Marikita1007/React-Pizza-Menu",
  },
  {
    title: t("project.eat-n-split.title"),
    subtitle: t("project.eat-n-split.subtitle"),
    description: t("project.eat-n-split.description"),
    image: "./eat-n-split.gif",
    link : "https://github.com/Marikita1007/eat-n-split",
  },
];

export const getTranslatedTestimonials = (t) => [
  {
    quote: t("testimonials.testimonial_one.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_one.name"),
  },
  {
    quote: t("testimonials.testimonial_two.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_two.name"),
  },
  {
    quote: t("testimonials.testimonial_three.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_three.name"),
  },
  {
    quote: t("testimonials.testimonial_four.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_four.name"),
  },
  {
    quote: t("testimonials.testimonial_five.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_five.name"),
  },
  {
    quote: t("testimonials.testimonial_six.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_six.name"),
  },
  {
    quote: t("testimonials.testimonial_seven.quote"),
    image: "testimonials.png",
    name: t("testimonials.testimonial_seven.name"),
  },
]

export const skills = [
  { name: "Symfony", icon: faSymfony },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "MySQL", icon: faServer },
  { name: "Docker", icon: faDocker },
  { name: "PHP", icon: faPhp },
  { name: "GitHub", icon: faGithub },
  { name: "Gitlab", icon: faGitlab },
  { name: "Jira", icon: faJira },
  { name: "WordPress", icon: faWordpress },
  { name: "Webflow", icon: faWebflow },
];
