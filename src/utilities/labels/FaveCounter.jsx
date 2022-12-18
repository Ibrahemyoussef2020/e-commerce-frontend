import { useSelector } from 'react-redux'

import Count from './CountLabel'

const FaveCounter = ({id}) => {
  
  const {favorites }= useSelector(state => state.favorite)
  
  const find = favorites?.find(fav => fav.id === id)

  return (
    <>
        <Count/>
        <i className={`Fav fa-${find ?'solid':'regular'} fa-heart text-danger clicked`}></i>
    </>
  )
}

export default FaveCounter