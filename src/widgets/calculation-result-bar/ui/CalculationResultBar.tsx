import { useMemo } from 'react';

import { motion } from 'framer-motion';

import { Group, Paper, Stack, Text } from '@mantine/core';

import { useCalculatorStore } from '@entities/calculation-session';

import './CalculationResultBar.css';

export const CalculationResultBar = () => {
    const calculationType = useCalculatorStore((s) => s.calculationType);

    const hasData = Boolean(calculationType);

    const result = useMemo(() => {
        return (Math.random() * 100).toFixed(1);
    }, [calculationType]);

    return (
        <motion.div
            className="result-bar-wrapper"
            initial={{
                opacity: 0,
                y: 120,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 120,
            }}
            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 18,
            }}
        >
            <Paper radius="xl" p="lg" className="result-bar">
                <Group justify="space-between" align="center">
                    <Stack gap={2}>
                        <Text size="sm" c="rgba(255,255,255,0.7)">
                            Результат расчета
                        </Text>

                        <Text fw={800} size="36px">
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
