import { create } from 'zustand';

type State = {
    objectType: string | null;
    placement: string | null;
    calculationType: string | null;
    location?: string;

    setObjectType: (value: string) => void;
    setPlacement: (value: string) => void;
    setCalculationType: (value: string) => void;
    setLocation: (value: string) => void;
};

export const useCalculatorStore = create<State>((set) => ({
    objectType: null,
    placement: null,
    calculationType: null,
    location: undefined,

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
    setLocation: (value) =>
        set({
            location: value,
        }),
}));
