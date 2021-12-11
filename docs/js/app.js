if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('./sw.js', {scope:'./anime-characters/'})
        .then((reg) => {
            // This message displays when SW registration is successful.
            console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch((error) => {
            // This message displays when SW registration fails.
            console.log('Registration failed with ' + error);
        });
    });
} else {
    console.log("Service Worker unavailable.");
}

