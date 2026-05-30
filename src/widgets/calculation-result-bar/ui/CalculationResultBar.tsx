import { useMemo, type FC } from 'react';

import { motion } from 'framer-motion';

import { Group, Paper, Stack, Text } from '@mantine/core';

import { useCalculatorStore } from '@entities/calculation-session';

import './CalculationResultBar.css';

export const CalculationResultBar: FC<{ visible: boolean }> = ({ visible }) => {
    const calculationType = useCalculatorStore((s) => s.calculationType);

    const hasData = Boolean(calculationType);

    const result = useMemo(() => {
        return (Math.random() * 100).toFixed(1);
    }, [calculationType]);

    return (
        <motion.div
            className="result-bar-wrapper"
            animate={{
                opacity: !visible ? 0 : 1,
                y: !visible ? 120 : 0,
                pointerEvents: !visible ? 'none' : 'auto',
            }}
            transition={{
                duration: 0.3,
            }}
        >
            <Paper radius="xl" p="md" className="result-bar">
                <Group justify="space-between" align="center">
                    <Stack gap={2}>
                        <Text size="sm" c="rgba(255,255,255,0.7)">
                            Результат расчета
                        </Text>

                        <Text fw={800} size="18px">
                            {hasData ? `${result} мм` : 'Введите все данные'}
                        </Text>
                    </Stack>

                    <Text size="sm" c="rgba(255,255,255,0.7)">
                        Теплоизоляция
                    </Text>
                </Group>
            </Paper>
        </motion.div>
    );
};
