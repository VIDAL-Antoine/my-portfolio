import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';

const LanguageSwitcher = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'fr';

  const handleChange = (lang: string) => {
    const newPath = location.pathname.replace(/^\/(fr|en)/, `/${lang}`);
    navigate(newPath);
  };

  return (
    <Select
      value={currentLang}
      onChange={(e) => handleChange(e.target.value)}
      size="small"
      sx={{ color: '#fff', borderColor: '#fff', marginRight: 2 }}
    >
      <MenuItem value="fr">FR</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
