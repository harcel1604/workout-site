const apiUrl = 'http://localhost:5000/api'; // Adjust the URL based on your backend configuration

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const workoutForm = document.getElementById('addWorkoutForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Login successful!');
                    // Handle successful login (e.g., redirect to dashboard)
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            fetch(`${apiUrl}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Signup successful! Please log in.');
                    // Handle successful signup (e.g., switch to login form)
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }

    if (workoutForm) {
        workoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const exercise = document.getElementById('exercise').value;
            const sets = document.getElementById('sets').value;
            const reps = document.getElementById('reps').value;
            const duration = document.getElementById('duration').value;

            fetch(`${apiUrl}/workout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ exercise, sets, reps, duration })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Workout added successfully!');
                    // Handle successful workout addition (e.g., refresh workout list)
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
});