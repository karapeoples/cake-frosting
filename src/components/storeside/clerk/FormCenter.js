import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getAllFlowers} from '../../../redux/actions'
import AddFlower from '../../forms/storeforms/AddFlower'
import FlowerProductCard from './FlowerProductCard'

const FormCenter = () => {
  const dispatch = useDispatch()
  const [flower, setFlower] = useState(false)
  const [addFlowerForm, setAddFlowerForm] = useState(false)
  const[flowerProduct, setFlowerProduct] = useState(false)


  const flowerSectionToggle = () => {
  flower === false ? setFlower(!false): setFlower(false)
}
const flowerAddToggle = () => {
	addFlowerForm === false ? setAddFlowerForm(!false) : setAddFlowerForm(false)
}
const flowerProductToggle = () => {
  dispatch(getAllFlowers())
  setFlowerProduct(!false)

}
  return (
			<div>
				<section>
        <button onClick={flowerSectionToggle}>Flower & In House Toggle</button>
        {flower === !false ?
          <div>
            <button onClick={flowerAddToggle}>Add New Flower</button>
            {addFlowerForm === !false ? <AddFlower setToggle={setAddFlowerForm}/> : null}
            <button onClick={flowerProductToggle}>Current Product Tools</button>
            {flowerProduct === !false ? <FlowerProductCard setToggle={setFlowerProduct}/>:null}
          </div>
          :null
        }
				</section>
				<section>
					<span>Company Pre Roll</span>
					<h1>Add Form Toggle</h1>
					<p>PRODUCT CARD WITH ALL THE FUN</p>
				</section>
			</div>
		)
}

export default FormCenter
