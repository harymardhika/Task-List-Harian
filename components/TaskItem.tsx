
import React from 'react';
import { Task } from '../types';
import { TrashIcon, CheckIcon } from './icons';

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <div className="flex items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm mb-3 transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => onToggleTask(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 mr-4 ${
          task.completed ? 'bg-green-500 border-green-500' : 'border-slate-300 dark:border-slate-600 hover:border-green-400'
        }`}
        aria-label={task.completed ? 'Tandai sebagai belum selesai' : 'Tandai sebagai selesai'}
      >
        {task.completed && <CheckIcon className="w-4 h-4 text-white" />}
      </button>
      <span className={`flex-grow text-slate-700 dark:text-slate-300 transition-all duration-300 ${task.completed ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
        {task.text}
      </span>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="text-slate-400 hover:text-red-500 transition-colors duration-300 ml-4"
        aria-label="Hapus Tugas"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TaskItem;
