export interface DropdownContent {
  title: string;
  description: string;
}

export interface Link {
  label: string;
  icon: React.ReactNode;
  icondrop?: React.ReactNode;
  dropdownContent: DropdownContent[];
  isHighlited: boolean;
}
