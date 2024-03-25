# My Password Generator Application

## Overview
This project involved making a password generator application operational and user friendly so that users can generate random passwords based on specific criteria. The application runs in the browser and features a clean and responsive user interface. Users can select the length of the password and specify whether it should include uppercase letters, lowercase letters, numbers, and special characters.

## Motivation
The motivation behind this project is to provide a secure and easy-to-use tool for generating strong passwords. With an increase in brute force attacks, having a reliable password generator is essential for individuals and organisations to create robust passwords that enhance their digital security.

## Project Scope
The project involves building a password generator application that meets specific requirements, including length validation, character type selection, and error handling. The application should provide an intuitive user experience and generate passwords that adhere to the selected criteria.

## Documentation
This technical document outlines the steps to set up and understand the Password Generator project. The project is built using HTML, CSS, and JavaScript to create a user-friendly application for generating secure passwords.

### Setting Up the Project

1. Create Repository: 
Start by creating a new repository for the project on your preferred version control platform (e.g., GitHub).
2. Clone Repository: 
Clone the empty repository to your local machine using Git. Navigate to the desired directory and run the following command:

bash
Copy code
``` git clone <repository_url> ```

3. Create File Structure: Organize your project files into appropriate directories. You should have directories for `css`, `javascript`, and `images`, along with an `index.html` file at the root level.
4. Copy CSS Styles: Copy the CSS styles provided into a new file named `style.css` within the `css` directory.
5. Copy JavaScript Logic: Copy the JavaScript code provided into a new file named `script.js` within the `javascript` directory.
6. Add Image Files: If you have image files to enhance the application's appearance, place them in the `images` directory.
7. Set Up HTML File: Copy the HTML code provided into the `index.html` file at the root level of your project.
8. Link Files: Ensure that the HTML file links to the CSS and JavaScript files correctly. Update the `<link>` and `<script>` tags in the HTML file as necessary.

### Understanding the Code

#### CSS (style.css)
The CSS file contains styles for the user interface elements of the Password Generator application. It defines the layout, colors, fonts, and responsiveness of the page.

#### JavaScript (script.js)
The JavaScript file contains the logic for generating passwords based on user preferences. It handles user inputs, such as password length and character types, and generates random passwords accordingly.

#### HTML (index.html)
The HTML file provides the structure and content for the Password Generator application. It defines the layout of the user interface elements, including sliders, checkboxes, buttons, and the password display area.

### Running the Application
To run the Password Generator application:

1. Open the `index.html` file in a web browser.
2. Specify the desired password length using the slider.
3. Select the character types to include in the password (uppercase, lowercase, numbers, special characters) by checking the corresponding checkboxes.
4. Click the "Generate Password" button to generate a password based on the specified criteria.
5. If an error message appears, review the message and make the necessary adjustments.
6. Once a password is generated, it will be displayed in the designated area. Click the "Copy Password" button to copy the password to your clipboard for immediate use.
   
### Conclusion
With these steps, you can set up and understand the Password Generator project. It provides a secure and user-friendly tool for generating strong passwords tailored to individual preferences, conforms to WCAG 2.1 standards, and is responsive across devices.

For any further enhancements or modifications, refer to the respective files and modify the code accordingly.

Feel free to reach out for any assistance or clarification. Happy password generating!

## Key Features
- **Password Length Selection:** Users can specify the desired length of the generated password (between 8 and 128 characters).
- **Character Type Selection:** Users can choose to include uppercase letters, lowercase letters, numbers, and special characters in the generated password.
- **Validation and Error Handling:** The application validates user inputs and ensures that at least one character type is selected. Error messages are displayed to guide users.
- **Responsive Design:** The user interface is designed to be responsive, adapting to various screen sizes and devices.
- **Copy to Clipboard:** The generated password can be easily copied to the clipboard for convenient use.

## Technologies Used
- **HTML:** Structuring the web page and creating user interface elements.
- **CSS:** Styling the user interface and ensuring a visually appealing design.
- **JavaScript:** Implementing the password generation logic, user input validation, and dynamic content updates.
- **GitHub:** Hosting the project repository and enabling version control.
- **GitHub Pages:** Deploying the application online for easy access.

## Future Enhancements
- **Password Strength Indicator:** Implement a feature to evaluate the strength of the generated password (weak, medium, strong) based on established criteria.
- **User Profiles:** Allow users to create profiles with specific password generation preferences and save their generated passwords securely.
- **Password History:** Implement a history feature that stores previously generated passwords for reference.
- **Integration with Password Managers:** Provide an option to export generated passwords to popular online password management tools and cold wallets

## Screenshot and Links to Deployed Application

- ![Full Landing Page](/images/my_password_generator_screenshot.png)

- [My Password Generator Application](#) *(https://simonamckenzie.github.io/my-password-generator/)*
- [GitHub Repository](#) *(https://github.com/SimonAMcKenzie/my-password-generator)*

## Installation
No installation is required to use the Password Generator Application. Simply access the provided URL in your web browser to start generating secure passwords.

## Usage
1. Visit the deployed Password Generator Application URL.
2. Specify the desired password length using the slider.
3. Select the character types to include in the password (uppercase, lowercase, numbers, special characters) by checking the corresponding checkboxes.
4. Click the "Generate Password" button to generate a password based on the specified criteria.
5. If an error message appears, review the message and make the necessary adjustments (e.g., select at least one character type, choose a valid password length).
6. Once a password is generated, it will be displayed in the designated area. Click the "Copy Password" button to copy the password to your clipboard for immediate use.

## Credits

### Arrays in JavaScript:

- **[MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):** MDN Web Docs provide comprehensive information on JavaScript arrays, including how to create and manipulate arrays.

### Functions in JavaScript:

- **[MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions):** MDN Web Docs offer detailed explanations about JavaScript functions, including how to define and use them.

### User Input in JavaScript:

- **[MDN Web Docs - Window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt):** Learn how to use the prompt() function to get user input from MDN Web Docs.

### Random Number Generation in JavaScript:

- **[MDN Web Docs - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random):** MDN Web Docs explain how to generate random numbers using the Math.random() function.

### DOM Manipulation in JavaScript:

- **[MDN Web Docs - Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model):** Understand the basics of DOM manipulation in JavaScript from MDN Web Docs.

### HTML and CSS Basics:

- **[MDN Web Docs - HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML):** Learn the basics of HTML, the structure of web pages, from MDN Web Docs.
- **[MDN Web Docs - CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS):** Understand the fundamentals of CSS, the language used for styling web pages, from MDN Web Docs.

### How TO - Range Sliders:

- **[W3Schools - Range Sliders](https://www.w3schools.com/howto/howto_js_rangeslider.asp):** Learn how to create custom range sliders with CSS and JavaScript.

