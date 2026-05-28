import { useRef } from 'react';

import { Stack } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';

import { useCalculatorStore } from '@entities/calculation-session';

import { CalculationFormSection } from '@features/fill-calculation-form';
import { CalculationTypeSection } from '@features/select-calculation-type';
import { ObjectTypeSection } from '@features/select-object-type';
import { PlacementSection } from '@features/select-placement';

import { useAutoScroll } from '@shared/hooks/useAutoScroll';

export const Calculator = () => {
    const objectType = useCalculatorStore((s) => s.objectType);
    const placement = useCalculatorStore((s) => s.placement);
    const calculationType = useCalculatorStore((s) => s.calculationType);
    const location = useCalculatorStore((s) => s.location);

    const placementVisible =
        placement &&
        ((!!location && placement === 'na_ulice') || placement !== 'na_ulice');

    const placementRef = useRef<HTMLDivElement>(null);
    const calculationRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useAutoScroll(placementRef, Boolean(objectType));
    useAutoScroll(calculationRef, Boolean(placement));
    useAutoScroll(formRef, Boolean(calculationType));

    return (
        <Stack gap="lg">
            <ObjectTypeSection />

            <AnimatePresence>
                {objectType && (
                    <motion.div
                        ref={placementRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <PlacementSection />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {placementVisible && (
                    <motion.div
                        ref={calculationRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <CalculationTypeSection />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {calculationType && (
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <CalculationFormSection />
                    </motion.div>
                )}
            </AnimatePresence>
        </Stack>
    );
};
