// Mock user data for authentication simulation
const MOCK_USERS = [
  {
    id: "1",
    email: "demo@luminouslabs.com",
    password: "Password123", // In a real app, this would be hashed
    name: "Demo User",
  },
  {
    id: "2",
    email: "admin@luminouslabs.com",
    password: "Admin123!",
    name: "Admin User",
  },
]

interface AuthResult {
  success: boolean
  message?: string
  user?: {
    id: string
    email: string
    name: string
  }
}

/**
 * Simulates user authentication with mock data
 * In a real application, this would make an API call to a secure authentication endpoint
 */
export async function authenticateUser(email: string, password: string): Promise<AuthResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // Find user by email
  const user = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase())

  // Check if user exists
  if (!user) {
    return {
      success: false,
      message: "No account found with this email address",
    }
  }

  // Check if password matches
  if (user.password !== password) {
    return {
      success: false,
      message: "Incorrect password",
    }
  }

  // Return successful authentication result
  return {
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  }
}

/**
 * In a real application, you would implement proper token-based authentication
 * This is a simplified example for demonstration purposes
 */
export function storeAuthToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("auth_token", token)
  }
}

export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token")
  }
  return null
}

export function removeAuthToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth_token")
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() !== null
}
