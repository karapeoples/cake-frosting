import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllFlowers, getCompanyPR } from '../../../redux/actions'
import StoreNav from './StoreNav'
import AddFlower from '../../forms/storeforms/AddFlower'
import AddCompanyPreRoll from '../../forms/storeforms/AddCompanyPreRoll.js'
import CompanyPRCard from './CompanyPRCard'
import FlowerProductCard from './FlowerProductCard'
import {Button} from 'reactstrap'

const FormCenter = () => {
  const dispatch = useDispatch()
  const [flower, setFlower] = useState(false)
  const [preRoll, setPreRoll] = useState(false)
  const [addFlowerForm, setAddFlowerForm] = useState(false)
  const [addPreRollForm, setAddPreRollForm] = useState(false)
  const[flowerProduct, setFlowerProduct] = useState(false)
  const[preRollProduct, setPreRollProduct] = useState(false)


  const flowerSectionToggle = () => {
		setFlower(!flower)
		setPreRoll(false)
}
  const companyPRToggle = () => {
    setFlower(false)
		setPreRoll(!preRoll)
}
const flowerAddToggle = () => {
	setAddFlowerForm(!addFlowerForm)
}
const preRollAddToggle = () => {
	addPreRollForm === false ? setAddPreRollForm(!false) : setAddPreRollForm(false)
}
const flowerProductToggle = () => {
  dispatch(getAllFlowers())
  setFlowerProduct(!false)

}
const preRollProductToggle = () => {
  dispatch(getCompanyPR())
  setPreRollProduct(!false)
}

  return (
			<div>
				<StoreNav />
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<section style={{width: "50%"}}>
						<span onClick={flowerSectionToggle} className={flower === false ? 'n-link' : 'active'}>
							Flower & In House PreRolls
						</span>
						{flower === !false ? (
							<div style={{ margin: '5%', display: 'flex', justifyContent: 'space-evenly' }}>
								<Button color='success' size='sm' onClick={flowerAddToggle}>
									Add New Flower
								</Button>
							{addFlowerForm === !false ? <AddFlower open={addFlowerForm} setToggle={setAddFlowerForm} /> : null}
								<Button color='success' size='sm' onClick={flowerProductToggle}>
								Stock Tools
								</Button>
							</div>
						) : null}<div>
								{flowerProduct === !false ? <FlowerProductCard setToggle={setFlowerProduct} />: null}
							</div>
					</section>
					<section style={{width: '50%'}}>
						<span onClick={companyPRToggle} className={preRoll === false ? 'n-link' : 'active'}>
							Company PreRolls
						</span>
						{preRoll === false ? null : (
							<div style={{ margin: '5%', display: 'flex', justifyContent: 'space-evenly' }}>
								<Button color='success' size='sm' onClick={preRollAddToggle}>
									Add New PreRoll
								</Button>
								{addPreRollForm === !false ? <AddCompanyPreRoll setToggle={setAddPreRollForm} /> : null}
								<Button color='success' size='sm' onClick={preRollProductToggle}>
									Stock Tools
								</Button>
								{preRollProduct === !false ? <CompanyPRCard setToggle={setPreRollProduct} /> : null}
							</div>
						)}
					</section>
				</div>
			</div>
		)
}

export default FormCenter
