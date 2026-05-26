import { create } from 'zustand';

type State = {
    objectType: string | null;
    placement: string | null;
    calculationType: string | null;

    setObjectType: (value: string) => void;
    setPlacement: (value: string) => void;
    setCalculationType: (value: string) => void;
};

export const useCalculatorStore = create<State>((set) => ({
    objectType: null,
    placement: null,
    calculationType: null,

    setObjectType: (value) =>
        set({
            objectType: value,
            placement: null,
            calculationType: null,
        }),

    setPlacement: (value) =>
        set({
            placement: value,
            calculationType: null,
        }),

    setCalculationType: (value) =>
        set({
            calculationType: value,
        }),
}));
