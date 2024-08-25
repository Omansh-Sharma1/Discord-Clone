import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modals";

const SetupPage = async (): Promise<JSX.Element | null> => {
    try {
        const profile = await initialProfile();

        if (!profile) {
            return <div>No profile found. Please sign in.</div>;
        }

        const server = await db.server.findFirst({
            where: {
                members: {
                    some: {
                        profileId: profile.id
                    }
                }
            }
        });

        if (server) {
            redirect(`/servers/${server.id}`);
            return null;
        }

        return <InitialModal />;
    } catch (error) {
        console.error("Error fetching profile or server:", error);
        return (
            <div>Error loading setup page. Please try again later.</div>
        );
    }
};

export default SetupPage;
