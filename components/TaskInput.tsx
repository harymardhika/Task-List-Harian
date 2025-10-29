
import React, { useState } from 'react';
import { PlusIcon } from './icons';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tambahkan tugas baru..."
        className="flex-grow p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-slate-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900 transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/50"
        aria-label="Tambah Tugas"
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TaskInput;
