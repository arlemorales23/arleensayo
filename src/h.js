const user = {
    firstName: 'Arle',
    lastName: 'Morales Ortiz'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  

const ProjectsPage2 = ()=>{
  if (Object.keys(user).length === 0) {
    return 'Hello, Stranger.'
  }
  return `Hello, ${formatName(user)}!`
}

console.log(ProjectsPage2())