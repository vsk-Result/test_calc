import { Container, Stack, Text, Title } from '@mantine/core';

import { Calculator } from '@widgets/calculator';

export const CalculatorPage = () => {
    return (
        <Container size="xl" py={40} pb={140}>
            <Stack gap="xl">
                <div>
                    <Title order={1}>Исходные данные</Title>

                    <Text c="dimmed" mt={6}>
                        Выберите параметры объекта для расчета теплоизоляции
                    </Text>
                </div>

                <Calculator />
            </Stack>
        </Container>
    );
};
