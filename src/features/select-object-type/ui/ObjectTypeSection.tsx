import {
    CheckIcon,
    Flex,
    Select,
    Stack,
    Text,
    Title,
    type SelectProps,
} from '@mantine/core';
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

import { Image } from '@mantine/core';

const items = [
    {
        id: 'truboprovod',
        title: 'Трубопровод',
        image: <TruboprovodImg />,
        src: TruboprovodImg,
    },
    {
        id: 'vozduhovod_krugliy',
        title: 'Воздуховод круглый',
        image: <VozduhovodKrugliImg />,
        src: VozduhovodKrugliImg,
    },
    {
        id: 'vozduhovod_pramougolniy',
        title: 'Воздуховод прямоугольный',
        image: <VozduhovodPramougImg />,
        src: VozduhovodPramougImg,
    },
    { id: 'rezervuar', title: 'Резервуар', image: <RezervuarImg />, src: RezervuarImg },
];

const iconProps = {
    color: 'currentColor',
    opacity: 0.6,
    size: 14,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
    const Img = Object.values(items).find((v) => v.id === option.value)?.src;

    return (
        <Flex w={'100%'} direction="row" gap={14} justify="flex-start" align="flex-start">
            <Image h={18} component={Img} w="auto" />
            {option.label}
            {checked && (
                <CheckIcon style={{ marginInlineStart: 'auto' }} {...iconProps} />
            )}
        </Flex>
    );
};

export const ObjectTypeSection = () => {
    const value = useCalculatorStore((s) => s.objectType);
    const setValue = useCalculatorStore((s) => s.setObjectType);

    const isMobile = useMediaQuery('(max-width: 768px)');
    const Img = Object.values(items).find((v) => v.id === value)?.src;

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
                                renderOption={renderSelectOption}
                                leftSectionPointerEvents="none"
                                leftSectionWidth={48}
                                leftSection={
                                    value ? (
                                        <Image h={16} component={Img} w="auto" />
                                    ) : undefined
                                }
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
