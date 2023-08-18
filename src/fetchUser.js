const fetchUser = async ({ queryKey }) => {
  const name = queryKey[1];

  const apiRes = await fetch(`https://api.github.com/users/${name}`);

  if (!apiRes.ok) {
    throw new Error(`details/${name} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchUser;
