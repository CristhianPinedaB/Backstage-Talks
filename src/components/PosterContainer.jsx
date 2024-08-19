import { useEffect, useState } from "react"
import useSnapScroll from "../customeHooks/useSnapScroll"
import { Email } from "./Email"
import { Footer } from "./Footer"
import { Poster } from "./Poster"


export const PosterContainer = ({data_posters}) => {

  const [backgroundColor, setBackgroundColor] = useState("#e30512");

  useSnapScroll();
  
  useEffect(()=>{
    const handScroll = ()=>{
      const contenedor = document.querySelectorAll('.div_poster')
      contenedor.forEach((section, index)=>{
        const rect = section.getBoundingClientRect();
        if(rect.top <= window.innerHeight/2  && rect.bottom >= window.innerHeight/2){
          setBackgroundColor(data_posters[index].background_color)
        }
      });
    };
    window.addEventListener('scroll', handScroll)
    return ()=>{window.removeEventListener('scroll', handScroll)}
  },[])

  
  return (
    <div id='poster_container_id' className="div_poster_container" style={{ backgroundColor }}>
        {data_posters?.map(poster => (
            <Poster name={poster.name}
            key={poster.key}
            img={poster.img}
            link_buy={poster.link_buy}
            key_css={poster.key}
            />
            ))}
          <Footer/>
          <Email/>
    </div>
  )
}
