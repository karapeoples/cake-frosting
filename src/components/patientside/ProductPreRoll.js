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
						<Card outline color='success' style={{ height: '750px', margin: '2%', color: '#28A745', backgroundColor: 'whitesmoke' }}>
							<CardBody>
							<div style={{margin: '2%'}}>
								<CardImg
									src={`${singlePR.image}/318x180`}
									alt='Company Pre-Roll'
									style={{ display:'block', width: '75%', height: '200px', margin: '0 auto' }}
								/>
							</div>
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
