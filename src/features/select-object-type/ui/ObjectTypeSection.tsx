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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HolodosnabjenieImg from '@shared/assets/interface_img_op/img_op_holodosnabjenie.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import KanalizacijaImg from '@shared/assets/interface_img_op/img_op_kanalizacija.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import KondicionirovanieImg from '@shared/assets/interface_img_op/img_op_kondicionirovanie.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import OtoplenieImg from '@shared/assets/interface_img_op/img_op_otoplenie.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import PromishlennostImg from '@shared/assets/interface_img_op/img_op_promishlennost.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VentilacijaImg from '@shared/assets/interface_img_op/img_op_ventilacija.svg?react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VodosnabjenieImg from '@shared/assets/interface_img_op/img_op_vodosnabjenie.svg?react';

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

const oblastPrimeneniya = [
    {
        id: 'otoplenie',
        title: 'Отопление',
        image: <OtoplenieImg />,
        src: OtoplenieImg,
    },
    {
        id: 'kanalizacija',
        title: 'Канализация',
        image: <KanalizacijaImg />,
        src: KanalizacijaImg,
    },
    {
        id: 'kondicionirovanie',
        title: 'Кондиционирование',
        image: <KondicionirovanieImg />,
        src: KondicionirovanieImg,
    },
    {
        id: 'holodosnabjenie',
        title: 'Холодоснабжение',
        image: <HolodosnabjenieImg />,
        src: HolodosnabjenieImg,
    },
    {
        id: 'promishlennost',
        title: 'Промышленность',
        image: <PromishlennostImg />,
        src: PromishlennostImg,
    },
    {
        id: 'ventilacija',
        title: 'Вентиляция',
        image: <VentilacijaImg />,
        src: VentilacijaImg,
    },
    {
        id: 'vodosnabjenie',
        title: 'Водоснабжение',
        image: <VodosnabjenieImg />,
        src: VodosnabjenieImg,
    },
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

const renderSelectOblastOption: SelectProps['renderOption'] = ({ option, checked }) => {
    const Img = Object.values(oblastPrimeneniya).find((v) => v.id === option.value)?.src;

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

    const oblast = useCalculatorStore((s) => s.oblast);
    const setOblast = useCalculatorStore((s) => s.setOblast);

    const isMobile = useMediaQuery('(max-width: 768px)');
    const Img = Object.values(items).find((v) => v.id === value)?.src;
    const OblastImg = Object.values(oblastPrimeneniya).find((v) => v.id === oblast)?.src;

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
                                comboboxProps={{
                                    transitionProps: { transition: 'pop', duration: 200 },
                                }}
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
                            placeholder="Выберите область применения"
                            data={oblastPrimeneniya.map((item) => ({
                                value: item.id,
                                label: item.title,
                            }))}
                            value={oblast}
                            onChange={(value) => setOblast(value ?? '')}
                            renderOption={renderSelectOblastOption}
                            leftSectionPointerEvents="none"
                            leftSectionWidth={48}
                            leftSection={
                                oblast ? (
                                    <Image h={16} component={OblastImg} w="auto" />
                                ) : undefined
                            }
                            comboboxProps={{
                                transitionProps: { transition: 'pop', duration: 200 },
                            }}
                            maxDropdownHeight={250}
                        />
                    </Stack>
                </div>
            </div>
        </SectionCard>
    );
};
