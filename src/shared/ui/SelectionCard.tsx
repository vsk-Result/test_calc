import { Paper, Stack, Text } from '@mantine/core';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type Props = {
    title: string;
    icon: ReactNode;
    selected?: boolean;
    onClick?: () => void;
};

export const SelectionCard = ({ title, icon, selected, onClick }: Props) => {
    return (
        <Paper
            onClick={onClick}
            className={clsx('selection-card', {
                selected,
            })}
            withBorder
            radius="lg"
            p="lg"
        >
            <Stack align="center" justify="center" h="100%" gap="md">
                {icon}

                <Text fw={600} ta="center" lh={1.3}>
                    {title}
                </Text>
            </Stack>
        </Paper>
    );
};
