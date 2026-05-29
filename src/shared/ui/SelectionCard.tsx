import { Paper, Stack, Text } from '@mantine/core';
import clsx from 'clsx';
import { type ReactNode } from 'react';

type Props = {
    title: string;
    icon?: ReactNode;
    image?: ReactNode;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

export const SelectionCard = ({
    title,
    icon,
    image,
    selected,
    disabled,
    onClick,
}: Props) => {
    return (
        <Paper
            onClick={disabled ? undefined : onClick}
            className={clsx('selection-card', {
                selected,
                disabled,
            })}
            radius="lg"
            withBorder
            p="lg"
            shadow={'sm'}
        >
            <Stack align="center" justify="center" h="100%" gap="md">
                {icon}
                {image}

                <Text fw={600} ta="center" lh={1.3}>
                    {title}
                </Text>
            </Stack>
        </Paper>
    );
};
