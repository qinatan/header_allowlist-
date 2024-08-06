import { useMutation } from "react-query";

export const useCreateHeaderAllowlist = () => {
    // Mutation function
    const createHeaderAllowlistRequest = async (headerData: any): Promise<void> => {
        // API call
        const response = await fetch(
            "http://localhost:8000/allowlist/header", // Corrected URL
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Added Content-Type header
                },
                body: JSON.stringify(headerData),
            }
        );
        if (!response.ok) {
            throw new Error("Unable to post header allowlist");
        }
    };

    // useMutation
    const {
        mutateAsync: createHeaderAllowlist,
        isSuccess,
        error
    } = useMutation(createHeaderAllowlistRequest, {
        onError: (err) => {
            console.error("Error creating header allowlist:", err);
        },
        onSuccess: () => {
            console.log("Header allowlist created successfully");
        }
    });

    return { createHeaderAllowlist, isSuccess, error };
};
