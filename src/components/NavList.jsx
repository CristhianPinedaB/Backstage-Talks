
export const NavList = ({data_posters}) => {

  return (
    <nav className="nav_list">
        <ul className="ul_list">
            {data_posters?.map(poster => (<li key={poster.key}><a  href={`#poster_${poster.key}`} >{poster.name}</a></li>))}
        </ul>
    </nav>
  )
}
