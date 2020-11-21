import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {flowerByName} from '../../../redux/actions'
import InHouseProductCard from './InHouseProductCard'
import {Button, Input} from 'reactstrap'

const FlowerProductCard = ({setToggle}) => {
  const flowerName = useSelector(state => state.allFlowers)
  const dispatch = useDispatch()
  const [toggleProduct, setToggleProduct]=useState(false)
  const [search, setSearch] = useState('')
  


  const cancel = () => {
    setToggle(false)
    setToggleProduct(false)
}

  const handleChange = async (e) => {
    await setSearch(e.target.value)
  }
  const select = (e) => {
  e.preventDefault()
    if (search !== '') {
      dispatch(flowerByName(search))
      setToggleProduct(!false)
    }
    else if (search === '') {
      alert('Choose A Strain')
    }
  }


  return (
			<div>
				<section>
					<form onSubmit={select}>
          <Input bsSize='sm' onClick={handleChange} onChange={handleChange} type='select' name='search' value={search}>
            {flowerName.map((strain, i) => {
              return <option  key={i}>{strain.name}</option>
            })}
          </Input>
          <div style={{ margin: '3% auto' }}>
          <Button color='success' size='sm'>Select</Button>
          <Button color='danger' size='sm' onClick={cancel}>Cancel</Button>
          </div>
					</form>
      </section>
      {toggleProduct === !false ?
        <section>
          <InHouseProductCard/>
        </section>
        : null
      }

			</div>
		)
}

export default FlowerProductCard
