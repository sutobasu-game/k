const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let currentPassword = generatePassword();
setInterval(() => {
    currentPassword = generatePassword();
}, 24 * 60 * 60 * 1000); // 24���Ԃ��ƂɃp�X���[�h���X�V

function generatePassword() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === currentPassword) {
        res.json({ success: true, message: '���O�C������' });
    } else {
        res.json({ success: false, message: '�p�X���[�h���Ⴂ�܂�' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
