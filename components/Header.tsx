
import React from 'react';

const Header: React.FC = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(today);

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
        Daftar Tugas Harian
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
        {formattedDate}
      </p>
    </div>
  );
};

export default Header;
