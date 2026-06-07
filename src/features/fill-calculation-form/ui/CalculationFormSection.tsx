import { useCalculatorStore } from '@entities/calculation-session';
import {
    Checkbox,
    Divider,
    Grid,
    Group,
    NumberInput,
    Radio,
    Select,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';

const nameMap: Record<string, string> = {
    nptp: 'По нормированной плотности теплового потока.',
    zptp: 'По заданной плотности теплового потока.',
    ztnp: 'По заданной температуре наружной поверхности.',
    pkvvp: 'Для предотвращающей конденсацию влаги из воздуха на ее поверхности.',
    zsptv: 'По заданному изменению температуры вещества, транспортируемого трубопроводами.',
    zvpdvtz:
        'По заданному времени приостановки движения жидкого вещества в трубопроводе в целях предотвращения его замерзания.',
    zvonve: 'По заданной величине охлаждения (нагревания) вещества, сохраняемого в емкостях.',
    pkvvpo: 'Для предотвращения конденсации влаги на внутренних поверхностях.',
};

export const CalculationFormSection = () => {
    const objectType = useCalculatorStore((s) => s.objectType);
    const calculationType = useCalculatorStore((s) => s.calculationType);

    return (
        <>
            <Stack gap="lg">
                <SectionCard>
                    <Stack gap="xl">
                        <div>
                            <Title order={2}>Расчет</Title>

                            <Text c="dimmed">{nameMap[calculationType ?? 'nptp']}</Text>
                        </div>

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                {calculationType === 'nptp' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={90}
                                            name={'t_v_nptp'}
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name={'t_n_nptp'}
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name={'chb_sp_t_n_nptp'}
                                            />
                                        </Group>

                                        <Radio.Group
                                            label=" Время работы в течение года, ч"
                                            defaultValue={'5'}
                                        >
                                            <Group gap="xl" mt={'sm'}>
                                                <Radio
                                                    value="5"
                                                    label="> 5000"
                                                    name="rb_chislo_chasov_raboti_bolee_5000_nptp"
                                                />
                                                <Radio
                                                    value="10"
                                                    label="≤ 5000"
                                                    name="rb_chislo_chasov_raboti_menee_5000_nptp"
                                                />
                                            </Group>
                                        </Radio.Group>

                                        <NumberInput
                                            label="Плотность теплового потока, Вт/м"
                                            defaultValue={18.3}
                                            description={'определена автоматически по СП'}
                                            inputWrapperOrder={[
                                                'label',
                                                'error',
                                                'input',
                                                'description',
                                            ]}
                                            name="q_nptp"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'zptp' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={90}
                                            name="t_v_zptp"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_zptp"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_zptp"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Плотность теплового потока, Вт/м"
                                            defaultValue={18.3}
                                            name="q_zptp"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'pkvvp' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={90}
                                            name="t_v_pkvvp"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_pkvvp"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_pkvvp"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Влажность окружающей среды, %"
                                            defaultValue={75}
                                            name="fi_pkvvp"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'ztnp' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={90}
                                            name="t_v_ztnp"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_ztnp"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_ztnp"
                                            />
                                        </Group>

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура на поверхности изоляции, °C"
                                                defaultValue={40}
                                                flex={1}
                                                name="t_p_ztnp"
                                            />

                                            <Checkbox
                                                checked
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_p_ztnp"
                                            />
                                        </Group>
                                    </Stack>
                                )}

                                {calculationType === 'zsptv' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя в начале, °C"
                                            defaultValue={80}
                                            name="t_v_vnachale_zsptv"
                                        />

                                        <NumberInput
                                            label="Температура теплоносителя в конце, °C"
                                            defaultValue={75}
                                            name="t_v_vkonce_zsptv"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_zsptv"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_zsptv"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Теплоемкость теплоносителя, кг/ч"
                                            defaultValue={4.182}
                                            name="cp_zsptv"
                                        />

                                        <NumberInput
                                            label="Расход теплоносителя, кг/ч"
                                            defaultValue={500}
                                            name="g_zsptv"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'zvpdvtz' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={5}
                                            name="t_v_zvpdvtz"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_zvpdvtz"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_zvpdvtz"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Теплоемкость теплоносителя, кг/ч"
                                            defaultValue={4.182}
                                            name="cp_zvpdvtz"
                                        />

                                        <NumberInput
                                            label="Количество льда, %"
                                            defaultValue={25}
                                            name="kolvo_lda_zvpdvtz"
                                        />

                                        <NumberInput
                                            label="Время приостановки жидкости, ч"
                                            defaultValue={12}
                                            name="z_zvpdvtz"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'zvonve' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя начальная, °C"
                                            defaultValue={80}
                                            name="t_v_nachalnaya_zvonve"
                                        />

                                        <NumberInput
                                            label="Температура теплоносителя конечная, °C"
                                            defaultValue={75}
                                            name="t_v_konechnaya_zvonve"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_zvonve"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_zvonve"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Теплоемкость теплоносителя, кг/ч"
                                            defaultValue={4.182}
                                            name="cp_zvonve"
                                        />

                                        <NumberInput
                                            label="Заполнение резервуара, %"
                                            defaultValue={90}
                                            name="z_e_zvonve"
                                        />

                                        <NumberInput
                                            label="Время хранения вещества, ч"
                                            defaultValue={24}
                                            name="z_zvonve"
                                        />
                                    </Stack>
                                )}

                                {calculationType === 'pkvvpo' && (
                                    <Stack>
                                        <NumberInput
                                            label="Температура теплоносителя, °C"
                                            defaultValue={5}
                                            name="t_v_pkvvpo"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Температура окружающей среды, °C"
                                                defaultValue={20}
                                                flex={1}
                                                name="t_n_pkvvpo"
                                            />

                                            <Checkbox
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_t_n_pkvvpo"
                                            />
                                        </Group>

                                        <NumberInput
                                            label="Скорость потока, м/с"
                                            defaultValue={5}
                                            name="w_potoka_pkvvpo"
                                        />

                                        <NumberInput
                                            label="Коэффициент теплоотдачи внутр., Вт/(м²*C)"
                                            defaultValue={12.8}
                                            name="alpha_vnutr_pkvvpo"
                                        />

                                        <NumberInput
                                            label="Влажность вещества, %"
                                            defaultValue={75}
                                            name="fi_pkvvpo"
                                        />
                                    </Stack>
                                )}
                            </Grid.Col>

                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack>
                                    <Stack gap="lg">
                                        <Radio.Group
                                            defaultValue="5"
                                            label="Расположение трубопровода"
                                        >
                                            <Group gap="xl" mt={'sm'}>
                                                <Radio
                                                    value="5"
                                                    label="горизонтально"
                                                    name="rb_raspolojenie_truboprovoda_gorizontalnoe"
                                                />
                                                <Radio
                                                    value="10"
                                                    label="вертикально"
                                                    name="rb_raspolojenie_truboprovoda_vertikalnoe"
                                                />
                                            </Group>
                                        </Radio.Group>

                                        <Radio.Group
                                            defaultValue="0"
                                            label="Скорость ветра, м/с"
                                        >
                                            <Group gap="xl" mt={'sm'}>
                                                <Radio
                                                    value="0"
                                                    label="Нет данных"
                                                    name="rb_sk_vetra_na"
                                                />
                                                <Radio
                                                    value="5"
                                                    label="5"
                                                    name="rb_sk_vetra_5"
                                                />
                                                <Radio
                                                    value="10"
                                                    label="10"
                                                    name="rb_sk_vetra_10"
                                                />
                                                <Radio
                                                    value="15"
                                                    label="15"
                                                    name="rb_sk_vetra_15"
                                                />
                                            </Group>
                                        </Radio.Group>

                                        <Select
                                            defaultValue={'не применять'}
                                            label="Дополнительное защитное покрытие"
                                            data={['не применять', 'Что-то еще']}
                                            name="cmbx_dop_zashitnoe_pokritie"
                                        />

                                        <Group align={'end'}>
                                            <NumberInput
                                                label="Коэффициент теплоотдачи, Вт/(м²*C)"
                                                defaultValue={7}
                                                flex={1}
                                                disabled
                                                name="alpha_n"
                                            />

                                            <Checkbox
                                                defaultChecked
                                                label="по СП"
                                                style={{ marginBottom: '8px' }}
                                                name="chb_sp_alpha_n"
                                            />
                                        </Group>

                                        <Divider />

                                        <Select
                                            label="Режим работы"
                                            defaultValue={
                                                'На открытом воздухе в летнее время'
                                            }
                                            data={[
                                                'На открытом воздухе в летнее время',
                                                'Что-то еще',
                                            ]}
                                            name="cmbx_rejim_raboti"
                                        />

                                        <Select
                                            defaultValue={
                                                '1.00 - не применять коэффициент'
                                            }
                                            label="Коэффициент дополнительных потерь"
                                            data={[
                                                '1.00 - не применять коэффициент',
                                                'Что-то еще',
                                            ]}
                                            name="cmbx_kt_dop_poter"
                                        />
                                    </Stack>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </SectionCard>

                <SectionCard>
                    <Stack gap="xl">
                        {objectType === 'truboprovod' && (
                            <>
                                <div>
                                    <Title order={2}>Трубопровод</Title>
                                </div>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 5 }}>
                                        <Stack>
                                            <Select
                                                label="Материал трубопровода"
                                                data={['Сталь', 'Что-то еще']}
                                                defaultValue="Сталь"
                                            />

                                            <Select
                                                label="Ду (d-наружный диаметр) трубопровода, мм"
                                                data={['8 (13,5)', 'Что-то еще']}
                                                defaultValue="8 (13,5)"
                                            />

                                            <NumberInput
                                                label="Длина трубопровода (L), м"
                                                defaultValue={100}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </>
                        )}

                        {objectType === 'vozduhovod_pramougolniy' && (
                            <>
                                <div>
                                    <Title order={2}>Воздуховод прямоугольный</Title>
                                </div>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 5 }}>
                                        <Stack>
                                            <NumberInput
                                                label="Высота (h), мм"
                                                defaultValue={600}
                                            />

                                            <NumberInput
                                                label="Ширина (w), мм"
                                                defaultValue={400}
                                            />

                                            <NumberInput
                                                label="Длина (L), м"
                                                defaultValue={100}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </>
                        )}

                        {objectType === 'vozduhovod_krugliy' && (
                            <>
                                <div>
                                    <Title order={2}>Воздуховод круглый</Title>
                                </div>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 5 }}>
                                        <Stack>
                                            <NumberInput
                                                label="Диаметр воздуховода (d), мм"
                                                defaultValue={600}
                                            />

                                            <NumberInput
                                                label="Длина воздуховода (L), м"
                                                defaultValue={100}
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </>
                        )}

                        {objectType === 'rezervuar' && (
                            <>
                                <div>
                                    <Title order={2}>Резервуар</Title>
                                </div>

                                <Grid>
                                    <Grid.Col span={{ base: 12, md: 5 }}>
                                        <Stack>
                                            <NumberInput
                                                label="Диаметр резервуара (d), м"
                                                defaultValue={5}
                                            />

                                            <NumberInput
                                                label="Высота резервуара (h), м"
                                                defaultValue={3}
                                            />

                                            <Select
                                                label="Ориентация резервуара"
                                                data={['Вертикальный', 'Что-то еще']}
                                                defaultValue="Вертикальный"
                                            />

                                            <Select
                                                label="Форма крышек"
                                                data={['Плоская', 'Что-то еще']}
                                                defaultValue="Плоская"
                                            />
                                        </Stack>
                                    </Grid.Col>
                                </Grid>
                            </>
                        )}
                    </Stack>
                </SectionCard>
            </Stack>
        </>
    );
};
