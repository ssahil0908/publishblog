import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import pic from "./1.jpg";
export default function Sidebar() {
 /* const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []); */
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src={pic}
          alt=""
        />
        <p>
        Lorem ipsum dolor sit amet. Hic omnis dolores et unde temporibus et exercitationem vitae id quaerat dolorum rem corporis sint. Aut sapiente ipsum ut doloremque corporis id quidem aperiam sit modi velit aut quia sapiente sed reprehenderit pariatur. Vel voluptas quia ad voluptas blanditiis est culpa porro est quas quia.</p> 
       <p> Ab distinctio harum sit odit saepe ut suscipit soluta quo dicta commodi est doloremque dolor qui cupiditate beatae et pariatur quia? Eos dolorem omnis quo nihil odio quo eveniet similique aut minus dolore vel Quis accusantium ut officia harum et quisquam aperiam! Ea amet voluptatem ut repudiandae animi aut placeat fugiat et nemo minus sed eius Quis rem excepturi eligendi.
         </p>
         <p>
        Lorem ipsum dolor sit amet. Hic omnis dolores et unde temporibus et exercitationem vitae id quaerat dolorum rem corporis sint. Aut sapiente ipsum ut doloremque corporis id quidem aperiam sit modi velit aut quia sapiente sed reprehenderit pariatur. Vel voluptas quia ad voluptas blanditiis est culpa porro est quas quia.</p> 
         </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-linkedin-in"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}