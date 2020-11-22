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
						<Card outline color='success' style={{height:'500px' margin: '2%', color: '#28A745', backgroundColor: 'whitesmoke' }}>
							<div>
								<CardImg
									src={singlePR.image}
									alt='Company Pre-Roll'
									style={{ display:'block', width: '75%', height: '50%', margin: '0 auto', padding: '1%' }}
								/>
							</div>
							<CardBody>
								<h3>
									PreRoll Name:
									<br />
									{singlePR.name}
								</h3>
								<h3>
									Company Name:
									<br />
									{singlePR.company}
                </h3>
                <span>
								THC: {singlePR.thc}% | CBD: {singlePR.cbd}% | TERPS: {singlePR.terps}%</span><p>Type:{singlePR.type}</p>
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
