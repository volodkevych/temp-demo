import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState(() => 
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000) + 1).join(', ')
  );
  const [algorithm, setAlgorithm] = useState('bubble');
  const [result, setResult] = useState<number[]>([]);
  const [sortTime, setSortTime] = useState<number | null>(null);

  const bubbleSort = (arr: number[]) => {
    const sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - i - 1; j++) {
        if (sorted[j] > sorted[j + 1]) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
    return sorted;
  };

  const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
  };

  const insertionSort = (arr: number[]) => {
    const sorted = [...arr];
    for (let i = 1; i < sorted.length; i++) {
      const key = sorted[i];
      let j = i - 1;
      while (j >= 0 && sorted[j] > key) {
        sorted[j + 1] = sorted[j];
        j--;
      }
      sorted[j + 1] = key;
    }
    return sorted;
  };

  const handleSort = () => {
    const numbers = input.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    let sorted: number[] = [];
    
    const start = performance.now();
    if (algorithm === 'bubble') sorted = bubbleSort(numbers);
    else if (algorithm === 'quick') sorted = quickSort(numbers);
    else if (algorithm === 'insertion') sorted = insertionSort(numbers);
    const end = performance.now();
    
    setResult(sorted);
    setSortTime(end - start);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Number Sorter</h1>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas (e.g., 5, 2, 8, 1)"
          style={{ width: 400, padding: 8, marginRight: 10 }}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={{ marginRight: 10 }}>
          <input type="radio" value="bubble" checked={algorithm === 'bubble'} onChange={(e) => setAlgorithm(e.target.value)} />
          {' '}Bubble Sort
        </label>
        <label style={{ marginRight: 10 }}>
          <input type="radio" value="quick" checked={algorithm === 'quick'} onChange={(e) => setAlgorithm(e.target.value)} />
          {' '}Quick Sort
        </label>
        <label>
          <input type="radio" value="insertion" checked={algorithm === 'insertion'} onChange={(e) => setAlgorithm(e.target.value)} />
          {' '}Insertion Sort
        </label>
      </div>
      <button onClick={handleSort} style={{ padding: '8px 16px' }}>Sort</button>
      {result.length > 0 && (
        <div style={{ marginTop: 20, fontSize: 18 }}>
          <strong>Sorted:</strong> {result.join(', ')}
          {sortTime !== null && (
            <div style={{ marginTop: 10, fontSize: 14, color: '#666' }}>
              Time: {sortTime.toFixed(2)}ms
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
