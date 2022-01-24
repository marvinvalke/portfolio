import { useEffect } from "react";

function Mouse() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const handleCursor = (event) => {
      cursor.style.top = event.pageY + "px";
      cursor.style.left = event.pageX + "px";
    };
    window.addEventListener("mousemove", handleCursor);

    /*  let links = document.querySelectorAll('li');
    links.forEach((link) => {
        link.addEventListener('mouseover' , ()=>{
            link.classList.add('hovered')
        })
        link.addEventListener('mouseleave' , ()=>{
            link.classList.remove('hovered')
        })
    }) */

    const handleOver = () => {
      cursor.classList.add("hovered");
    };
    const handleLeave = () => {
      cursor.style.transition = ".3s ease-out";
      cursor.classList.remove("hovered");
    };

    document.querySelectorAll(".hover").forEach((elem) => {
      elem.addEventListener("mouseover", handleOver);
      elem.addEventListener("mouseleave", handleLeave);
    });
  }, []);

  return <div className="cursor"></div>;
}

export default Mouse;
