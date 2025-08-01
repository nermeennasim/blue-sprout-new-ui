import { useState } from "react";
import type { ApiResponse, ContactFormData } from "../components/Contact";

// Email API mutation hook
export const useEmailMutation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<ApiResponse | null>(null);

	const mutate = async (cformData: ContactFormData): Promise<ApiResponse> => {
		setIsLoading(true);
		setError(null);
		setData(null);

		try {
			const response = await fetch("http://localhost:3001/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(cformData),
			});

			const result: ApiResponse = await response.json();

			if (!response.ok) {
				throw new Error(
					result.error || `HTTP error! status: ${response.status}`
				);
			}

			setData(result);
			return result;
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "Network error occurred";
			setError(errorMessage);
			throw new Error(errorMessage);
		} finally {
			setIsLoading(false);
		}
	};

	const reset = () => {
		setError(null);
		setData(null);
		setIsLoading(false);
	};

	return {
		mutate,
		isLoading,
		error,
		data,
		reset,
		isSuccess: !!data?.success,
		isError: !!error,
	};
};
