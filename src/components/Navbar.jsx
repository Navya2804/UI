import { useTranslation } from 'react-i18next';

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

import ThemeToggle from './ThemeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleDark }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-14 z-50 flex justify-between items-center bg-white dark:bg-gray-800 px-6 shadow">
      <div className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
        <FontAwesomeIcon icon={faArrowUpRightDots} className="text-blue-600" />
        <span>NextStep Finance</span>
      </div>
      <div className="flex gap-4 items-center">
        {/* Language Dropdown */}
        <select
          onChange={changeLanguage}
          defaultValue={i18n.language}
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
        <ThemeToggle toggleDark={toggleDark} />
        <div className="flex items-center gap-2 text-gray-800 dark:text-white">
          <FontAwesomeIcon icon={faCircleUser} className="text-2xl text-blue-600" />
          <span>Sachin Sharma</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;