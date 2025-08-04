'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../src/store';
import { useEffect, useState } from 'react';

const JsonViewer = () => {
  const fileName = useSelector((state: RootState) => state.file.fileName);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/data/${fileName}`)
      .then(res => res.json())
      .then(json => setData(json));
  }, [fileName]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Showing: {fileName}</h2>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="p-2 border rounded">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JsonViewer;
