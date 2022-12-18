const CountLabel = ({children = 0}) => {
    return (
      <span className={`Count w-100 d-inline-block text-center unClicked px-1 py-2  mb-1 text-light`}

        style={{
          borderBottomLeftRadius:"25px",
          background:'#00f'
        }}
      >
        {children}
      </span>
    )
  }
  
export default CountLabel