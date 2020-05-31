export default cookies => {
  if (!cookies) {
    return;
  }
  return cookies
    .split(' ')
    .filter(cookie => cookie.includes('dnd_commissions'))[0]
    .split('=')[1];
};
