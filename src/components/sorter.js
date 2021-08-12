export function sortByEmail(students){
    return students.sort((a,b)=> a.email.localeCompare(b.email))
}
export function sortByGrade(students){
    return students.sort((a,b)=> (a.grade - b.grade))
}
export function sortByName(students){
    return students.sort((a,b)=> a.name.localeCompare(b.name))
}