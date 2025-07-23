import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBox, faHeart, faWallet, faUsers, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [hover, setHover] = useState(false);

  const links = [
    { to: '/', icon: faChartLine, label: 'Dashboard' },
    { to: '/stock', icon: faBox, label: 'Stock' },
    { to: '/favorite', icon: faHeart, label: 'Favorite' },
    { to: '/wallet', icon: faWallet, label: 'Wallet' },
    { to: '/community', icon: faUsers, label: 'Our Community' },
    { to: '/profile', icon: faUser, label: 'Profile' },
    { to: '/contact', icon: faEnvelope, label: 'Contact Us' },
  ];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="bg-white dark:bg-gray-800 border-r dark:border-gray-700 h-screen transition-all duration-300"
      style={{ width: hover ? '200px' : '60px' }}
    >
      <div className="p-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className="flex items-center gap-2 p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
          >
            <FontAwesomeIcon icon={link.icon} />
            {hover && <span>{link.label}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
