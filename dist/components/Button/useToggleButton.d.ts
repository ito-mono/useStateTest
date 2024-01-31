export type useToggleButtonProps = {
    initialIsOn?: boolean;
};
export type useToggleButtonReturn = {
    isOn: boolean;
    onClick: () => void;
};
export declare const useToggleButton: ({ initialIsOn, }: useToggleButtonProps) => useToggleButtonReturn;
