// hooks/useEmailMutation.ts - Complete Email Mutation Hook
import { useState } from "react";
import type { ApiResponse, ContactFormData } from "../components/Contact";

export const useEmailMutation = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<ApiResponse | null>(null);

	const mutate = async (cformData: ContactFormData): Promise<ApiResponse> => {
		console.log("🚀 Starting email mutation with data:", cformData);

		setIsLoading(true);
		setError(null);
		setData(null);

		try {
			// API URL - always use localhost for development
			const apiUrl = "http://localhost:3001/api/send-email";
			console.log("📡 Making request to:", apiUrl);

			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(cformData),
			});

			console.log("📥 Response status:", response.status);
			console.log("📥 Response ok:", response.ok);

			const result: ApiResponse = await response.json();
			console.log("📥 Parsed response data:", result);

			if (!response.ok) {
				throw new Error(
					result.error || `HTTP error! status: ${response.status}`
				);
			}

			console.log("✅ Email sent successfully:", result);
			setData(result);
			return result;
		} catch (err) {
			console.error("❌ Email mutation error:", err);

			let errorMessage: string;

			if (err instanceof TypeError && err.message.includes("fetch")) {
				errorMessage =
					"Cannot connect to server. Please check if the backend is running on port 3001.";
			} else if (err instanceof Error) {
				errorMessage = err.message;
			} else {
				errorMessage = "Network error occurred";
			}

			console.error("❌ Final error message:", errorMessage);
			setError(errorMessage);
			throw new Error(errorMessage);
		} finally {
			setIsLoading(false);
		}
	};

	const reset = () => {
		console.log("🔄 Resetting email mutation state");
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
