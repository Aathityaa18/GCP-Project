// async function createServiceAccount() {
// const { IAM } = require('@google-cloud/iam');
// const { GoogleAuth } = require('google-auth-library');


// PROJECT_ID = 'sample-1-381412'

// ACCOUNT_NAME = 'sampleUser1'

// ACCOUNT_DISPLAY_NAME = 'sampleuser'

// ROLE = 'roles/owner'

// KEY_FILE_NAME = 'sampleuser_keyfile.json'

// // const auth = new GoogleAuth();


// // const auth = new GoogleAuth({
// //   keyFile: KEY_FILE_PATH,
// //   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// // });

// const client = new IAM({
//   authClient: await auth.getClient(),
// });

// // const { access_token } = await auth.getAccessToken();

// // const axios = require('axios').default;

// // const response = await axios.get(`https://cloudresourcemanager.googleapis.com/v1/projects`, {
// //   headers: {
// //     'Authorization': `Bearer ${access_token}`,
// //   },
// // });

// // console.log(response.data);



// const [serviceAccount] = await client.createServiceAccount({
//   name: `projects/${PROJECT_ID}`,
//   requestBody: {
//     accountId: ACCOUNT_NAME,
//     serviceAccount: {
//       displayName: ACCOUNT_DISPLAY_NAME,
//     },
//   },
// });

// console.log(`Service account created: ${serviceAccount.name}`);

// const [policy] = await client.getIamPolicy({
//   resource: `projects/${PROJECT_ID}`,
// });

// policy.bindings.push({
//   role: ROLE,
//   members: [`serviceAccount:${serviceAccount.email}`],
// });

// const [updatedPolicy] = await client.setIamPolicy({
//   resource: `projects/${PROJECT_ID}`,
//   requestBody: {
//     policy: policy,
//   },
// });

// console.log(`Role ${ROLE} granted to ${serviceAccount.email}`);


// const [key] = await client.getServiceAccountKey({
//   name: serviceAccount.name,
// });

// console.log(`Key file created: ${key.name}`);

// const fs = require('fs');
// fs.writeFileSync(KEY_FILE_NAME, key.privateKeyData);
// }

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////



// const { IAM } = require('@google-cloud/iam');

// async function main() {
// const { GoogleAuth } = require('google-auth-library');

// const PROJECT_ID = 'sample-1-381412';
// const ACCOUNT_NAME = 'sampleUser1';
// const ACCOUNT_DISPLAY_NAME = 'sampleuser';
// const ROLE = 'roles/owner';
// const KEY_FILE_NAME = './sampleuser_keyfile.json';

// const auth = new GoogleAuth({
//   keyFile: 'KEY_FILE_NAME', // Replace with the path to your JSON key file
//   scopes: ['https://www.googleapis.com/auth/cloud-platform'],
// });

// const client = new IAM({
//   authClient: await auth.getClient(),
// });

// const { access_token } = await auth.getAccessToken();

// const axios = require('axios').default;

// const response = await axios.get(`https://cloudresourcemanager.googleapis.com/v1/projects`, {
//   headers: {
//     'Authorization': `Bearer ${access_token}`,
//   },
// });

// console.log(response.data);

// const [serviceAccount] = await client.createServiceAccount({
//   name: `projects/${PROJECT_ID}`,
//   requestBody: {
//     accountId: ACCOUNT_NAME,
//     serviceAccount: {
//       displayName: ACCOUNT_DISPLAY_NAME,
//     },
//   },
// });

// console.log(`Service account created: ${serviceAccount.name}`);

// const [policy] = await client.getIamPolicy({
//   resource: `projects/${PROJECT_ID}`,
// });

// policy.bindings.push({
//   role: ROLE,
//   members: [`serviceAccount:${serviceAccount.email}`],
// });

// const [updatedPolicy] = await client.setIamPolicy({
//   resource: `projects/${PROJECT_ID}`,
//   requestBody: {
//     policy: policy,
//   },
// });

// console.log(`Role ${ROLE} granted to ${serviceAccount.email}`);

// const [key] = await client.getServiceAccountKey({
//   name: serviceAccount.name,
// });

// console.log(`Key file created: ${key.name}`);

// const fs = require('fs');
// fs.writeFileSync(KEY_FILE_NAME, key.privateKeyData);

// }


// main();








const { IAM } = require('@google-cloud/iam');
const { GoogleAuth } = require('google-auth-library');
const axios = require('axios').default;
const fs = require('fs');

const PROJECT_ID = 'sample-1-381420';
const ACCOUNT_NAME = 'sampleUser1';
const ACCOUNT_DISPLAY_NAME = 'sampleuser';
const ROLE = 'roles/owner';
const KEY_FILE_NAME = 'sampleuser_keyfile.json';

async function main() {
  try {
    const auth = new GoogleAuth({
      keyFile: './sampleuser_keyfile.json', // Replace with the path to your JSON key file
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const client = new IAM({
      authClient: await auth.getClient(),
    });

    const { access_token } = await auth.getAccessToken();

    const response = await axios.get(`https://cloudresourcemanager.googleapis.com/v1/projects`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    console.log(response.data);

    const [serviceAccount] = await client.createServiceAccount({
      name: `projects/${PROJECT_ID}`,
      requestBody: {
        accountId: ACCOUNT_NAME,
        serviceAccount: {
          displayName: ACCOUNT_DISPLAY_NAME,
        },
      },
    });

    console.log(`Service account created: ${serviceAccount.name}`);

    const [policy] = await client.getIamPolicy({
      resource: `projects/${PROJECT_ID}`,
    });

    policy.bindings.push({
      role: ROLE,
      members: [`serviceAccount:${serviceAccount.email}`],
    });

    const [updatedPolicy] = await client.setIamPolicy({
      resource: `projects/${PROJECT_ID}`,
      requestBody: {
        policy: policy,
      },
    });

    console.log(`Role ${ROLE} granted to ${serviceAccount.email}`);

    const [key] = await client.getServiceAccountKey({
      name: serviceAccount.name,
    });

    console.log(`Key file created: ${key.name}`);

    fs.writeFileSync(KEY_FILE_NAME, key.privateKeyData);
  } catch (err) {
    console.error(err);
  }
}

main();
