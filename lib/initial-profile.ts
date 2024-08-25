import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { Profile } from "@prisma/client"; // Assuming you're using Prisma

export const initialProfile = async (): Promise<Profile | null> => {
    try {
        const user = await currentUser();

        if (!user) {
            redirectToSignIn(); // Perform the redirect, then return null or undefined
            return null;
        }

        let profile = await db.profile.findUnique({
            where: {
                UserId: user.id,
            }
        });

        if (profile) {
            return profile;
        }

        profile = await db.profile.create({
            data: {
                UserId: user.id,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl || '', // Provide a default value if imageUrl is not available
                email: user.emailAddresses[0]?.emailAddress || '' // Provide a default value if emailAddress is not available
            }
        });

        return profile;
    } catch (error) {
        console.error("Error in initialProfile function:", error);
        throw new Error("Failed to create or fetch profile");
    }
};
