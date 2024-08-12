# Ciscord - A Discord Clone Project
=====================================

### Getting Started
####

This project uses Next.js from Shadcn UI, with a custom setup for a Discord clone. To get started, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ciscord.git`
2. **<code>Install Node Modules</code>**: Run `npm install` or `yarn install` to install the required dependencies listed in `package.json`. This will install the necessary Node modules, including Next.js, Clerk, and other dependencies.
3. Run the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables
####

This project uses environment variables to store sensitive information, such as Clerk secret keys. To set up your environment variables:

1. Create a new file named `.env` in the root of your project.
2. Add your Clerk secret key and other environment variables to the `.env` file, following the format `VARIABLE_NAME=value`.
3. Make sure to add `.env` to your `.gitignore` file to prevent sensitive information from being committed to your repository.

### Features
####

* **<b>Organizational folders</b>** for cleanliness
* **<i>Stone and Default themes</i>** used
* **<code>Open Sans font</code>** used in main layout.tsx
* **<u>Clerk Sign-up and Sign-in authenticator</u>** integrated
* `.env` file for storing Clerk secret key and related stuff
* Node modules and `.env.local` hidden for security

### Learn More
####

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel
####

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Contributing
####

Contributions are welcome! Feel free to open an issue or submit a pull request.

### License
####

This project is licensed under the **<code>MIT License</code>**. See LICENSE for details.