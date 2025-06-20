import React from "react";
import { Container } from "reactstrap";

export default function ProfileInfo() {
  return (
    <Container className="mt-5 p-4 shadow-sm bg-light rounded">
      <h2 className="mb-3">User Profile Information</h2>
      <p>
        In this blog application, users play a central role. Each user has a unique profile
        where their personal details, blog posts, and activity can be managed.
      </p>
      <h5 className="mt-4">User Features:</h5>
      <ul>
        <li><strong>Create Blog Posts:</strong> Share thoughts, stories, or tutorials by publishing posts.</li>
        <li><strong>Edit & Delete:</strong> Make updates to existing posts or remove them at any time.</li>
        <li><strong>Category Management:</strong> Organize posts into custom categories for easier navigation.</li>
        <li><strong>Dashboard Access:</strong> View and manage all personal content in one place.</li>
        <li><strong>Secure Authentication:</strong> Users can register and log in securely to access features.</li>
      </ul>
      <p>
        This profile section can later include additional user details like name, bio, joined date, and
        a list of created blog posts.
      </p>
    </Container>
  );
}
