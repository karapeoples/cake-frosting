import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentCompanyPR } from '../../redux/actions'
import { Col, Row, Card, CardBody, CardImg } from 'reactstrap'

const ProductPreRoll = () => {
  const companyStock = useSelector((state) => state.companyStock)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentCompanyPR())
  }, [dispatch])

  return (
			<Row>
				{companyStock.map((singlePR, i) => (
					<Col Col lg='4' sm='12' key={singlePR.id}>
						<Card
							outline
							color='success'
							style={{ margin: '2%', color: '#28A745', backgroundColor: 'whitesmoke' }}>
							<CardBody>
								<div style={{ margin: '2%' }}>
									<CardImg
										src={singlePR.image}
										alt='Company Pre-Roll'
										style={{ display: 'block', width: '318px', height: '180px', margin: '0% auto' }}
									/>
								</div>
								<h3>
									Name:
									<br />
									{singlePR.name}
								</h3>
								<h5>
									Company:
									<br />
									{singlePR.company}
								</h5>
								<span>
									THC: {singlePR.thc}% | CBD: {singlePR.cbd}% | TERPS: {singlePR.terps}%
								</span>
								<p>Type:{singlePR.type}</p>
								{singlePR.is_infused === 'true' ? <p>Infused: Yes</p> : <p>Infused: No</p>}
								<p> ${singlePR.price}</p>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		)
}

export default ProductPreRoll
