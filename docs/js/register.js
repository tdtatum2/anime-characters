if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope:'/anime-characters/'})
    .then((reg) => {
        // This message displays when SW registration is successful.
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
        // This message displays when SW registration fails.
        console.log('Registration failed with ' + error);
    });
}