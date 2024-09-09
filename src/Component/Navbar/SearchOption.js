import React, { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import "./SearchOption.css"

const SearchOption = () => {
    const [Search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    
    const courses = ["HTML" , "CSS", "RWD","BootStrap","W3CSS", "SASS","COLORS", "ICONS", "SVG","CANVAS","GRAPHICS", "CHARACTER SETS", "HOW TO","JAVASCRIPT","REACT","JQUERY","VUE","ANGULARJS","JSON","JSON","AJAX","APPML","W3JS","PYTHON","SQL","PHP","JAVA","C","C++","C#","R","KOTLIN","DJANGO"];
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setShowDropdown(true);

        if (value.length > 0) {
            const filteredCourses = courses.filter(course =>
                course.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredCourses);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (course) => {
        setSearch(course);
        setShowDropdown(false);
    };

    return (
        <div className="course-dropdown">
            <div className="course-input">
                <input
                    type="text"
                    value={Search}
                    onChange={handleInputChange}
                    placeholder="Search..."
                />
                {/* <SearchIcon/> */}
            </div>
            {showDropdown && suggestions.length > 0 && (
                <div className="dropdown-menu">
                    {suggestions.map((course, index) => (
                        <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleSelect(course)}
                        >
                            {course}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchOption;
