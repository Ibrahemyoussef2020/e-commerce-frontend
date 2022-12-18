const TitleLabel = ({bg='#f00',children}) => {

  return (
    <label className={`fit-content px-2 position-absolute `} style={{
        top:'7px',
        left:'7px',
        borderRadius:'15px',
        fontSize:'13px',
        color:'#fff',
        background:bg
    }}>{children}</label>
  )
}

export default TitleLabel