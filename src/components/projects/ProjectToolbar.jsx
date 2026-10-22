import React from 'react';
import { Search, X } from 'lucide-react';
import { projectCategories } from '../../data/projects';
import './ProjectToolbar.css';

export default function ProjectToolbar({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch
}) {
  return (
    <div className="project-toolbar-wrapper">
      {/* Category Filter Chips */}
      <div className="project-category-chips" role="tablist" aria-label="Project Categories">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`category-chip ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search Input Field */}
      <div className="project-search-box">
        <Search size={16} className="search-box-icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="search-box-input"
          aria-label="Search projects by title, description, or technology"
        />
        {searchQuery && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onClearSearch}
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
