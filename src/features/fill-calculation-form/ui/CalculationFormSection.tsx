import { useCalculatorStore } from '@entities/calculation-session';
import { Grid, NumberInput, Radio, Select, Stack, Text, Title } from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';

export const CalculationFormSection = () => {
    const objectType = useCalculatorStore((s) => s.objectType);

    return (
        <>
            <Stack gap="lg">
                <SectionCard>
                    <Stack gap="xl">
                        <div>
                            <Title order={2}>Расчет</Title>

                            <Text c="dimmed">
                                По нормированной плотности теплового потока
                            </Text>
                        </div>

                        <Grid gap={'xl'}>
                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack>
                                    <NumberInput
                                        label="Температура теплоносителя"
                                        defaultValue={90}
                                    />

                                    <NumberInput
                                        label="Температура окружающей среды"
                                        defaultValue={20}
                                    />

                                    <Select
                                        label="Дополнительное защитное покрытие"
                                        data={['Не применять', 'Оцинкованная сталь']}
                                        defaultValue="Не применять"
                                    />

                                    <NumberInput
                                        label="Коэффициент теплоотдачи"
                                        defaultValue={7}
                                    />
                                </Stack>
                            </Grid.Col>

                            <Grid.Col span={{ base: 12, md: 6 }}>
                                <Stack>
                                    <Stack gap="lg">
                                        <div>
                                            <Text fw={700} mb={12}>
                                                Скорость ветра
                                            </Text>

                                            <Radio.Group defaultValue="5">
                                                <Radio.Group>
                                                    <Stack gap="sm">
                                                        <Radio value="5" label="5 м/с" />
                                                        <Radio
                                                            value="10"
                                                            label="10 м/с"
                                                        />
                                                        <Radio
                                                            value="15"
                                                            label="15 м/с"
                                                        />
                                                    </Stack>
                                                </Radio.Group>
                                            </Radio.Group>
                                        </div>

                                        <Select
                                            label="Режим работы"
                                            data={['На открытом воздухе', 'В помещении']}
                                        />

                                        <Select
                                            label="Коэффициент дополнительных потерь"
                                            data={['1.00', '1.05', '1.10']}
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
