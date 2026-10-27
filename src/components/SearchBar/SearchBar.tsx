import type { InputHTMLAttributes } from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import './SearchBar.css';

export type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;

export const SearchBar = ({ placeholder = 'Search tournaments', ...props }: SearchBarProps) => (
  <label className="pv-search-bar">
    <img src={searchIcon} alt="" width={16} height={16} />
    <input type="search" placeholder={placeholder} aria-label={placeholder} {...props} />
  </label>
);
