export default cookies => {
  if (!cookies) return;
  const cookie = cookies
    .split(' ')
    .filter(cookie => cookie.includes('dnd_commissions'))[0];
  if (!cookie) return;
  return cookie.split('=')[1];
};
