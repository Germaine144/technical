const userRoles = ['admin', 'instructor', 'student'];
function countRoles(roles){
    return roles.length;
}
function generateWelcomeMessage(roles) {
    const count = countRoles(roles);
    let message = '';
  
    if (count === 0) {
      message = 'Welcome!';
    } else if (count === 1) {
      message = `Welcome, ${roles[0]}!`;
    } else {
      message = `Welcome, ${roles.join(', ')}!`;
    }
  
    return message;
  }
  
  const welcomeMessage = generateWelcomeMessage(userRoles);
  console.log(welcomeMessage);