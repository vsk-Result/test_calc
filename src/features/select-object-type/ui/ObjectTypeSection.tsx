import { Select, Stack, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { SectionCard } from '@shared/ui/SectionCard';
import { SelectionCard } from '@shared/ui/SelectionCard';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RezervuarImg from '@shared/assets/interface_img_object/img_obj_rezervuar_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TruboprovodImg from '@shared/assets/interface_img_object/img_obj_truboprovod_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VozduhovodKrugliImg from '@shared/assets/interface_img_object/img_obj_vozduhovod_krugliy_bw.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VozduhovodPramougImg from '@shared/assets/interface_img_object/img_obj_vozduhovod_pramougolniy_bw.svg?react';

import { useCalculatorStore } from '@entities/calculation-session';
import './ObjectTypeSection.css';

const items = [
    {
        id: 'truboprovod',
        title: 'Трубопровод',
        image: <TruboprovodImg />,
    },
    {
        id: 'vozduhovod_krugliy',
        title: 'Воздуховод круглый',
        image: <VozduhovodKrugliImg />,
    },
    {
        id: 'vozduhovod_pramougolniy',
        title: 'Воздуховод прямоугольный',
        image: <VozduhovodPramougImg />,
    },
    { id: 'rezervuar', title: 'Резервуар', image: <RezervuarImg /> },
];

export const ObjectTypeSection = () => {
    const value = useCalculatorStore((s) => s.objectType);
    const setValue = useCalculatorStore((s) => s.setObjectType);

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <SectionCard>
            <div className="object-section">
                <div className="object-section__left">
                    <Stack gap="lg">
                        <Title order={3}>Тип объекта</Title>

                        {isMobile ? (
                            <Select
                                placeholder="Выберите тип объекта"
                                data={items.map((item) => ({
                                    value: item.id,
                                    label: item.title,
                                }))}
                                value={value}
                                onChange={(value) => setValue(value ?? '')}
                            />
                        ) : (
                            <div className="object-section__scroll">
                                {items.map((item) => (
                                    <SelectionCard
                                        key={item.id}
                                        title={item.title}
                                        image={item.image}
                                        selected={value === item.id}
                                        onClick={() => setValue(item.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </Stack>
                </div>

                <div
                    className={
                        isMobile
                            ? 'object-section__right_mobile'
                            : 'object-section__right'
                    }
                >
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
