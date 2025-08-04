'use client';

import { useEffect, useState } from 'react';

const JsonSelector = () => {
  const [selectedFile, setSelectedFile] = useState('file1.json');
  const [data, setData] = useState<any[]>([]);

  const fetchJson = async (fileName: string) => {
    try {
      const res = await fetch(`/data/${fileName}`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching JSON:", error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchJson(selectedFile);
  }, [selectedFile]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Choose a JSON File</h1>
      <select
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="file1.json">File 1</option>
        <option value="file2.json">File 2</option>
        <option value="file3.json">File 3</option>
      </select>

      <div className="space-y-10">
        {data.map((item) => (
          <div key={item.id} className="p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JsonSelector;
