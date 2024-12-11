# Bit Code Technologies Task

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies](#technologies)
3. [Requirements](#requirements)
4. [Getting Started](#getting-started)

---

## **📋 Project Overview**

This web application is designed to streamline report generation and simplify form creation. It allows users to manage and interact with data efficiently through the following features:

- **Report Generation:** Users can create detailed reports based on data, including user, product, and purchase information.
- **Data Management:** Users can view the following tables directly in the application:

1. **User Table:** Displays user details such as name, phone, and registration date.
2. **Products Table:** Lists available products with details like name, code, and price.
3. **Report Table:** Summarizes purchase history with information like order number, user, product, quantity, and total price.

---

## **🚀 Technologies**

### **Frontend**

- **React.js & TypeScript**: For scalable UI development.

### **Tools**

- **VS Code**: Code editor.
- **GitHub**: Version control.

---

## **🛠️ Getting Started**

### **Prerequisites**

Ensure the following tools are installed on your system:

- Node.js (v18 or higher)

---

### **Steps to Set Up**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sajidul-dev/generate-report-frontend.git
   cd generate-report-frontend
   ```
2. **Install Dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Run Server: From [here](https://github.com/sajidul-dev/genrate-report-server)**

4. **Set Up Environment Variables: Copy .env.example to .env and configure the necessary values:**

   ```bash
   # Configuration
   VITE_API_URL=http://localhost:5000
   ```

5. **Start the Development Server:**
   ```bash
   yarn dev
   # or
   npm run dev
   ```
6. Project will be running on port `http://localhost:5173/`
