import { Autocomplete, Select, Stack, Text, Title } from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';
import { SelectionCard } from '@shared/ui/SelectionCard';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NaUliceImg from '@shared/assets/interface_img_razmeshenie/img_razmeshenie_na_ulice_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VKanaleImg from '@shared/assets/interface_img_razmeshenie/img_razmeshenie_v_kanale_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VPomesheniiImg from '@shared/assets/interface_img_razmeshenie/img_razmeshenie_v_pomeshenii_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VTonneleImg from '@shared/assets/interface_img_razmeshenie/img_razmeshenie_v_tonnele_bw.svg?react';

import { useCalculatorStore } from '@entities/calculation-session';
import { useMediaQuery } from '@mantine/hooks';
import { useMemo } from 'react';
import './PlacementSection.css';

const items = [
    { id: 'na_ulice', title: 'На улице', image: <NaUliceImg /> },
    { id: 'v_pomeshenii', title: 'В помещении', image: <VPomesheniiImg /> },
    { id: 'v_kanale', title: 'В канале', image: <VKanaleImg /> },
    { id: 'v_tonnele', title: 'В тоннеле', image: <VTonneleImg /> },
];

export const PlacementSection = () => {
    const value = useCalculatorStore((s) => s.placement);
    const objectTypeValue = useCalculatorStore((s) => s.objectType);
    const locationValue = useCalculatorStore((s) => s.location);
    const setValue = useCalculatorStore((s) => s.setPlacement);
    const setLocationValue = useCalculatorStore((s) => s.setLocation);

    const locationDisabled = value !== 'na_ulice';
    const disabledMap = useMemo(() => {
        return (
            {
                ['vozduhovod_krugliy']: {
                    ['v_pomeshenii']: false,
                    ['na_ulice']: false,
                    ['v_kanale']: true,
                    ['v_tonnele']: true,
                },
                ['vozduhovod_pramougolniy']: {
                    ['v_pomeshenii']: false,
                    ['na_ulice']: false,
                    ['v_kanale']: true,
                    ['v_tonnele']: true,
                },
                ['rezervuar']: {
                    ['v_pomeshenii']: false,
                    ['na_ulice']: false,
                    ['v_kanale']: true,
                    ['v_tonnele']: true,
                },
                ['truboprovod']: {
                    ['v_pomeshenii']: false,
                    ['na_ulice']: false,
                    ['v_kanale']: false,
                    ['v_tonnele']: false,
                },
            }[objectTypeValue ?? ''] ?? {}
        );
    }, [objectTypeValue]);

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <SectionCard>
            <div className="placement-section">
                <div className="placement-section__left">
                    <Stack gap="lg">
                        <Title order={3}>Размещение</Title>

                        {isMobile ? (
                            <Select
                                placeholder="Выберите размещение"
                                data={items.map((item) => ({
                                    value: item.id,
                                    label: item.title,
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    disabled: disabledMap[item.id],
                                }))}
                                value={value}
                                onChange={(value) => setValue(value ?? '')}
                            />
                        ) : (
                            <div className="placement-section__scroll">
                                {items.map((item) => (
                                    <SelectionCard
                                        key={item.id}
                                        title={item.title}
                                        image={item.image}
                                        selected={value === item.id}
                                        onClick={() => setValue(item.id)}
                                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                        // @ts-ignore
                                        disabled={disabledMap[item.id]}
                                    />
                                ))}
                            </div>
                        )}
                    </Stack>
                </div>

                <div
                    className={
                        isMobile
                            ? 'placement-section__right_mobile'
                            : 'placement-section__right'
                    }
                >
                    <Stack gap="md">
                        <Title order={3}>Местоположение</Title>

                        <Text c="dimmed" size="sm">
                            По СП 131.13330.2025
                        </Text>

                        <Autocomplete
                            placeholder="Начните вводить название города или области"
                            data={[
                                'Москва',
                                'Санкт-Петербург',
                                'Казань',
                                'Екатеринбург',
                                'Новосибирск',
                                'Краснодар',
                                'Ростов-на-Дону',
                                'Нижний Новгород',
                            ]}
                            disabled={locationDisabled}
                            value={locationValue}
                            onChange={setLocationValue}
                        />
                    </Stack>
                </div>
            </div>
        </SectionCard>
    );
};
