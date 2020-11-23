import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentPR } from '../../redux/actions'
import {Spinner} from 'reactstrap'

const ProductInHouse = () => {
  const inHouse = useSelector((state) => state.inHouse)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentPR())
  },[dispatch])
  return (
			<div>
			<h1>$5 PreRolls</h1>
			{inHouse.length === 0 ? <div style={{margin: '0 auto'}}><Spinner color='success' size='sm'/> <Spinner color='success' size='sm'/> <Spinner color='success' size='sm'/></div> :
				inHouse.map((pr, i) => (
					<ul key={pr.id}>
						<h5>
							<li>
								<b><em>{pr.name} ~~ {pr.is_infused === 'true' ? 'Infused: Yes' : 'Infused: No'}~~ Type:{pr.type}</em></b>
							</li>
						</h5>
					</ul>
				))}
			</div>
		)
}

export default ProductInHouse
