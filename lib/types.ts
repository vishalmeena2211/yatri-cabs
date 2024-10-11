
export type FormField = {
    id: string;
    label: string;
    type: string;
    placeholder?: string;
};

export type FormVariant = {
    name: string;
    fields: FormField[];
};

export type CityAutocompleteProps = {
    onSelect: (cityName: string) => void;
    placeholder?: string;
};

export interface InfoItemProps {
    title?: string;
    content: string;
}

export interface InfoSectionProps {
    title: string;
    items: InfoItemProps[];
}

export interface FeatureBoxProps {
    image: string;
    title: string;
    description: string;
  }

export interface FeatureItemProps {
    imageUrl: string;
    title: string;
    description: string;
}

