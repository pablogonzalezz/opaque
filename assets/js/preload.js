function handleCredentialResponse(user) {
    console.log(user);
    window.open(`opaque://authorization/?token=${user.credentials}`);
    window.close();
};

window.handleCredentialResponse = handleCredentialResponse;
