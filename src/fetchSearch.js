async function fetchSearch({ queryKey }) {
  const searchName = queryKey[1];

  const res = await fetch(
    `https://api.github.com/search/users?q=${searchName}`
  );

  if (!res.ok) {
    throw new Error(`user search not ok ${searchName}`);
  }

  return res.json();
}

export default fetchSearch;
