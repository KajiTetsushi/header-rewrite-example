import React, { useEffect, useState } from 'react';

import { selectData } from '~lib/fetch';
import { Api } from './Api';

export type Cat = string;

export const catsUrl = '/cats';
export const api = Api(catsUrl);

export const Cats = () => {
  const [ fetching, setFetching ] = useState(false);
  const [ cats, setCats ] = useState<Cat[]>([]);
  useEffect(() => {
    const fetchCats = async () => {
      setFetching(true);
      const cats = await api.get<Cat[]>('/?type=xhr').then(selectData);
      setCats(cats);
      setFetching(false);
    };
    fetchCats();
  }, []);

  return (
    <div>
      <h2>Cats (JavaScript AJAX)</h2>
      {fetching && (
        <div>
          Fetching cats...
        </div>
      )}
      {!fetching && cats.length && (
        <ul>
          {cats.map((cat, index) => (
            <li
              key={index}
              className="cat"
            >
              <img
                src={cat}
                alt="Arthur the Cat"
              />
            </li>
          ))}
        </ul>
      )}
      {!fetching && !cats.length && (
        <div>
          No cats are available at this time.
        </div>
      )}
    </div>
  );
};
