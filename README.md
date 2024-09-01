# Fanush UI Angular

**Fanush UI Angular** is the frontend application for the Fanush API, developed using Angular. This web application provides a user-friendly interface for interacting with the Fanush API, enabling efficient management of Human Resource and Payroll functionalities.

## Features

- **Employee Management**: Create, view, edit, and manage employee profiles and job details.
- **Recruitment Management**: Post job listings and manage applicant tracking and interview scheduling.
- **Time and Attendance**: Clock in/out, manage leave requests, track overtime, and integrate with payroll systems.
- **Performance Management**: Set goals, conduct performance reviews, and track development plans.
- **Payroll Management**: Manage salary and benefits, generate pay stubs, and handle payment options.
- **Benefits Administration**: Manage employee enrollment in benefits and integrate with providers.
- **Learning and Development**: Create learning paths, assign training, and track completion and certifications.
- **Employee Self-Service**: Allow employees to view personal information, request leave, and access training materials.
- **Responsive Design**: Accessible on various devices for on-the-go management.

## Technologies Used

- **Angular**: Frontend framework for building dynamic web applications.
- **TypeScript**: Superset of JavaScript that compiles to plain JavaScript.
- **HTML/CSS**: Markup and styling for responsive and modern UI design.
- **Bootstrap**: CSS framework for responsive layout and design components.

## Getting Started

### Prerequisites

- **Node.js**: Version 18.20.4 or later.
- **Angular CLI**: Version 16.1.8 or later.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ChowdhuryMunir/Fanush_UI_Angular.git
   cd Fanush_UI_Angular
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Update API Endpoint**

   Update the API endpoint in the environment files (e.g., `src/environments/environment.ts`) to point to your Fanush API server:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://your-api-endpoint'
   };
   ```

4. **Run the Application**

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

## Project Structure

- **src/app**: Contains the core components, services, and modules.
- **src/environments**: Configuration files for different environments (development, production).
- **src/assets**: Static assets such as images and styles.
- **src/styles.css**: Global styles for the application.

## Contributors

- [Munir Chowdhury](https://github.com/ChowdhuryMunir)
- [Lema Taposhe](https://github.com/LemaTaposhe)
- [Nurur Rahaman](https://github.com/NururRahaman)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact  [Munir Chowdhury Saif](https://github.com/ChowdhuryMunir)
