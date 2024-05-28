import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLanguage } from './contexts/LanguageContext';

export const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation('common');
    const { setLanguage } = useLanguage();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang); // Update context
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={toggleMenu}>
               <img src="/globe.png"
                    alt="language choices"
                    className="w-6 h-6 inline-block" />
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => { changeLanguage('fr'); toggleMenu(); }}>
                            français
                        </button>
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => { changeLanguage('en'); toggleMenu(); }}>
                            English
                        </button>
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={() => { changeLanguage('ja'); toggleMenu(); }}>
                            日本語
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

