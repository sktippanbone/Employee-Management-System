export const login = async (email, password) => {
  try {
    // Simulated login logic (replace with API call)
    if (email === "test@example.com" && password === "password123") {
      return { success: true, message: "Login successful!" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  } catch (error) {
    return { success: false, message: "An error occurred during login" };
  }
};

