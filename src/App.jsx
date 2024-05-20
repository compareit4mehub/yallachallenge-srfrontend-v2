import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetailPage, UserList } from './components';
import { LANGUAGES } from './constant';
import { useTranslation } from "react-i18next";

export default function App() {
  const { i18n, t } = useTranslation();


  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    localStorage.setItem('i18nextLng', lang_code);
  };



  return (
    <Router>
      <div className='px-4 py-2 bg-black mb-4 justify-between items-center flex flex-wrap'>
        <h1 className=" text-white  font-semibold  text-3xl capitalize">Github {t('users')}</h1>
        <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <main className="container w-[95%] mx-auto">
        <div className="flex flex-wrap justify-center">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:name" element={<UserDetailPage />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}