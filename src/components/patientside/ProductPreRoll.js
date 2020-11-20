import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentCompanyPR } from '../../redux/actions'

const ProductPreRoll = () => {
  const companyStock = useSelector((state) => state.companyStock)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentCompanyPR())
  }, [dispatch])

  return (

    <div>
      {companyStock.map((singlePR, i) => (
        <section key={singlePR.id}>
        <div>
        <img src={singlePR.image} alt='Company Pre-Roll' style={{ width: '50%', height: '250px' }} />
        </div>
        <h3>{singlePR.name}</h3>
        <h3>{singlePR.company}</h3>
        <span>
          THC: {singlePR.thc}% | CBD: {singlePR.cbd}% | TERPS: {singlePR.terps}%
			</span>
          <p>Type:{singlePR.type}</p>
          {singlePR.is_infused === 'true'? <p>Infused: Yes</p> : <p>Infused: No</p>}
          <p> ${singlePR.price}</p>
        </section>
      ))}
      </div>
  )
}

export default ProductPreRoll
