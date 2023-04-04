const {google} = require('googleapis');

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const resource = google.cloudresourcemanager({version: 'v2'});

const folderName = 'Folder';

// Function to generate a random 12-digit decimal number
function getRandomDecimal() {
  return Math.floor(Math.random() * (999999999999 - 100000000000 + 1) + 100000000000);
}

async function createFolder(folderName, folderId) {
  try {
    const request = {
      auth: auth,
      requestBody: {
        displayName: folderName,
        parent: 'organizations/1052443526546', // Replace with your own organization ID
        folderId: folderId,
      },
    };

    const res = await resource.folders.create(request);
    console.log(`Folder ${folderName} with ID ${folderId} created.`);
    console.log(res.data);
  } catch (err) {
    console.error(`Error creating folder: ${err}`);
  }
}

const folderId = getRandomDecimal().toString();
createFolder(folderName, folderId);
