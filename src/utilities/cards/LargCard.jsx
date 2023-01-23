import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LargCard = ({loading,children,h}) => {
  if(loading){

    return(
      <div className='Card col col-sm-6 col-md-3 px-2 position-relative bg-white'>    
        <div className='Skeleton-container'>
          <Skeleton width={'100%'} height={'100%'}/>
        </div>
      </div>
    )
  }
  return (
    <div className='Card col col-sm-6 col-md-3 px-2 position-relative bg-white'>    
        {children}
    </div>
  )
}

export default LargCard