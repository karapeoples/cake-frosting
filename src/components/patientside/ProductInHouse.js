import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentPR } from '../../redux/actions'

const ProductInHouse = () => {
  const inHouse = useSelector((state) => state.inHouse)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentPR())
  },[dispatch])
  return (
    <div>
      <h1>$5 PreRolls</h1>
      {inHouse.map((pr, i) => (
        <ul key={pr.id}>
          <h5><li>{pr.name} ~~ {pr.is_infused === 'true' ? 'Infused: Yes' : 'Infused: No'}~~ Type:{pr.type}</li></h5>
        </ul>
      ))}
    </div>
  )
}

export default ProductInHouse
