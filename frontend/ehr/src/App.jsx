import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RegisterDoctor,
         LoginDoctor,
         CreateRecord,
         UpdateRecord,
         RegisterPatient,
         LoginPatient,
         ViewRecord,
         ViewSlots,
         BookAvailableSlot,
         RescheduleAppointment,
         CancelAppointment,
         Logout,
        } from './components/index'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register-doctor" element={<RegisterDoctor />} />
          <Route path="/login-doctor" element={<LoginDoctor />} />
          <Route path="/create-record" element={<CreateRecord />} />
          <Route path="/update-record" element={<UpdateRecord />} />
          <Route path="/register-patient" element={<RegisterPatient />} />
          <Route path="/login-patient" element={<LoginPatient />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/view-record" element={<ViewRecord />} />
          <Route path="/view-slots" element={<ViewSlots />} />
          <Route path="/book-slot" element={<BookAvailableSlot />} />
          <Route path="/reschedule-appointment" element={<RescheduleAppointment />} />
          <Route path="/cancel-appointment" element={<CancelAppointment />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App
