const admin = require('firebase-admin')

const serviceAccount = require('./serviceAcc.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const data = require('./data.json');

async function uploadData() {
    for(const doc of data) {
        await db.collection('question').add(doc);
    }
}

uploadData();