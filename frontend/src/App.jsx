// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AttendanceTable from './components/AttendanceTable';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TestimonialsCTA from './components/TestimonialsCTA';
import Footer from './components/Footer';
import StudentModal from './components/StudentModal';

export default function App() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setStudents([
      { _id: '1', studentId: 'STU-101', name: 'Rahim Ahmed', department: 'CSE', roll: '01' },
      { _id: '2', studentId: 'STU-102', name: 'Nusrat Jahan', department: 'EEE', roll: '02' },
      { _id: '3', studentId: 'STU-103', name: 'Tanvir Hossain', department: 'BBA', roll: '03' },
    ]);
  }, []);

  const handleStatusChange = (id, status) => {
    setAttendance((prev) => ({ ...prev, [id]: status }));
  };

  const handleAddStudent = (newStudentData) => {
    const newStudent = { ...newStudentData, _id: Date.now().toString() };
    setStudents((prev) => [newStudent, ...prev]);
    setIsModalOpen(false);
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.studentId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Hero />
        <AttendanceTable
          students={filteredStudents}
          attendance={attendance}
          onStatusChange={handleStatusChange}
          date={date}
          setDate={setDate}
          search={search}
          setSearch={setSearch}
        />
        <Features />
        <Pricing />
        <TestimonialsCTA />
      </div>

      <Footer />

      <StudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddStudent={handleAddStudent}
      />
    </div>
  );
}