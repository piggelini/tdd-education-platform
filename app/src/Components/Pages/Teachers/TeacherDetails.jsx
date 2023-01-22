import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../Context/data-context';

export default function TeacherDetails() {
  const [teacher, setTeacher] = useState({});

  const context = useContext(DataContext)
  const { id } = useParams();

  useEffect(() => {
    context.getData("teacherlist", id)
      .then((data) => setTeacher(data));
  }, [])

  return (
    <section>
      <h2>{teacher?.firstname} {teacher?.lastname}</h2>
      <p>Personal identification: {teacher.personalid}</p>
      <p>Email: {teacher.email}</p>
      <p>Phone: {teacher.phone}</p>
      <p>
        Competence: {teacher.competences}
      </p>
    </section>
  )
}
