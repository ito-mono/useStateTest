export type useToggleButtonProps = {
    initialIsOn?: boolean;
};
export type useToggleButtonReturn = {
    isOn: boolean;
    onClick: () => void;
};
export declare function useToggleButton({ initialIsOn, }: useToggleButtonProps): useToggleButtonReturn;
