# **Blueprint: Fortune Teller & Partnership Inquiries**

## **Overview**

This is a dynamic, modern web application that provides users with a daily and yearly fortune based on their date of birth. It also includes a simple and effective form for handling partnership inquiries via Formspree. The application features a clean, intuitive interface and supports both light and dark themes.

## **Design & Features**

### **Overall Design**

*   **Theme:** Elegant and mystical, with a user-friendly interface. It supports both light and dark color schemes.
*   **Layout:** A central card-based layout that is responsive and works well on both desktop and mobile devices.
*   **Typography:** Uses a clear, legible font (`Segoe UI`) that enhances readability.
*   **Interactivity:** Smooth transitions and effects for a pleasant user experience.

### **Features**

*   **Fortune Teller Component (`<fortune-teller>`)**
    *   **Input:** A date picker for the user to enter their birthdate.
    *   **Functionality:** Generates a daily and yearly fortune based on the user's birthdate.
    *   **Display:** Fortunes are displayed in separate, clearly marked sections.
*   **Partnership Inquiry Form (`<contact-form>`)**
    *   **Functionality:** Allows users to send partnership inquiries directly through a simple form.
    *   **Fields:** Name, Email, and Message.
    *   **Backend:** Submissions are handled by Formspree, sending the data to a pre-configured email address.
    *   **Styling:** The form is styled to be consistent with the overall application theme (light and dark modes).
*   **Dark/Light Mode Toggle**
    *   A user-controlled switch to toggle between a light and dark theme for the entire application.

## **Current Plan: Add Partnership Inquiry Form**

1.  **Update `blueprint.md`:** Add the new "Partnership Inquiry Form" feature to the project blueprint.
2.  **Update `index.html`:** Add the new `<contact-form>` web component to the page, placing it below the fortune teller.
3.  **Update `main.js`:**
    *   Define and register the new `ContactForm` Web Component.
    *   Create the component's structure with a form element pointing to the provided Formspree URL.
    *   The form will include fields for Name, Email, and Message.
4.  **Git Push:** Commit the new changes and push them to the remote repository to deploy the updated website.