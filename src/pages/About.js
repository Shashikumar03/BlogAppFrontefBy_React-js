import React from "react";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Blog App</h1>
      <p>
        Welcome to the Blog App — a simple yet powerful platform where users can create, read, update, and delete blog posts.
        This application is designed for sharing ideas, stories, tutorials, and more.
      </p>

      <h2>What You Can Do</h2>
      <ul>
        <li><strong>Create:</strong> Register and post your own blogs with rich text editing.</li>
        <li><strong>Read:</strong> Browse and read blog posts written by others.</li>
        <li><strong>Update:</strong> Edit your existing blog posts anytime.</li>
        <li><strong>Delete:</strong> Remove your posts when you no longer want them published.</li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React.js, Bootstrap, Axios</li>
        <li><strong>Backend:</strong> Spring Boot (Java), RESTful APIs</li>
        <li><strong>Database:</strong> MySQL (or your choice)</li>
      </ul>

      <p>
        This full-stack application is perfect for learning and demonstrating how to integrate frontend and backend systems using modern technologies.
      </p>
    </div>
  );
}
