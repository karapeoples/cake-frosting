import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentFlower } from '../../redux/actions'
import {Col, Row, Card, CardBody, CardImg} from 'reactstrap'

const ProductFlower = () => {
  const stock = useSelector((state) => state.stockFlower)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentFlower())
  }, [dispatch])
  return (
			<Row>
				{stock.map((flower, i) => (
					<Col lg='4' sm='12' key={flower.id}>
						<Card outline color='success' style={{height:'500px', margin: '2%', color: '#28A745', backgroundColor: 'whitesmoke' }}>
							<div>
								<CardImg
									src={flower.image}
									alt='bud'
									style={{ display: 'block', width: '75%', height: '50%', margin: '2% auto' }}
								/>
							</div>
							<CardBody>
								<h3>{flower.name}</h3>
								<span>
									THC: {flower.thc}% | CBD: {flower.cbd}% | TERPS: {flower.terps}%
								</span>
								<p>Type:{flower.type}</p>
								{flower.is_infused === 'true' ? <p>Infused: Yes</p> : <p> Infused: No</p>}
								<p>
									Gram ${flower.pricePerGram}|1/8 ${flower.pricePerGram * 3.5}|1/4 ${flower.pricePerGram * 7}|OZ $
									{flower.pricePerGram * 28}
								</p>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		)
}

export default ProductFlower
