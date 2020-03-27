
import Icons from "views/Icons.jsx";
import Question from "views/Question.jsx";
import Network from "views/Network.jsx";
import Home from "views/Home.jsx";

export const adminRoute = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "pe-7s-photo-gallery",
    component: Home,
    layout: "/admin"
   },
   {
    path: "/icon",
    name: "Rule Setter",
    icon: "pe-7s-photo-gallery",
    component: Question,
    layout: "/admin"
   },
   {
    path: "/network",
    name: "Network Topology",
    icon: "pe-7s-photo-gallery",
    component: Network,
    layout: "/admin"
   }

  ]
export default {adminRoute} ;
