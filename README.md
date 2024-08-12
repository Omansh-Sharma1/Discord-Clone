# Ciscord: A Discord Clone Project
=====================================

## Welcome to Ciscord

Ciscord is a Discord clone project built with Next.js and Shadcn UI. This project aims to provide a solid foundation for building a scalable and maintainable Discord-like application.

### Getting Started

To get started with Ciscord, follow these steps:

1. **Clone the repository**: `git clone https://github.com/your-username/ciscord.git`
2. **Install Node modules**: `npm install` or `yarn install`
3. **Run the development server**: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Shadcn UI Configuration

This project uses Shadcn UI, a popular UI kit for building Next.js applications. By default, the project is configured to use the **<b>Stone</b>** and **<b>Default</b>** themes, which are selected during the Shadcn UI initialization process.

### Environment Variables

This project uses environment variables to store sensitive information, such as Clerk secret keys. To set up your environment variables:

1. Create a new file named **`.env`** in the root of your project.
2. Add your Clerk secret key and other environment variables to the **`.env`** file, following the format `VARIABLE_NAME=value`.
3. Make sure to add **`.env`** to your **`.gitignore`** file to prevent sensitive information from being committed to your repository.

### Features

* **Organizational folders** for cleanliness and maintainability
* **Clerk Sign-up and Sign-in authenticator** integrated for secure user authentication
* **Open Sans font** used in main layout.tsx for a modern and clean design
* **`.env` file** for storing Clerk secret key and related stuff
* **Node modules and `.env.local` hidden** for security

### Learn More

To learn more about Next.js, Shadcn UI, and Clerk, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Shadcn UI Documentation](https://shadcn.github.io/ui/) - learn about Shadcn UI components and customization options.
* [Clerk Documentation](https://clerk.dev/docs) - learn about Clerk authentication and authorization features.

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.