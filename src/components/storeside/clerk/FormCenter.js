import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getAllFlowers, getCompanyPR} from '../../../redux/actions'
import AddFlower from '../../forms/storeforms/AddFlower'
import AddCompanyPreRoll from '../../forms/storeforms/AddCompanyPreRoll.js'
import CompanyPRCard from './CompanyPRCard'
import FlowerProductCard from './FlowerProductCard'

const FormCenter = () => {
  const dispatch = useDispatch()
  const [flower, setFlower] = useState(false)
  const [preRoll, setPreRoll] = useState(false)
  const [addFlowerForm, setAddFlowerForm] = useState(false)
  const [addPreRollForm, setAddPreRollForm] = useState(false)
  const[flowerProduct, setFlowerProduct] = useState(false)
  const[preRollProduct, setPreRollProduct] = useState(false)


  const flowerSectionToggle = () => {
    flower === false ? setFlower(!false) : setFlower(false)
    setPreRoll(false)
}
  const companyPRToggle = () => {
    preRoll === false ? setPreRoll(!false) : setPreRoll(false)
    setFlower(false)
}
const flowerAddToggle = () => {
	addFlowerForm === false ? setAddFlowerForm(!false) : setAddFlowerForm(false)
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
				<section>
					<button onClick={flowerSectionToggle}>Flower & In House Toggle</button>
					{flower === !false ? (
						<div>
							<button onClick={flowerAddToggle}>Add New Flower</button>
							{addFlowerForm === !false ? <AddFlower setToggle={setAddFlowerForm} /> : null}
							<button onClick={flowerProductToggle}>Current Product Tools</button>
							{flowerProduct === !false ? <FlowerProductCard setToggle={setFlowerProduct} /> : null}
						</div>
					) : null}
				</section>
				<section>
					<button onClick={companyPRToggle}>Company Pre Roll</button>
					{preRoll === false ? null : (
						<div>
							<button onClick={preRollAddToggle}>Add New Company PreRoll</button>
							{addPreRollForm === !false ? <AddCompanyPreRoll setToggle={setAddPreRollForm} /> : null}
							<button onClick={preRollProductToggle}>Current Product Tools</button>
							{preRollProduct === !false ? <CompanyPRCard setToggle={setPreRollProduct} /> : null}
					</div>
				)}
				</section>
			</div>
		)
}

export default FormCenter
