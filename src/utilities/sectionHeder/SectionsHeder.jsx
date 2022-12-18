const SectionHeder = ({icon,title,v='full'}) => {

  return (
    <header className='d-flex justify-content-between px-1 mb-2'>
        <span style={{fontSize:'15px'}}><i className={`fa-solid ${icon} mx-1 text-danger`}></i>{title}</span>
        
          {
            v === 'full' ? 
            <span className='view-all closed'>
              view all <i className="fa-solid fa-caret-right"></i>
            </span>
            : <span></span>
          }
        
    </header>
  )
}

export default SectionHeder