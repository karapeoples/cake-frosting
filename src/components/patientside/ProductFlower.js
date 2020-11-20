import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCurrentFlower} from '../../redux/actions'

const ProductFlower = () => {
  const stock = useSelector((state) => state.stockFlower)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentFlower())
  }, [dispatch])
  return (
			<div>
				{stock.map((flower, i) => (
					<div key={flower.id}>
						<div>
							<img src={flower.image} alt='bud' style={{ width: '50%', height: '250px' }} />
						</div>
						<div>
							<h3>{flower.name}</h3>
							<span>
								THC: {flower.thc}% | CBD: {flower.cbd}% | TERPS: {flower.terps}%
							</span>
							<p>Type:{flower.type}</p>
							{flower.is_infused === 'true' ?
								<p>Infused: Yes</p> : <p> Infused: No</p>
							}
              <p> Gram ${flower.pricePerGram}|1/8 ${flower.pricePerGram * 3.50}|1/4 ${flower.pricePerGram * 7}|OZ ${flower.pricePerGram * 28}</p>
						</div>
					</div>
				))}
			</div>
		)
}

export default ProductFlower
