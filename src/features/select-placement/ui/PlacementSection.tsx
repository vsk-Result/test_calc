import { Autocomplete, Stack, Text, Title } from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';
import { SelectionCard } from '@shared/ui/SelectionCard';

import { useCalculatorStore } from '@entities/calculation-session';
import './PlacementSection.css';

const items = [
    { id: 'outside', title: 'На улице', icon: '🌤️' },
    { id: 'inside', title: 'В помещении', icon: '🏠' },
    { id: 'channel', title: 'В канале', icon: '📦' },
    { id: 'tunnel', title: 'В тоннеле', icon: '🚇' },
];

export const PlacementSection = () => {
    const value = useCalculatorStore((s) => s.placement);
    const setValue = useCalculatorStore((s) => s.setPlacement);

    return (
        <SectionCard>
            <div className="placement-section">
                <div className="placement-section__left">
                    <Stack gap="lg">
                        <Title order={3}>Размещение</Title>

                        <div className="placement-section__scroll">
                            {items.map((item) => (
                                <SelectionCard
                                    key={item.id}
                                    title={item.title}
                                    icon={<div className="emoji-icon">{item.icon}</div>}
                                    selected={value === item.id}
                                    onClick={() => setValue(item.id)}
                                />
                            ))}
                        </div>
                    </Stack>
                </div>

                <div className="placement-section__right">
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
                        />
                    </Stack>
                </div>
            </div>
        </SectionCard>
    );
};
