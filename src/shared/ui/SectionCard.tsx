import { Paper } from '@mantine/core';
import { type PropsWithChildren } from 'react';

export const SectionCard = ({ children }: PropsWithChildren) => {
    return (
        <Paper withBorder radius="lg" p="xl">
            {children}
        </Paper>
    );
};
