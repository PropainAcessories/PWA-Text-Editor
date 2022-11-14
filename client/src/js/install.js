const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the events
    window.deferredPrompt = event;

    // Show the button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();

    // Resets the deferred prompt variable so it's only used once.
    window.deferredPrompt = null;

    butInstall.classList('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clears prompt
    window.deferredPrompt = null;
});
