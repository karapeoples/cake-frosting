import React, {useState} from 'react'
import AdminNav from './AdminNav'
import ClerkList from './ClerkList'

const AdminDash = () => {
  const [toggleClerks, setToggleClerks] = useState(false)
  const [togglePatients, setTogglePatients] = useState(false)
  const [toggleAdmins, setToggleAdmins] = useState(false)

  const clerkToggle = () => {
    setToggleClerks(!false)
    setTogglePatients(false)
    setToggleAdmins(false)
  }
  const patientToggle = () => {
    setToggleClerks(false)
    setTogglePatients(!false)
    setToggleAdmins(false)
  }
  const adminToggle = () => {
    setToggleClerks(false)
    setTogglePatients(false)
    setToggleAdmins(!false)
  }

  return (
			<div>
				<AdminNav />
				<div>
					<button onClick={clerkToggle} >Clerks</button>
          <button onClick={patientToggle} >Patients</button>
          <button onClick ={adminToggle} >Admins</button>
      </div>
      <section>
        {toggleClerks === !false ? <div><ClerkList/></div> : null}
        {togglePatients === !false ? <div><h1>Patients Go Here </h1></div> : null}
        {toggleAdmins === !false ? <div><h1>Admins Go Here </h1></div> : null}
      </section>
			</div>
		)
}

export default AdminDash
