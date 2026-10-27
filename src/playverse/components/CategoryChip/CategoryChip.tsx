import './CategoryChip.css';

export interface CategoryChipProps {
  label: string;
  onClick?: () => void;
}

export const CategoryChip = ({ label, onClick }: CategoryChipProps) => (
  <button type="button" className="pv-category-chip" onClick={onClick}>
    {label}
  </button>
);
