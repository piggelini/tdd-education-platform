import { React, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../../Context/data-context';

export default function TeacherDetails() {
  const context = useContext(DataContext)
  const { id } = useParams();

  useEffect(() => {
    context.getData("teacherlist", id);
  }, [])


  console.log(context.teacher.firstname)


  return (
    <h2>{context.teacher.firstname} {context.teacher.lastname}</h2>
  )
}
