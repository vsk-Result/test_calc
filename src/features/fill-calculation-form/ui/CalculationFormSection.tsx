import {
    Grid,
    NumberInput,
    Paper,
    Radio,
    Select,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';

export const CalculationFormSection = () => {
    return (
        <SectionCard>
            <Stack gap="xl">
                <div>
                    <Title order={2}>Расчет</Title>

                    <Text c="dimmed">По нормированной плотности теплового потока</Text>
                </div>

                <Grid>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Paper withBorder radius="lg" p="lg">
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

                                <Select
                                    label="Материал трубопровода"
                                    data={['Сталь', 'Пластик']}
                                    defaultValue="Сталь"
                                />

                                <NumberInput label="Длина" defaultValue={100} />
                            </Stack>
                        </Paper>
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <Stack>
                            <Paper withBorder radius="lg" p="lg">
                                <Stack gap="lg">
                                    <div>
                                        <Text fw={700} mb={12}>
                                            Скорость ветра
                                        </Text>

                                        <Radio.Group defaultValue="5">
                                            <Radio.Group>
                                                <Stack gap="sm">
                                                    <Radio value="5" label="5 м/с" />
                                                    <Radio value="10" label="10 м/с" />
                                                    <Radio value="15" label="15 м/с" />
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
                            </Paper>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Stack>
        </SectionCard>
    );
};
