export const logout = () => {
  localStorage?.removeItem('token');
  localStorage?.removeItem('username');
  console.log('loggedout');
};
