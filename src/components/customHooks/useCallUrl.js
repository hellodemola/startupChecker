import { useEffect, useState } from 'react';

const useCallUrl = (isCompleted) => {
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const data = await fetch('https://uselessfacts.jsph.pl/random.json')
    const json = await data.json();
    setQuote(json.text);
  }

  useEffect(() => {
    if (isCompleted) {
      getQuote();
    }
    else {
      return setQuote('');
    }
  }, [isCompleted])

  return { quote };
};

export default useCallUrl;
