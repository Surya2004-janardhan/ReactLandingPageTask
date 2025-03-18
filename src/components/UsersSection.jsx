import React, { useState, useEffect } from "react";
import "./UsersSection.css";

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [userMap, setUserMap] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);

        // Create HashMap for fast searching
        const map = {};
        data.forEach((user) => {
          map[user.name.toLowerCase().trim()] = user;
        });
        setUserMap(map);

        setFilteredUsers(data); // Initially, all users are shown
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Debouncing: Update search term after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // Delay execution by 500ms

    return () => clearTimeout(timer); // Cleanup previous timer
  }, [searchTerm]);

  // Handle search using debounced value
  useEffect(() => {
    if (debouncedSearch === "") {
      setFilteredUsers(users);
      return;
    }

    // Search using HashMap (O(1) lookup)
    const matchedUsers = Object.keys(userMap)
      .filter((key) => key.includes(debouncedSearch.toLowerCase().trim()))
      .map((key) => userMap[key]);

    setFilteredUsers(matchedUsers.length > 0 ? matchedUsers : []);
  }, [debouncedSearch, userMap, users]);

  return (
    <section id="users" className="users-section fade-in-section">
      <h2>Our Users</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Display Users */}
      <div className="users-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No users found</p>
        )}
      </div>
    </section>
  );
};

export default UsersSection;
