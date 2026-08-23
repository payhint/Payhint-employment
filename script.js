// =========================================================
// PAYHINT — BACKEND CONNECTION TEST
// =========================================================

async function checkPayhintBackend() {
    try {
        const response = await fetch("http://localhost:3000/api/status");

        if (!response.ok) {
            throw new Error("Backend returned an error.");
        }

        const data = await response.json();

        console.log("PAYHINT BACKEND:", data);
    } catch (error) {
        console.error("PAYHINT BACKEND CONNECTION ERROR:", error);
    }
}

checkPayhintBackend();