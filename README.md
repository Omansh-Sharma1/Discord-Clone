Ciscord: A Discord Clone Project 🖥️
=====================================

### Welcome to Ciscord 🎉

Ciscord is a Discord clone project built with Next.js and Shadcn UI. This project aims to provide a solid foundation for building a scalable and maintainable Discord-like application.

### 🚀 Getting Started

To get started with Ciscord, follow these steps:

1. **Clone the repository**: `git clone https://github.com/your-username/ciscord.git`
2. **Install Node modules**: `npm install` or `yarn install`
3. **Run the development server**: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🎨 Shadcn UI Configuration

This project uses Shadcn UI, a popular UI kit for building Next.js applications. The project is configured to use the **Stone** and **Default** themes, which were selected during the Shadcn UI initialization process.

### 🗄️ Prisma & NeonDB Integration

Ciscord uses **Prisma ORM** integrated with **NeonDB** for database management. The Prisma schema is designed to handle the core functionalities of a Discord-like application, including models for **Profile**, **Server**, **Member**, and **Channel**.

### 🔒 Environment Variables

This project uses environment variables to store sensitive information, such as **Clerk secret keys** and **database connection strings**. To set up your environment variables:

1. Create a new file named **`.env`** in the root of your project.
2. Add your Clerk secret key, NeonDB connection string, and other environment variables to the **`.env`** file, following the format `VARIABLE_NAME=value`.
3. Ensure that **`.env`** is added to your **`.gitignore`** file to prevent sensitive information from being committed to your repository.

### 🌟 Features

* **Organized code structure** for cleanliness and maintainability.
* **Clerk authentication** integrated for secure user sign-up and sign-in.
* **NeonDB database integration** with Prisma for managing user profiles, servers, members, and channels.
* **Open Sans font** used in the main RootLayout for a modern and clean design.
* **Form handling** using Shadcn's form libraries, with validation and submission logic encapsulated in Initial-Modals.tsx.
* **Environment variables** managed securely in a **`.env`** file, with sensitive data excluded from version control.

### 📚 Learn More

To learn more about Next.js, Shadcn UI, Prisma, and Clerk, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
* [Shadcn UI Documentation](https://shadcn.github.io/ui/) - Explore Shadcn UI components and customization options.
* [Prisma Documentation](https://www.prisma.io/docs) - Learn about Prisma ORM and its database management features.
* [Clerk Documentation](https://clerk.dev/docs) - Understand Clerk's authentication and authorization features.
* #### ▶️ Inspiration
  This project was inspired by [Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL | Full Course 2023]([https://www.youtube.com/watch?v=VIDEO_ID](https://youtu.be/ZbX4Ok9YX94?si=40HAIuTL2TLMvi8F)). I'd like to give credit to the original creator ( Code With Antonio ) for providing a great starting point for this project.

### 🌍 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
