import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkMode () {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.querySelector('body').setAttribute('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div onClick={() => setDarkMode(!darkMode)} className="dark_mode">
      { darkMode ? <MdLightMode /> : <MdDarkMode /> }
    </div>
  )
}

export default DarkMode;