
import React, { useMemo } from 'react';
import { Task } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import ProgressBar from './components/ProgressBar';
import { SparklesIcon } from './components/icons';

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  const handleClearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const completedCount = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);
  const totalCount = tasks.length;
  
  const allTasksCompleted = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <main className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl shadow-slate-200/50 dark:shadow-black/30">
          <TaskInput onAddTask={handleAddTask} />
          
          {tasks.length > 0 && (
              <ProgressBar completed={completedCount} total={totalCount} />
          )}

          <div className="task-list-container space-y-3">
             {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>

          {tasks.length === 0 && (
            <div className="text-center py-10 px-4">
              <p className="text-slate-500 dark:text-slate-400">Daftar tugas Anda kosong.</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm">Mari tambahkan tugas pertama Anda!</p>
            </div>
          )}

          {allTasksCompleted && (
            <div className="text-center py-10 px-4 bg-green-50 dark:bg-green-900/20 rounded-lg mt-6 border border-green-200 dark:border-green-800">
              <SparklesIcon className="mx-auto h-12 w-12 text-green-500" />
              <h3 className="mt-2 text-lg font-semibold text-green-800 dark:text-green-300">Kerja Bagus!</h3>
              <p className="mt-1 text-sm text-green-600 dark:text-green-400">Semua tugas telah diselesaikan untuk hari ini.</p>
            </div>
          )}

          {completedCount > 0 && !allTasksCompleted && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleClearCompleted}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300"
              >
                Hapus Tugas yang Selesai
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
