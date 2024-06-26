import React, { useState } from "react"; // Import React and useState hook

// Component to display the portfolio category list
const List = ({ catList, filterItems }) => {
  const [active, setActive] = useState(0); // State to track the active category button

  return (
    <div className="portfolio__list mt-8">
      {/* Loop through the category list and create a button for each category */}
      {catList?.map((category, i) => {
        return (
          <button
            onClick={() => {
              setActive(i); // Set the active state to the clicked category index
              filterItems(category); // Call the filterItems function with the clicked category
            }}
            key={i} // Unique key for each category button
            className={`${
              active === i ? "active-work-cat" : ""
            } portfolio__list-item text-cs uppercase`} // CSS classes for styling and active state
          >
            {category} {/* Display the category name */}
          </button>
        );
      })}
    </div>
  );
};

export default List; // Export the List component
