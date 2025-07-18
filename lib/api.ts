// Utility functions for making API calls

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://zayra-dental-nextjs.vercel.app/api"
    : "http://localhost:3000/api";

// Generic API fetch wrapper
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<{ success: boolean; data?: T; error?: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

// Google Reviews API
export async function getGoogleReviews() {
  return apiFetch("/reviews/google");
}

export async function refreshGoogleReviews() {
  return apiFetch("/reviews/google", { method: "POST" });
}

// Business Information API
export async function getBusinessInfo() {
  return apiFetch("/business/info");
}

// Pricing API
export async function getPricing(category?: string, treatment?: string) {
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (treatment) params.append("treatment", treatment);

  const query = params.toString() ? `?${params.toString()}` : "";
  return apiFetch(`/pricing${query}`);
}

export async function updatePricing(
  pricingData: Record<string, unknown>,
  adminKey: string,
) {
  return apiFetch("/pricing", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${adminKey}`,
    },
    body: JSON.stringify(pricingData),
  });
}

// Team API
export async function getTeamData(member?: string) {
  const query = member ? `?member=${encodeURIComponent(member)}` : "";
  return apiFetch(`/team${query}`);
}

export async function updateTeamData(
  teamData: Record<string, unknown>[],
  adminKey: string,
) {
  return apiFetch("/team", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${adminKey}`,
    },
    body: JSON.stringify(teamData),
  });
}

// Analytics API
export async function getAnalytics(period?: string, metric?: string) {
  const params = new URLSearchParams();
  if (period) params.append("period", period);
  if (metric) params.append("metric", metric);

  const query = params.toString() ? `?${params.toString()}` : "";
  return apiFetch(`/analytics${query}`);
}

export async function logAnalyticsEvent(
  event: string,
  data?: Record<string, unknown>,
) {
  return apiFetch("/analytics", {
    method: "POST",
    body: JSON.stringify({
      event,
      data,
      timestamp: new Date().toISOString(),
    }),
  });
}

// Contact Form Utilities
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  recaptchaToken: string;
}

export interface AppointmentFormData extends ContactFormData {
  preferredDate: string;
  preferredTime: string;
}

// Client-side form submission helpers
export async function submitContactForm(formData: ContactFormData) {
  // This would typically be handled by the server action
  // but can be used for client-side submissions if needed
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response.json();
}

export async function submitAppointmentForm(formData: AppointmentFormData) {
  const response = await fetch("/api/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response.json();
}

// Utility for client-side caching
const cache = new Map<
  string,
  { data: unknown; timestamp: number; ttl: number }
>();

export function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;

  const now = Date.now();
  if (now > cached.timestamp + cached.ttl) {
    cache.delete(key);
    return null;
  }

  return cached.data;
}

export function setCachedData<T>(key: string, data: T, ttlMs: number = 300000) {
  // 5 minutes default
  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl: ttlMs,
  });
}

// Enhanced API fetch with caching
export async function getCachedApiData<T>(
  endpoint: string,
  cacheKey: string,
  ttlMs: number = 300000,
): Promise<{ success: boolean; data?: T; error?: string }> {
  // Try to get from cache first
  const cached = getCachedData<T>(cacheKey);
  if (cached) {
    return { success: true, data: cached };
  }

  // Fetch from API
  const result = await apiFetch<T>(endpoint);

  // Cache successful results
  if (result.success && result.data) {
    setCachedData(cacheKey, result.data, ttlMs);
  }

  return result;
}
