import React, {useState} from 'react'
import AdminNav from './AdminNav'
import ClerkList from './ClerkList'
import PatientList from './PatientList'
import AdminList from './AdminList'

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
					<button onClick={clerkToggle}>Clerks</button>
					<button onClick={patientToggle}>Patients</button>
					<button onClick={adminToggle}>Admins</button>
				</div>
				<section>
					{toggleClerks === !false ? (
						<div>
							<ClerkList />
						</div>
					) : null}
					{togglePatients === !false ? (
						<div>
							<PatientList />
						</div>
					) : null}
					{toggleAdmins === !false ? (
						<div>
							<AdminList />
						</div>
					) : null}
				</section>
			</div>
		)
}

export default AdminDash
