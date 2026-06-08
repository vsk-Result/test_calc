import {
    Checkbox,
    Grid,
    NumberInput,
    Paper,
    Select,
    Stack,
    Text,
    Title,
} from '@mantine/core';

import { SectionCard } from '@shared/ui/SectionCard';

export const CalculationResult = () => {
    return (
        <SectionCard>
            <Stack>
                <Title order={2}>Результат</Title>

                <Paper radius="lg" p="lg" bg="#0b5d7a" c="white">
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
                            <Stack>
                                <Select
                                    label="Материал"
                                    data={['ROKAFLEX STD', 'ROKAFLEX ST']}
                                />

                                <Select
                                    label="Рекомендуемый типоразмер"
                                    data={['32x15', '32x20']}
                                />

                                <NumberInput label="Клей, л" defaultValue={25} />

                                <Checkbox label="Предпочесть материал с самоклеящимся слоем" />
                            </Stack>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                            <Paper radius="md" p={40} bg="rgba(255,255,255,0.08)">
                                <Stack align="center">
                                    <Text size="sm">Расчетная толщина</Text>

                                    <Text fw={800} size="46px" c="yellow">
                                        31.5
                                    </Text>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Stack>
        </SectionCard>
    );
};
