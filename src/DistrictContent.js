// ContentForm.js

export function openContentForm(districtName) {
    const newWindow = window.open('', '_blank', 'width=500,height=400');
    
    const form = document.createElement('form');
    form.method = 'post';
    form.action = `http://localhost:3000/${districtName}`;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'myInput';
    form.appendChild(input);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    newWindow.document.body.appendChild(form);
}
