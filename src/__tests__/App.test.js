import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render (<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
      });
      // Assert
      expect(topLevelHeading).toBeInTheDocument();
  });
    
  test("displays an image with the correct alt text", () => {
    render(<App />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "A description of yourself or your image");
  });
  
  test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const secondLevelHeading = screen.getByRole("heading", { level: 2 });
    expect(secondLevelHeading).toHaveTextContent("About Me");
  });
  
  test("displays a paragraph for the biography", () => {
    render(<App />);
    const paragraph = screen.getByText(/this is a brief biography/i);
    expect(paragraph).toBeInTheDocument();
  });
  
  test("includes a link to GitHub and LinkedIn", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });    