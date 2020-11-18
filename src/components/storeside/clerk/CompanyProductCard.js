import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditCompanyPR from '../../forms/storeforms/EditCompanyPR'
import AddCurrentCompanyPR from '../../forms/storeforms/AddCurrentCompanyPR'

import {
	removeCurrentCompanyPR,
	getCurrentCompanyPRById,
	pickCompanyPR,
} from '../../../redux/actions'

const CompanyProductCard = () => {
  const singlePR = useSelector((state) => state.companyPR)
  const currentPR = useSelector((state) => state.companyStock)
  const dispatch = useDispatch()
  const [tools, setTools] = useState(false)
  const [stock, setStock] = useState(false)
  const [edit, setEdit] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [addPreRoll, setAddPreRoll] = useState(false)

  const toggleTools = () => {
    setTools(!false)
  }
  const closeTools = () => {
    setTools(false)
  }
  const editToggle = () => {
    setEdit(!false)
    setStock(false)
  }
  const stockToggle = () => {
    setStock(!false)
    setEdit(false)
    dispatch(pickCompanyPR(singlePR.id))
  }
  const addPreRollToggle = () => {
    setAddPreRoll(!false)
    if (currentPR[0] === undefined) {
      return
    }
    dispatch(getCurrentCompanyPRById(currentPR[0].currentPR_id))
  }
  const setDelete = () => {
    setConfirm(!false)
  }
  const submit = () => {
    dispatch(removeCurrentCompanyPR(currentPR[0].currentPR_id))
    setConfirm(false)
    setStock(false)
  }
  const no = () => {
    setConfirm(false)
  }
  return (
    <div>
        <img src={singlePR.image} alt='Company Pre-Roll' style={{ width: '50%', height: '250px' }} />
        <h3>{singlePR.name}</h3>
        <h3>{singlePR.company}</h3>
        <span>
          THC: {singlePR.thc}% | CBD: {singlePR.cbd}% | TERPS: {singlePR.terps}%
			</span>
        <p>Type:{singlePR.type}</p>
        <p> ${singlePR.price}</p>
        <button onClick={toggleTools}>Tools</button>
        <button onClick={closeTools}>Close Tools</button>
      {tools === false ? null :
        <section>
          <button onClick={editToggle}>Edit Info</button>
          {edit === false ? null : <EditCompanyPR setToggle={setEdit} />}
          <button onClick={stockToggle}>Current Stock</button>
          {stock === false ? null :
            <div>
              <button onClick={addPreRollToggle}>Add</button>
              {addPreRoll === false ? null : <AddCurrentCompanyPR setStockToggle={setStock} setToggle={setAddPreRoll} />
              }
              <button onClick={setDelete}>Delete</button>
              {confirm === false ? null :
                <div>
                  <button onClick={submit}>Yes</button>
                  <button onClick={no}>No</button>
                </div>
              }
            </div>
          }
        </section>
      }
    </div>
  )
}



export default CompanyProductCard
