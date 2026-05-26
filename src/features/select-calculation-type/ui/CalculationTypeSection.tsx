import { Radio, SimpleGrid, Stack, Text, Title } from '@mantine/core';

import { useCalculatorStore } from '@entities/calculation-session';

import { SectionCard } from '@shared/ui/SectionCard';

const options = [
    {
        value: '1',
        label: 'По нормированной плотности теплового потока',
        description: 'СП 61.13330.2012 - B.2.1',
    },
    {
        value: '2',
        label: 'По заданной плотности теплового потока',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: '3',
        label: 'По заданной температуре наружной поверхности',
        description: 'СП 61.13330.2012 - B.2.3',
    },
    {
        value: '4',
        label: 'Для предотвращающей конденсацию влаги из воздуха на ее поверхности',
        description: 'СП 61.13330.2012 - B.2.4',
    },
    {
        value: '5',
        label: 'По заданому изменению температуры вещества транспортируемого трубопроводами',
        description: 'СП 61.13330.2012',
    },
    {
        value: '6',
        label: 'По заданному времени приостановки движения жидкого вещества в трубопроводе в целях предотвращения его замерзания',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: '7',
        label: 'По заданной величине охлаждения (нагревания) вещества, сохраняемого в емкостях',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: '8',
        label: 'Для предотвращения конденсации влаги на внутренних поверхностях',
        description: 'СНиП 2.04.14-88',
    },
];

export const CalculationTypeSection = () => {
    const value = useCalculatorStore((s) => s.calculationType);

    const setValue = useCalculatorStore((s) => s.setCalculationType);

    return (
        <SectionCard>
            <Stack gap="lg">
                <div>
                    <Title order={3}>Тип расчета</Title>

                    <Text c="dimmed">Выберите метод расчета</Text>
                </div>

                <Radio.Group value={value ?? ''} onChange={setValue}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                        {options.map((option) => (
                            <Radio
                                key={option.value}
                                value={option.value}
                                description={option.description}
                                size="md"
                                label={<Text fw={500}>{option.label}</Text>}
                            />
                        ))}
                    </SimpleGrid>
                </Radio.Group>
            </Stack>
        </SectionCard>
    );
};
