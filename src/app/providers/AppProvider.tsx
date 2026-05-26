import { MantineProvider } from '@mantine/core';
import { type PropsWithChildren } from 'react';

export const AppProvider = ({ children }: PropsWithChildren) => {
    return <MantineProvider defaultColorScheme="light">{children}</MantineProvider>;
};
