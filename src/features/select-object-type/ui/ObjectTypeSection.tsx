import { Select, Stack, Text, Title } from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';
import { SelectionCard } from '@shared/ui/SelectionCard';

import { useCalculatorStore } from '@entities/calculation-session';
import './ObjectTypeSection.css';

const items = [
    { id: 'pipe', title: 'Трубопровод', icon: '🛢️' },
    { id: 'round', title: 'Воздуховод круглый', icon: '⭕' },
    { id: 'rect', title: 'Воздуховод прямоугольный', icon: '⬜' },
    { id: 'tank', title: 'Резервуар', icon: '🧯' },
];

export const ObjectTypeSection = () => {
    const value = useCalculatorStore((s) => s.objectType);
    const setValue = useCalculatorStore((s) => s.setObjectType);

    return (
        <SectionCard>
            <div className="object-section">
                <div className="object-section__left">
                    <Stack gap="lg">
                        <Title order={3}>Тип объекта</Title>

                        <div className="object-section__scroll">
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

                <div className="object-section__right">
                    <Stack gap="md">
                        <Title order={3}>Область применения</Title>

                        <Text c="dimmed" size="sm">
                            Для уточнения марки материала
                        </Text>

                        <Select
                            placeholder="Выберите область"
                            data={['Отопление', 'Вентиляция', 'Кондиционирование']}
                        />
                    </Stack>
                </div>
            </div>
        </SectionCard>
    );
};
