import Logo from "../../Asset/Icon/logo.png";
import { FaSearch } from "react-icons/fa";
import SearchField from "../../universal-component/SearchFieldComponent";
import { FiMenu } from "react-icons/fi";

export const NavArray = [
  {
    classmain: "firstLayout",
    section: [
      {
        image: Logo,
        classbody: "firstlayoutbody",
        classname: "firstlayoutname",
        classitem: "firstlayoutitem",
      },
    ],
  },
  {
    classmain: "secondLayout",
    section: [
      {
        link: "/",
        linktext: "HOME",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        dropdown: "ABOUT",
        details: "about",
        classbody: "secondlayoutbodydropdown",
        classname: "secondlayoutnamedropdown",
        classitem: "secondlayoutitemdropdown",
        itemL: "itemdropdown",
        dropdownlinks: [
          {
            link: "/about/background",
            linktext: "Background",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/standard",
            linktext: "Standard",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/organizational-structure",
            linktext: "Organizational Structure",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/our-mission",
            linktext: "Our Mission",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/business-ethics",
            linktext: "Business Ethics",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/key-personnel",
            linktext: "Key Personnel",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/how-we-deliver-value",
            linktext: "How We Deliver Value",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/approach",
            linktext: "Apporach",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/about/partners",
            linktext: "Partners",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
        ],
      },
      {
        dropdown: "SERVICES",
        details: "service",
        classbody: "secondlayoutbodydropdown",
        classname: "secondlayoutnamedropdown",
        classitem: "secondlayoutitemdropdown",
        itemL: "itemdropdown",
        dropdownlinks: [
          {
            link: "/services/seamface-power",
            linktext: "SeamFace Power",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/seamface-controls",
            linktext: "SeamFace Controls",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/seamface-solar",
            linktext: "SeamFace Solar",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/seamface-ict",
            linktext: "SeamFace ICT",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
          {
            link: "/services/seamface-infrastructure",
            linktext: "SeamFace Infrastructure",
            classbody: "secondlayoutbodydropdownitem",
            classname: "secondlayoutnamedropdownitem",
            classitem: "secondlayoutitemdropdownitem",
          },
        ],
      },
      {
        link: "/projects",
        linktext: "PROJECTS",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        link: "/clients",
        linktext: "CLIENTS",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        link: "/contacts",
        linktext: "CONTACTS",
        classbody: "secondlayoutbody",
        classname: "secondlayoutname",
        classitem: "secondlayoutitem",
      },
      {
        icon: FaSearch,
        details: "searchicon",
        classbody: "thirdlayoutbody",
        classname: "thirdlayoutname",
        classitem: "thirdlayoutitem",
      },
      {
        component: SearchField,
        details: "iconsfield",
        classbody: "fourlayoutbody",
        classname: "fourlayoutname",
        classitem: "fourlayoutitem",
      },
    ],
  },
  {
    classmain: "thirdLayout",
    section: [
      {
        icon: FiMenu,
        details: "hambuggger",
        classbody: "thirdlayoutbody",
        classname: "thirdlayoutname",
        classitem: "thirdlayoutitem",
      },
    ],
  },
];
