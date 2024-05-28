import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import common_ja from "./translations/ja/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
        ja: {
            common: common_ja
        },
    },
});


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>,
);
