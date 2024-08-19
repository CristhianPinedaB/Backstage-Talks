

export const Poster = ({name, img, link_buy, key_css}) => {
  return (
    <section id={`poster_${key_css}`} className={`div_poster issue_${key_css}`}>
        <img src={img} alt="esta es una imagen" />
        <p className="p_name_poster">{name}</p>
        <a className="a_link_buy" href={link_buy}>BUY HERE</a>
        <p>or in <a className="a_selected_stores" href="">selected stores</a></p>
    </section>
  )
}
