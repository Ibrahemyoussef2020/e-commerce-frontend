import './HeadBar.css'
const HeadBar = () => {
  return (
    <header className='HeadBar px-2 py-1 row justify-content-between text-light'>
            
            <ul className='list-none col col-sm-7 col-12 m-0 d-flex justify-content-around align-items-center'>
                <li className="call">
                    <a><i className="f fa-thin fa-phone"></i></a>
                    <a>+04865288</a>
                </li>
                <li>
                    <a><i className="f fa-solid fa-envelope"></i></a>
                    <a>www.@Blonk.com</a>
                </li>
            </ul>
            
            <ul className='list-none col col-sm-5 col-12 m-0 d-sm-flex d-none justify-content-around align-items-center'>
                <li>
                    <a><i className="f fa-solid fa-circle-question"></i></a>
                    <a>help</a>
                </li>
                <li>
                    <a></a>
                </li>
                <li className="flag">                   
                    <a>
                        <img src="flags/un_flag..webp" alt="Un" />
                    </a>
                    <a >USD</a>                   
                </li>
                <li className="flag">
                    <a>
                        <img src="flags/eg_flag..webp" alt="Eg" />
                    </a>
                    <a>PND</a>          
                </li>
            </ul>
    </header>
  )
}

export default HeadBar