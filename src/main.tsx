import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppProvider } from '@app/providers';

import { App } from '@app/index';
import '@mantine/core/styles.css';
import '@shared/styles/global.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </StrictMode>,
);
