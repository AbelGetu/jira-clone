import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
    // InferRequestType, 
    InferResponseType 
} from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>;
// type RequestType = InferRequestType<typeof client.api.auth.logout["$post"]>;

export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async () => {
            const response = await client.api.auth.logout["$post"]();

            if(!response.ok) {
                throw new Error("Failed to log out");
            }
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Logged out")
            router.refresh();
            queryClient.invalidateQueries({ queryKey: ["current"]});
        },
        onError: () => {
            toast.success("Failed to log out")
        }
    });

    return mutation;
};