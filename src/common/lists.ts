import Baduk from "../assets/baduk.png";
import Glue from "../assets/glue.png";
import Vivi from "../assets/vivi.jpeg";
import Save from "../assets/save.jpeg";
import IB from "../assets/ib.jpeg";

interface IMyProject {
  name: string;
  link: string;
  image: string;
}

export const MyContactLinks = {
  whatsApp: "https://wa.me/5537991564147?text=Oi%20quero%20criar%20um%20site!",
  instagram: "https://www.instagram.com/filipin.s/",
  linkdedIn: "https://www.linkedin.com/in/felippe-fernandes-70b658181/",
  gitHub: "https://github.com/LFelippeDev",
  email: "lfelippeeng@gmail.com",
};

export const MyProjects: IMyProject[] = [
  {
    name: "Baduk",
    link: "https://www.baduk.vc/inicio",
    image: Baduk,
  },
  {
    name: "Glue",
    link: "https://www.gluehere.app/",
    image: Glue,
  },
  {
    name: "Vivi",
    link: "https://vivi-web-app.herokuapp.com/",
    image: Vivi,
  },
  {
    name: "Save",
    link: "https://save-app-web.herokuapp.com/",
    image: Save,
  },
  {
    name: "IB",
    link: "https://web-ib.herokuapp.com/",
    image: IB,
  },
];
