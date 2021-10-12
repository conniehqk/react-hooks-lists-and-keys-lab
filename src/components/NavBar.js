import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link)=>{
    const h = '#'+link
    return <a key={link} href={h}>{link}</a>
  })

  return <nav>{linkElements}</nav>;
}

export default NavBar;
