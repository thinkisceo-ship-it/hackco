# **Blueprint: Lotto Number Generator**

## **Overview**

This application provides a simple and visually appealing interface for generating random lottery numbers. It's built as a modern, framework-less web application using Web Components and supports both light and dark modes.

## **Design & Features**

### **Overall Design**

*   **Theme:** Modern, clean, and interactive with support for both light and dark color schemes.
*   **Layout:** A centrally aligned component on a subtly textured background.
*   **Colors:** Uses a defined color palette with CSS variables for easy theming. A primary blue is used for interactive elements, and vibrant, gradient-based colors are used for the numbers.
*   **Typography:** Clear and readable, with `Segoe UI` as the primary font. Hero text is large and prominent.
*   **Interactivity:** The main component features a "lifted" card design with hover effects and a glowing button. A theme toggle switch allows the user to switch between light and dark modes.

### **Features**

*   **Lotto Number Generator Component (`<lotto-generator>`)**
    *   **Functionality:** Generates a set of 6 unique random numbers between 1 and 45.
    *   **Trigger:** A button labeled "Generate Numbers".
    *   **Display:** The generated numbers are displayed in a clean, organized manner. Each number is presented in its own styled circle.
    *   **Styling:** The component adapts to the global theme (light/dark) by using CSS variables.
*   **Dark/Light Mode Toggle**
    *   A user-controlled switch to toggle between a light and dark theme for the entire application.

## **Current Plan: Add Dark/Light Mode**

1.  **Update `blueprint.md`:** Reflect the addition of the dark/light mode feature in the project documentation.
2.  **Update `index.html`:** Add a theme toggle switch and the script required to handle the theme change by toggling a class on the `body` element.
3.  **Update `style.css`:**
    *   Define color palettes for both light and dark themes using CSS variables.
    *   Update element styles to use these variables, ensuring the UI can react to theme changes.
    *   Add styling for the new theme toggle switch.
4.  **Update `main.js`:** Modify the `LottoGenerator` component to use the globally defined CSS variables for its colors, making it theme-aware.
5.  **Git Push:** Commit all changes and push to the remote repository to deploy.
