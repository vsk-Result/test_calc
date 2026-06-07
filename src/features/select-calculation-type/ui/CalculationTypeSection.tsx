import { Radio, SimpleGrid, Stack, Text, Title } from '@mantine/core';

import { useCalculatorStore } from '@entities/calculation-session';

import { SectionCard } from '@shared/ui/SectionCard';
import { useMemo, type FC } from 'react';

const options = [
    {
        value: 'nptp',
        label: 'По нормированной плотности теплового потока.',
        description: 'СП 61.13330.2012 - B.2.1',
    },
    {
        value: 'zptp',
        label: 'По заданной плотности теплового потока.',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: 'ztnp',
        label: 'По заданной температуре наружной поверхности.',
        description: 'СП 61.13330.2012 - B.2.3',
    },
    {
        value: 'pkvvp',
        label: 'Для предотвращающей конденсацию влаги из воздуха на ее поверхности.',
        description: 'СП 61.13330.2012 - B.2.4',
    },
    {
        value: 'zsptv',
        label: 'По заданному изменению температуры вещества, транспортируемого трубопроводами.',
        description: 'СП 61.13330.2012',
    },
    {
        value: 'zvpdvtz',
        label: 'По заданному времени приостановки движения жидкого вещества в трубопроводе в целях предотвращения его замерзания.',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: 'zvonve',
        label: 'По заданной величине охлаждения (нагревания) вещества, сохраняемого в емкостях.',
        description: 'СНиП 2.04.14-88',
    },
    {
        value: 'pkvvpo',
        label: 'Для предотвращения конденсации влаги на внутренних поверхностях.',
        description: 'СНиП 2.04.14-88',
    },
];

export const CalculationTypeSection: FC<{ onClick: VoidFunction }> = ({ onClick }) => {
    const value = useCalculatorStore((s) => s.calculationType);
    const placementValue = useCalculatorStore((s) => s.placement);
    const objectTypeValue = useCalculatorStore((s) => s.objectType);

    const setValue = useCalculatorStore((s) => s.setCalculationType);

    const disabledMap = useMemo(() => {
        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            {
                ['truboprovod']: {
                    ['na_ulice']: ['nptp', 'zptp', 'ztnp', 'zsptv', 'zvpdvtz'],
                    ['v_pomeshenii']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv'],
                    ['v_kanale']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv'],
                    ['v_tonnele']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv'],
                },
                ['vozduhovod_pramougolniy']: {
                    ['na_ulice']: ['nptp', 'zptp', 'ztnp', 'zsptv', 'pkvvpo'],
                    ['v_pomeshenii']: [
                        'nptp',
                        'zptp',
                        'pkvvp',
                        'ztnp',
                        'zsptv',
                        'pkvvpo',
                    ],
                    ['v_kanale']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv', 'pkvvpo'],
                    ['v_tonnele']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv', 'pkvvpo'],
                },
                ['rezervuar']: {
                    ['na_ulice']: ['nptp', 'zptp', 'ztnp', 'zvonve'],
                    ['v_pomeshenii']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zvonve'],
                    ['v_kanale']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv', 'pkvvpo'],
                    ['v_tonnele']: ['nptp', 'zptp', 'pkvvp', 'ztnp', 'zsptv', 'pkvvpo'],
                },
                ['vozduhovod_krugliy']: {
                    ['na_ulice']: ['nptp', 'zptp', 'ztnp', 'zsptv', 'pkvvpo'],
                    ['v_pomeshenii']: [
                        'nptp',
                        'zptp',
                        'pkvvp',
                        'ztnp',
                        'zsptv',
                        'pkvvpo',
                    ],
                    ['v_kanale']: [],
                    ['v_tonnele']: [],
                },
            }[objectTypeValue ?? ''][placementValue ?? ''] ?? []
        );
    }, [objectTypeValue, placementValue]);

    return (
        <SectionCard>
            <Stack gap="lg">
                <div>
                    <Title order={3}>Тип расчета</Title>

                    <Text c="dimmed">Выберите метод расчета</Text>
                </div>

                <Radio.Group
                    value={value ?? ''}
                    onChange={(v) => {
                        setValue(v);
                        onClick();
                    }}
                >
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                        {options.map((option) => (
                            <Radio
                                key={option.value}
                                value={option.value}
                                description={option.description}
                                size="md"
                                label={<Text fw={500}>{option.label}</Text>}
                                disabled={!disabledMap.includes(option.value)}
                            />
                        ))}
                    </SimpleGrid>
                </Radio.Group>
            </Stack>
        </SectionCard>
    );
};
