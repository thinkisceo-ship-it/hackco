# **Blueprint: Fortune Teller & Partnership Inquiries (Korean)**

## **Overview**

This is a dynamic, modern web application localized for a Korean audience. It provides users with a daily and yearly fortune based on their date of birth and includes a simple form for partnership inquiries. The application features a clean, intuitive interface and supports both light and dark themes.

## **Design & Features**

### **Overall Design**

*   **Language:** The entire user interface and all content are in Korean.
*   **Theme:** Elegant and mystical, with a user-friendly interface. It supports both light and dark color schemes.
*   **Layout:** A central card-based layout that is responsive and works well on both desktop and mobile devices.
*   **Typography:** Uses a clear, legible font suitable for Korean characters.

### **Features**

*   **Fortune Teller Component (`<fortune-teller>`)**
    *   **UI Text:** All labels, buttons, and titles are in Korean (e.g., "생년월일을 입력하세요", "운세 보기").
    *   **Functionality:** Generates a daily and yearly fortune from a Korean dataset based on the user's birthdate.
*   **Partnership Inquiry Form (`<contact-form>`)**
    *   **UI Text:** All form labels and the submit button are in Korean (e.g., "이름", "이메일", "메시지 보내기").
    *   **Functionality:** Allows users to send partnership inquiries through a simple, localized form.
*   **Dark/Light Mode Toggle**
    *   A user-controlled switch to toggle between light and dark themes.

## **Current Plan: Localize the Application to Korean**

1.  **Update `blueprint.md`:** Reflect the Korean localization effort in the blueprint.
2.  **Update `main.js`:**
    *   Translate all UI strings, button texts, and labels in both the `FortuneTeller` and `ContactForm` components to Korean.
    *   Translate the predefined fortune messages into natural-sounding Korean.
3.  **Git Push & Deploy:** Commit the localization changes, push them to the remote repository, and deploy the final Korean version of the application to Firebase Hosting.
