function handleCredentialResponse(user) {
    console.log(user);
    window.open(`opaque://authorization/?token=${user.credential}`);
    window.close();
};

window.handleCredentialResponse = handleCredentialResponse;
