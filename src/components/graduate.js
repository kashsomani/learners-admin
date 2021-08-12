import { updateStudentGrade, deleteStudent } from "../firebase";
export default async function graduate(updates, deletes){
    await deletes.forEach(async el=>{
       await deleteStudent(el.id)
    })
    await updates.forEach(async el=>{
       await updateStudentGrade(el.id, el.grade+1)
    })
}
