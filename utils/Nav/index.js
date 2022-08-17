import Logo from "../../Asset/Icon/logo.png";
import { FaSearch } from "react-icons/fa";
import SearchField from "../../universal-component/SearchFieldComponent";

export const NavArray = [
  { section: [{ image: Logo }] },
  {
    section: [
      { link: "/", linktext: "HOME" },
      {
        dropdown: "ABOUT",
        dropdownlinks: [
          { link: "/about/background", linktext: "Background" },
          { link: "/about/standard", linktext: "Standard" },
          {
            link: "/about/organizational-structure",
            linktext: "Organizational Structure",
          },
          { link: "/about/our-mission", linktext: "Our Mission" },
          { link: "/about/business-ethics", linktext: "Business Ethics" },
          { link: "/about/key-personnel", linktext: "Key Personnel" },
          {
            link: "/about/how-we-deliver-value",
            linktext: "How We Deliver Value",
          },
          { link: "/about/approach", linktext: "Apporach" },
          { link: "/about/partners", linktext: "Partners" },
        ],
      },
      {
        dropdown: "SERVICES",
        dropdownlinks: [
          {
            link: "/services/seamface-power",
            linktext: "SeamFace Power",
          },
          {
            link: "/services/seamface-controls",
            linktext: "SeamFace Controls",
          },
          {
            link: "/services/seamface-solar",
            linktext: "SeamFace Solar",
          },
          {
            link: "/services/seamface-ict",
            linktext: "SeamFace ICT",
          },
          {
            link: "/services/seamface-infrastructure",
            linktext: "SeamFace Infrastructure",
          },
        ],
      },
      { link: "/projects", linktext: "PROJECTS" },
      { link: "/clients", linktext: "CLIENTS" },
      { link: "/contacts", linktext: "CONTACTS" },
      { icon: FaSearch },
      { component: SearchField },
    ],
  },
];
