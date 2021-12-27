export interface SelectValue {
    value: string;
    label: string;
}

export interface WeaponSelect extends SelectValue {
  mainHandOnly: boolean;
  offHandOnly: boolean;
}